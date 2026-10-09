"use client";

import {
  type CSSProperties,
  type FormEvent,
  type ReactNode,
  useId,
  useRef,
  useState,
} from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Button } from "@/components/ui/Button";
import { contactSuccess } from "@/data/contact";
import { cn } from "@/lib/cn";
import {
  CONTACT_LIMITS,
  CONTACT_SERVICES,
  type ContactErrors,
  type ContactField,
  type ContactValues,
  emptyContactValues,
  normalizeContact,
  validateContact,
} from "@/lib/contact";

type Status = "idle" | "submitting" | "success" | "error";

// What the visitor is told for each failure the server can report.
const failureMessages: Record<string, string> = {
  validation: "Some details need another look. Please check the form.",
  rate_limited:
    "You've sent several messages in a short time. Please wait a few minutes and try again.",
  not_configured:
    "The contact form isn't connected to email yet, so your message could not be sent. Please try again later.",
};
const defaultFailureMessage =
  "Something went wrong and your message was not sent. Please try again.";

const controlStyle =
  "w-full rounded-md border bg-background px-4 text-base text-foreground placeholder:text-muted/70 " +
  "transition-[border-color,box-shadow] duration-(--duration-fast) ease-standard " +
  "focus-visible:border-accent focus-visible:ring-4 focus-visible:ring-accent/15 focus-visible:outline-none";

// Each field rises in shortly after the one before it.
const enter =
  "group-data-[reveal=in]:animate-enter group-data-[reveal=pending]:opacity-0";

