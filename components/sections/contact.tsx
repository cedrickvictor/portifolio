"use client";

import * as React from "react";
import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROFILE } from "@/constants/portfolio";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { Reveal } from "@/components/motion/reveal";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, Link2, Mail, MessageCircle } from "lucide-react";

type FieldErrors = Partial<Record<keyof ContactInput, string>>;

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  rows,
}: {
  label: string;
  name: keyof ContactInput;
  value: string;
  onChange: (name: keyof ContactInput, value: string) => void;
  error?: string;
  type?: string;
  rows?: number;
}) {
  const id = `contact-${name}`;
  const common =
    "mt-2 w-full rounded-2xl border bg-white/3 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition";
  const cls = error
    ? "border-red-500/40 focus:border-red-400/60"
    : "border-white/10 focus:border-white/20";

  return (
    <div>
      <label
        htmlFor={id}
        className="text-xs font-medium tracking-wide text-white/65"
      >
        {label}
      </label>
      {rows ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          className={`${common} ${cls}`}
          placeholder={label}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          className={`${common} ${cls}`}
          placeholder={label}
        />
      )}
      <AnimatePresence initial={false}>
        {error ? (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-2 text-xs text-red-300/90"
          >
            {error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function ContactSection() {
  const [data, setData] = React.useState<ContactInput>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const onChange = (name: keyof ContactInput, value: string) => {
    setData((d) => ({ ...d, [name]: value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const [k, arr] of Object.entries(
        parsed.error.flatten().fieldErrors,
      )) {
        const key = k as keyof ContactInput;
        if (arr?.[0]) fieldErrors[key] = arr[0];
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something serious."
              description="If you’re hiring, contracting, or need an engineer who can own outcomes end-to-end, send a message."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-7 rounded-3xl border border-white/10 bg-white/3 p-6">
              <p className="text-sm font-semibold text-white">Direct links</p>
              <div className="mt-4 grid gap-2">
                <a
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white/80 hover:bg-white/8 hover:text-white"
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitBranch className="h-4 w-4" /> GitHub
                </a>
                <a
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white/80 hover:bg-white/8 hover:text-white"
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Link2 className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white/80 hover:bg-white/8 hover:text-white"
                  href={PROFILE.links.email}
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white/80 hover:bg-white/8 hover:text-white"
                  href={PROFILE.links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="glass rounded-3xl p-6"
              aria-label="Contact form"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={data.name}
                  onChange={onChange}
                  error={errors.name}
                />
                <Field
                  label="Email"
                  name="email"
                  value={data.email}
                  onChange={onChange}
                  error={errors.email}
                  type="email"
                />
              </div>
              <div className="mt-4">
                <Field
                  label="Subject"
                  name="subject"
                  value={data.subject}
                  onChange={onChange}
                  error={errors.subject}
                />
              </div>
              <div className="mt-4">
                <Field
                  label="Message"
                  name="message"
                  value={data.message}
                  onChange={onChange}
                  error={errors.message}
                  rows={6}
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-h-[22px] text-sm">
                  <AnimatePresence mode="wait">
                    {status === "success" ? (
                      <motion.p
                        key="success"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="text-emerald-300/90"
                      >
                        Message sent. I’ll get back to you soon.
                      </motion.p>
                    ) : status === "error" ? (
                      <motion.p
                        key="error"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="text-red-300/90"
                      >
                        Something went wrong. Please try again or email me.
                      </motion.p>
                    ) : (
                      <motion.p
                        key="hint"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="text-white/50"
                      >
                        Typical response time: under 24 hours.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-[15px] font-medium text-black hover:opacity-90 disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send message"}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

