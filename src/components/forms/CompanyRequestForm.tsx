"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormError, FormSuccess } from "@/components/ui/FormAlert";
import { FormField } from "@/components/ui/FormField";
import { HoneypotField } from "@/components/ui/HoneypotField";
import { COMPANY_DRIVER_TYPE_OPTIONS } from "@/lib/constants";
import { submitWeb3Form, type FormStatus } from "@/lib/web3forms";

const SUCCESS_MSG = "Thanks! We'll contact you within 24 hours.";

export function CompanyRequestForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [driverTypes, setDriverTypes] = useState<string[]>([]);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function toggleType(value: string) {
    setDriverTypes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldErrors({});
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const errors: Record<string, string> = {};

    const companyName = (data.get("company_name") as string)?.trim();
    const contactName = (data.get("contact_name") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const location = (data.get("location") as string)?.trim();
    const numDrivers = (data.get("num_drivers") as string)?.trim();
    const startDate = (data.get("start_date") as string)?.trim();

    if (!companyName) errors.company_name = "Company name is required";
    if (!contactName) errors.contact_name = "Contact name is required";
    if (!phone) errors.phone = "Phone is required";
    if (!email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Enter a valid email";
    if (!location) errors.location = "Location or postcode is required";
    if (driverTypes.length === 0)
      errors.driver_types = "Select at least one driver type";
    if (!numDrivers) errors.num_drivers = "Number of drivers is required";
    if (!startDate) errors.start_date = "Start date is required";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus("loading");
    const result = await submitWeb3Form("New Driver Request from Company", {
      botcheck: (data.get("botcheck") as string) ?? "",
      from_name: contactName,
      email,
      phone,
      company_name: companyName,
      contact_name: contactName,
      location,
      driver_types: driverTypes,
      num_drivers: numDrivers,
      start_date: startDate,
      message: (data.get("message") as string)?.trim() || undefined,
    });

    if (result.ok) {
      setStatus("success");
      form.reset();
      setDriverTypes([]);
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

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Company name"
          id="company_name"
          name="company_name"
          required
          error={fieldErrors.company_name}
        />
        <FormField
          label="Contact name"
          id="contact_name"
          name="contact_name"
          required
          error={fieldErrors.contact_name}
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
          label="Email"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          error={fieldErrors.email}
        />
        <div className="sm:col-span-2">
          <FormField
            label="Location / postcode"
            id="location"
            name="location"
            required
            error={fieldErrors.location}
          />
        </div>
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-slate-brand">
          Driver type needed <span className="text-red-600">*</span>
        </legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {COMPANY_DRIVER_TYPE_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-brand/15 bg-background px-3 py-2 text-sm has-[:checked]:border-mint has-[:checked]:bg-mint/15"
            >
              <input
                type="checkbox"
                checked={driverTypes.includes(opt.value)}
                onChange={() => toggleType(opt.value)}
                className="h-4 w-4 rounded border-slate-brand/30 text-mint focus:ring-mint"
              />
              {opt.label}
            </label>
          ))}
        </div>
        {fieldErrors.driver_types ? (
          <p className="mt-1.5 text-sm text-red-600" role="alert">
            {fieldErrors.driver_types}
          </p>
        ) : null}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Number of drivers needed"
          id="num_drivers"
          name="num_drivers"
          type="number"
          min={1}
          required
          error={fieldErrors.num_drivers}
        />
        <FormField
          label="Start date"
          id="start_date"
          name="start_date"
          type="date"
          required
          error={fieldErrors.start_date}
        />
      </div>

      <FormField
        label="Message (optional)"
        id="message"
        name="message"
        as="textarea"
      />

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending…" : "Request Drivers"}
      </Button>
    </form>
  );
}
