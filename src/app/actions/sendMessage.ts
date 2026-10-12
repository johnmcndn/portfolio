'use server';

import { Resend } from 'resend';
import { site } from '@/data/content';

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = { ok: boolean; error?: string };

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

/** Reads one text field, trimmed and capped in length. */
function field(formData: FormData, name: string, maxLength: number): string {
  return String(formData.get(name) ?? '')
    .trim()
    .slice(0, maxLength);
}

export async function sendMessage(formData: FormData): Promise<FormState> {
  // Honeypot: a hidden field that people never see, only bots fill it in
  if (formData.get('website')) return { ok: true };

  const name = field(formData, 'name', 100);
  const email = field(formData, 'email', 200);
  // Line breaks in a subject can be abused to inject email headers, so remove them
  const subject = field(formData, 'subject', 150).replace(/[\r\n]+/g, ' ');
  const message = field(formData, 'message', 5000);

  if (!name || !EMAIL_PATTERN.test(email) || !subject || message.length < 5) {
    return { ok: false, error: 'Please fill in every field.' };
  }

  const { error } = await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: site.email,
    replyTo: email, // pressing Reply in your inbox answers the visitor
    subject: `[mac.dev] ${subject}`,
    text: `${message}\n\n— ${name} <${email}>`,
  });

  if (error)
    return {
      ok: false,
      error: 'Could not send your message. Please try again.',
    };
  return { ok: true };
}
