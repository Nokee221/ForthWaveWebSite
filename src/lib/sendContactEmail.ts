import "server-only";
import type { ContactValues } from "@/lib/contact";

/*
 * Sends a contact-form message by email through Resend's HTTP API
 * (https://resend.com/docs/api-reference/emails/send-email).
 *
 * Configuration — server-only environment variables, see .env.example:
 *   RESEND_API_KEY      the Resend API key
 *   CONTACT_EMAIL_TO    where messages are delivered
 *   CONTACT_EMAIL_FROM  the sender; must use a domain verified in Resend
 *
 * The recipient always comes from configuration, never from the visitor.
 */

export type SendResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" | "provider_error" };

/** Whether the three variables above are all set. */
export function isContactEmailConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.CONTACT_EMAIL_TO &&
      process.env.CONTACT_EMAIL_FROM,
  );
}

export async function sendContactEmail(
  values: ContactValues,
): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;
  if (!apiKey || !to || !from) return { ok: false, reason: "not_configured" };

  // Plain text only, so nothing a visitor types can be interpreted as HTML.
  const text = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company or brand: ${values.company || "—"}`,
    `Service: ${values.service}`,
    "",
    "Project details:",
    values.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        // Replying in the mail client answers the visitor directly.
        reply_to: values.email,
        subject: `New enquiry from ${values.name} — ${values.service}`,
        text,
      }),
    });

    if (!response.ok) {
      // Logs the status only — never the message or the visitor's details.
      console.error(`Contact email failed: Resend returned ${response.status}`);
      return { ok: false, reason: "provider_error" };
    }
    return { ok: true };
  } catch {
    console.error("Contact email failed: could not reach Resend");
    return { ok: false, reason: "provider_error" };
  }
}
