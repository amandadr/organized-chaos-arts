"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm({
  heading = "Write to us",
  submitLabel = "Send message",
  email,
}: {
  heading?: string;
  submitLabel?: string;
  email?: string | null;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="oca-color-card oca-fill-seafoam md:p-8">
        <h2 className="text-h3">{heading}</h2>
        <p className="mt-4">
          Thank you. This form is a placeholder until the mailbox is wired —
          nothing was sent. If you need us now, try again after the contact
          integration lands.
        </p>
        <button
          type="button"
          className="oca-inline-link mt-6 text-sm"
          onClick={() => setSent(false)}
        >
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="oca-color-card oca-fill-tangerine md:p-8"
    >
      <h2 className="text-h3">{heading}</h2>
      <p className="mt-2 text-sm">Demo only — submissions stay in the browser for now.</p>
      {email ? (
        <p className="mt-2 text-sm">
          Or write directly to{" "}
          <a className="oca-inline-link" href={`mailto:${email}`}>
            {email}
          </a>
          .
        </p>
      ) : null}
      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-bold">
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className="oca-input"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="oca-input"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          Message
          <textarea name="message" rows={5} required className="oca-input" />
        </label>
      </div>
      <div className="mt-6">
        <Button type="submit">{submitLabel}</Button>
      </div>
    </form>
  );
}
