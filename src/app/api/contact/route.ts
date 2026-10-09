import { normalizeContact, validateContact } from "@/lib/contact";
import { sendContactEmail } from "@/lib/sendContactEmail";

/*
 * POST /api/contact — receives the contact form.
 *
 * Responses (JSON):
 *   200 { ok: true }                      the email provider accepted it
 *   400 { error: "invalid_request" }      not JSON, or far too large
 *   422 { error: "validation", errors }   a field failed validation
 *   429 { error: "rate_limited" }         too many messages from one address
 *   502 { error: "send_failed" }          the email provider failed
 *   503 { error: "not_configured" }       email credentials are not set
 */

const MAX_BODY_BYTES = 10_000;

// A small, best-effort limit: five messages per ten minutes per address. It
// lives in memory, so it resets on restart and is per server instance.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const recentRequests = new Map<string, number[]>();

function isRateLimited(address: string) {
  const now = Date.now();
  const recent = (recentRequests.get(address) ?? []).filter(
    (time) => now - time < RATE_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT) {
    recentRequests.set(address, recent);
    return true;
  }
  recent.push(now);
  recentRequests.set(address, recent);
  return false;
}

export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  // Honeypot: a field people never see. Bots that fill it in are told it
  // worked, and nothing is sent.
  if ((body as Record<string, unknown>).website) {
    return Response.json({ ok: true });
  }

  const values = normalizeContact(body);
  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) {
    return Response.json({ error: "validation", errors }, { status: 422 });
  }

  const address =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(address)) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  const result = await sendContactEmail(values);
  if (!result.ok) {
    return result.reason === "not_configured"
      ? Response.json({ error: "not_configured" }, { status: 503 })
      : Response.json({ error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
