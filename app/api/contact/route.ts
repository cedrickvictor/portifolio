import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { name, email, subject, message } = parsed.data;
  const to = process.env.CONTACT_TO;
  const resendKey = process.env.RESEND_API_KEY;

  if (to && resendKey) {
    const resend = new Resend(resendKey);
    await resend.emails.send({
      from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } else {
    // Still "works" locally without secrets; deploy can enable email via env vars.
    console.log("[contact] Message received", { name, email, subject });
  }

  return NextResponse.json({ ok: true });
}

