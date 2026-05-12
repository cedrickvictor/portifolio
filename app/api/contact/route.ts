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
  const from = process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>";

  if (!to || !resendKey) {
    // Fail loudly in production so you don't get "fake success" deploys.
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email sending is not configured on the server. Set RESEND_API_KEY and CONTACT_TO in Vercel env vars.",
        },
        { status: 503 },
      );
    }

    console.log("[contact] Message received (email disabled)", {
      name,
      email,
      subject,
    });

    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(resendKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    return NextResponse.json({ ok: true, delivered: true, id: result.data?.id });
  } catch (err) {
    console.error("[contact] Resend send failed", err);
    return NextResponse.json(
      { ok: false, error: "Email provider failed to send. Check server logs." },
      { status: 502 },
    );
  }

  // unreachable
}

