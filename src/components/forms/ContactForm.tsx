"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormError, FormSuccess } from "@/components/ui/FormAlert";
import { FormField } from "@/components/ui/FormField";
import { HoneypotField } from "@/components/ui/HoneypotField";
import { submitWeb3Form, type FormStatus } from "@/lib/web3forms";

const SUCCESS_MSG = "Thanks! We'll contact you within 24 hours.";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldErrors({});
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const errors: Record<string, string> = {};

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Enter a valid email";
    if (!phone) errors.phone = "Phone is required";
    if (!message) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus("loading");
    const result = await submitWeb3Form("New Contact Message", {
      botcheck: (data.get("botcheck") as string) ?? "",
      from_name: name,
      name,
      email,
      phone,
      message,
    });

    if (result.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.message ?? "Something went wrong.");
    }
  }

  if (status === "success") {
    return <FormSuccess message={SUCCESS_MSG} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative space-y-5 rounded-2xl bg-white p-6 shadow-card sm:p-8"
      noValidate
    >
      <HoneypotField />
      {status === "error" && errorMsg ? <FormError message={errorMsg} /> : null}

      <FormField
        label="Name"
        id="name"
        name="name"
        autoComplete="name"
        required
        error={fieldErrors.name}
      />
      <FormField
        label="Email"
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        error={fieldErrors.email}
      />
      <FormField
        label="Phone"
        id="phone"
        name="phone"
        type="tel"
        autoComplete="tel"
        required
        error={fieldErrors.phone}
      />
      <FormField
        label="Message"
        id="message"
        name="message"
        as="textarea"
        required
        error={fieldErrors.message}
      />

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
