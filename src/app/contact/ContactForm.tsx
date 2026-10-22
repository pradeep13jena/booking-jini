"use client";

import { useId, useState, type FormEvent } from "react";

import { cn } from "@/lib/utils";
import { FORM_FIELDS, type ContactForm as ContactFormValues } from "./data";
import { buildPayload, sendContactMessage } from "./send";

const EMPTY: ContactFormValues = { fullName: "", email: "", phone: "", message: "" };

const FIELD =
  "w-full rounded-lg border border-black/5 bg-[#F7F7F7] px-3.5 py-3 text-sm text-[#1E0D01] transition-colors duration-200 placeholder:text-[#1E0D01]/40 focus:border-primary/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10";

export function ContactForm() {
  const baseId = useId();
  const [values, setValues] = useState<ContactFormValues>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update = (name: keyof ContactFormValues, value: string) => setValues((prev) => ({ ...prev, [name]: value }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Trim once here so every channel (mailto now, API later) gets clean values
      const trimmed = Object.fromEntries(
        Object.entries(values).map(([key, value]) => [key, value.trim()])
      ) as ContactFormValues;
      await sendContactMessage(buildPayload(trimmed));
      setStatus("sent");
      setValues(EMPTY);
    } catch (error) {
      console.error("Contact form failed to send", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex h-full flex-col rounded-2xl bg-white p-6 md:p-7">
      <h2 className="font-heading text-2xl font-medium text-[#1E0D01] md:text-3xl">Send us a message</h2>
      <p className="mt-2 text-sm text-[#1E0D01]/60">Fill out the form to reach out.</p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {FORM_FIELDS.map((field) => {
          const id = `${baseId}-${field.name}`;
          const shared = {
            id,
            name: field.name,
            placeholder: field.placeholder,
            required: field.required,
            autoComplete: field.autoComplete,
            value: values[field.name],
          };

          return (
            <div key={field.name} className={cn("flex flex-col gap-2", field.wide && "sm:col-span-2")}>
              <label htmlFor={id} className="text-sm font-semibold text-[#1E0D01]">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  {...shared}
                  rows={5}
                  onChange={(e) => update(field.name, e.target.value)}
                  className={cn(FIELD, "resize-y")}
                />
              ) : (
                <input {...shared} type={field.type} onChange={(e) => update(field.name, e.target.value)} className={FIELD} />
              )}
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-lg bg-linear-to-b from-[#FF8A2A] to-[#F26A0C] py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(249,115,22,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(249,115,22,0.4)] active:scale-[0.99] disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      <p role="status" className="mt-3 min-h-5 text-center text-sm">
        {status === "sent" && <span className="text-[#1E0D01]/70">Thanks! Your mail app has opened with your message ready to send.</span>}
        {status === "error" && <span className="text-red-600">Something went wrong. Please email us directly.</span>}
      </p>
    </form>
  );
}
