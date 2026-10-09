/*
 * The contact form's fields, limits and validation rules. Used by the form
 * in the browser and again by the server route, so both apply exactly the
 * same rules and the server never trusts what the browser sends.
 */

export const CONTACT_SERVICES = [
  "Web Development",
  "Mobile Development",
  "Video Editing",
  "Digital Marketing",
  "Multiple Services",
  "Other",
] as const;

export const CONTACT_LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  company: { max: 100 },
  message: { min: 20, max: 2000 },
} as const;

export type ContactValues = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

export type ContactField = keyof ContactValues;
export type ContactErrors = Partial<Record<ContactField, string>>;

export const emptyContactValues: ContactValues = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

function asText(value: unknown) {
  return typeof value === "string" ? value : "";
}

/** Trims every field and tidies whitespace. Accepts anything; returns strings. */
export function normalizeContact(input: unknown): ContactValues {
  const data = (typeof input === "object" && input !== null ? input : {}) as
    Record<string, unknown>;
  const singleLine = (value: unknown) =>
    asText(value).replace(/\s+/g, " ").trim();

  return {
    name: singleLine(data.name),
    email: singleLine(data.email).toLowerCase(),
    company: singleLine(data.company),
    service: singleLine(data.service),
    // Keeps line breaks, but no more than two in a row.
    message: asText(data.message)
      .replace(/\r\n?/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
  };
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Returns a message for each field that is not valid. Empty means valid. */
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  const { name, email, company, message } = CONTACT_LIMITS;

  if (!values.name) {
    errors.name = "Please enter your name.";
  } else if (values.name.length < name.min) {
    errors.name = "Your name looks too short.";
  } else if (values.name.length > name.max) {
    errors.name = `Please keep your name under ${name.max} characters.`;
  }

  if (!values.email) {
    errors.email = "Please enter your email address.";
  } else if (
    values.email.length > email.max ||
    !EMAIL_PATTERN.test(values.email)
  ) {
    errors.email = "Please enter a valid email address, like name@example.com.";
  }

  if (values.company.length > company.max) {
    errors.company = `Please keep this under ${company.max} characters.`;
  }

  if (!values.service) {
    errors.service = "Please choose the service you're interested in.";
  } else if (!(CONTACT_SERVICES as readonly string[]).includes(values.service)) {
    errors.service = "Please choose one of the listed services.";
  }

  if (!values.message) {
    errors.message = "Please tell us a little about your project.";
  } else if (values.message.length < message.min) {
    errors.message = `Please add a bit more detail (at least ${message.min} characters).`;
  } else if (values.message.length > message.max) {
    errors.message = `Please keep your message under ${message.max} characters.`;
  }

  return errors;
}
