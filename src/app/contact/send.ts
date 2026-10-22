import { CONTACT_RECIPIENTS, FORM_RECIPIENT, type ContactForm, type Recipient } from "./data";

// Everything needed to deliver one contact-form message
export type ContactPayload = ContactForm & { to: string; subject: string };

export const buildPayload = (form: ContactForm, recipient: Recipient = FORM_RECIPIENT): ContactPayload => ({
  ...form,
  to: CONTACT_RECIPIENTS[recipient],
  subject: `Website enquiry from ${form.fullName}`,
});

// For now this opens the visitor's mail app pre-filled for the recipient.
// To send server-side instead, POST `payload` to a route handler (e.g. /api/contact → AWS SES) here;
// the form component doesn't need to change.
export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  const body = [
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : null,
    "",
    payload.message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const href = `mailto:${payload.to}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
}