function delay(step: number): CSSProperties {
  return { animationDelay: `${140 + step * 70}ms` };
}

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyContactValues);
  // Errors are only shown for fields the visitor has left, or after a submit.
  const [touched, setTouched] = useState<Partial<Record<ContactField, true>>>(
    {},
  );
  const [serverErrors, setServerErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [failure, setFailure] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const errors = { ...validateContact(normalizeContact(values)), ...serverErrors };
  const visibleError = (field: ContactField) =>
    touched[field] ? errors[field] : undefined;

  function update(field: ContactField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    // A server-side complaint about a field is dropped once it is edited.
    setServerErrors((current) => {
      const rest = { ...current };
      delete rest[field];
      return rest;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const normalized = normalizeContact(values);
    const found = validateContact(normalized);
    setTouched({ name: true, email: true, company: true, service: true, message: true });
    setServerErrors({});

    const firstInvalid = (Object.keys(found) as ContactField[])[0];
    if (firstInvalid) {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)
        ?.focus();
      return;
    }

    setStatus("submitting");
    setFailure("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...normalized,
          website: honeypotRef.current?.value ?? "",
        }),
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        errors?: ContactErrors;
      } | null;

      // Success is shown only when the server confirms it.
      if (response.ok && result?.ok) {
        setValues(emptyContactValues);
        setTouched({});
        setStatus("success");
        return;
      }

      if (result?.errors) setServerErrors(result.errors);
      setFailure(
        failureMessages[result?.error ?? ""] ?? defaultFailureMessage,
      );
      setStatus("error");
    } catch {
      setFailure(
        "We couldn't reach the server. Please check your connection and try again.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex min-h-[28rem] animate-enter flex-col items-start justify-center"
      >
        <span
          aria-hidden="true"
          className="flex size-14 items-center justify-center rounded-pill bg-button-gradient text-accent-foreground shadow-glow"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6"
          >
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h3 className="mt-8 text-subheading font-bold">
          {contactSuccess.heading}
        </h3>
        <p className="mt-3 max-w-[28rem] text-lead text-muted">
          {contactSuccess.body}
        </p>
        <div className="mt-8">
          <Button variant="secondary" onClick={() => setStatus("idle")}>
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      aria-busy={submitting}
      className="grid gap-6 sm:grid-cols-2"
    >
      <Field
        label="Full name"
        required
        error={visibleError("name")}
        className={enter}
        style={delay(0)}
      >
        {(props) => (
          <input
            {...props}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            maxLength={CONTACT_LIMITS.name.max}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            onBlur={() => setTouched((current) => ({ ...current, name: true }))}
            className={cn(controlStyle, "h-12", props.className)}
          />
        )}
      </Field>

      <Field
        label="Email address"
        required
        error={visibleError("email")}
        className={enter}
        style={delay(1)}
      >
        {(props) => (
          <input
            {...props}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="name@example.com"
            maxLength={CONTACT_LIMITS.email.max}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            onBlur={() => setTouched((current) => ({ ...current, email: true }))}
            className={cn(controlStyle, "h-12", props.className)}
          />
        )}
      </Field>

      <Field
        label="Company or brand"
        error={visibleError("company")}
        className={enter}
        style={delay(2)}
      >
        {(props) => (
          <input
            {...props}
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Where you work, if relevant"
            maxLength={CONTACT_LIMITS.company.max}
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            onBlur={() =>
              setTouched((current) => ({ ...current, company: true }))
            }
            className={cn(controlStyle, "h-12", props.className)}
          />
        )}
      </Field>

      <Field
        label="What service are you interested in?"
        required
        error={visibleError("service")}
        className={enter}
        style={delay(3)}
      >
        {(props) => (
          <span className="relative block">
            <select
              {...props}
              name="service"
              value={values.service}
              onChange={(event) => update("service", event.target.value)}
              onBlur={() =>
                setTouched((current) => ({ ...current, service: true }))
              }
              className={cn(
                controlStyle,
                "h-12 appearance-none pr-11",
                !values.service && "text-muted/70",
                props.className,
              )}
            >
              <option value="" disabled>
                Choose a service
              </option>
              {CONTACT_SERVICES.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted"
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
          </span>
        )}
      </Field>

      <Field
        label="Project details"
        required
        error={visibleError("message")}
        hint={`${values.message.trim().length} / ${CONTACT_LIMITS.message.max}`}
        className={cn(enter, "sm:col-span-2")}
        style={delay(4)}
      >
        {(props) => (
          <textarea
            {...props}
            name="message"
            rows={6}
            placeholder="Briefly describe your idea, your goals, or what you need."
            maxLength={CONTACT_LIMITS.message.max}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            onBlur={() =>
              setTouched((current) => ({ ...current, message: true }))
            }
            className={cn(
              controlStyle,
              "min-h-40 resize-y py-3 leading-relaxed",
              props.className,
            )}
          />
        )}
      </Field>

      {/* Honeypot: hidden from people and assistive technology; bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label>
          Website
          <input
            ref={honeypotRef}
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className={cn(enter, "sm:col-span-2")} style={delay(5)}>
        {status === "error" && (
          <p
            role="alert"
            className="mb-5 flex gap-3 rounded-md border border-error/40 bg-error/5 px-4 py-3 text-sm text-foreground"
          >
            <ErrorIcon />
            <span>
              <span className="font-bold">Message not sent.</span> {failure}
            </span>
          </p>
        )}

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="group/arrow max-sm:w-full"
          >
            {submitting ? (
              <>
                <span
                  aria-hidden="true"
                  className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                />
                Sending…
              </>
            ) : (
              <>
                Send message
                <ArrowIcon />
              </>
            )}
          </Button>
          <p className="text-sm text-muted">
            Fields marked <span className="text-accent">*</span> are required.
          </p>
        </div>
      </div>
    </form>
  );
}

function ErrorIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className="mt-0.5 size-4 shrink-0 text-error"
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 4.75v3.75M8 11.1v.15" />
    </svg>
  );
}

/**
 * A labelled form field. Renders the label, an "optional" note, the control
 * (via `children`, which receives the ids and ARIA attributes to spread onto
 * it), a hint, and the error message.
 */
function Field({
  label,
  required = false,
  error,
  hint,
  className,
  style,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  style?: CSSProperties;
  children: (props: {
    id: string;
    required: boolean;
    "aria-invalid": boolean;
    "aria-describedby": string | undefined;
    className: string;
  }) => ReactNode;
}) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className={className} style={style}>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-semibold">
          {label}
          {required && (
            <span aria-hidden="true" className="text-accent">
              {" "}
              *
            </span>
          )}
        </label>
        {hint ? (
          <span className="text-xs text-muted tabular-nums">{hint}</span>
        ) : (
          !required && <span className="text-xs text-muted">Optional</span>
        )}
      </div>

      {children({
        id,
        required,
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : undefined,
        className: error ? "border-error" : "border-border",
      })}

      {error && (
        // An icon and the words carry the error, not the color alone.
        <p id={errorId} className="mt-2 flex gap-2 text-sm text-foreground">
          <ErrorIcon />
          {error}
        </p>
      )}
    </div>
  );
}
