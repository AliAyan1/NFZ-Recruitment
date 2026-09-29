"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormError, FormSuccess } from "@/components/ui/FormAlert";
import { FormField, selectClass } from "@/components/ui/FormField";
import { HoneypotField } from "@/components/ui/HoneypotField";
import { submitWeb3Form, type FormStatus } from "@/lib/web3forms";

const SUCCESS =
  "Thanks! Our team will contact you within 24 hours.";

const DRIVER_TYPES = ["Van", "Courier", "Multi-drop", "Other"];
const CONTRACT_TYPES = ["Employed", "Self-employed", "Agency"];

export function CompanyRequestForm() {
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

    const required = [
      "company_name",
      "contact_name",
      "phone",
      "email",
      "location",
      "driver_type",
      "num_drivers",
      "start_date",
      "contract_type",
    ] as const;

    for (const key of required) {
      const v = (data.get(key) as string)?.trim();
      if (!v) errors[key] = "This field is required";
    }
    const email = (data.get("email") as string)?.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Enter a valid email";
    }

    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      return;
    }

    setStatus("loading");
    const result = await submitWeb3Form("New Driver Request – RoadWorthy", {
      botcheck: (data.get("botcheck") as string) ?? "",
      from_name: (data.get("contact_name") as string).trim(),
      email,
      phone: (data.get("phone") as string).trim(),
      company_name: (data.get("company_name") as string).trim(),
      contact_name: (data.get("contact_name") as string).trim(),
      depot_location: (data.get("location") as string).trim(),
      driver_type: (data.get("driver_type") as string).trim(),
      num_drivers: (data.get("num_drivers") as string).trim(),
      start_date: (data.get("start_date") as string).trim(),
      contract_type: (data.get("contract_type") as string).trim(),
      message: (data.get("message") as string)?.trim() || undefined,
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
    return <FormSuccess message={SUCCESS} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative space-y-5 rounded-3xl border border-navy/8 bg-white p-6 shadow-card sm:p-8"
      noValidate
    >
      <HoneypotField />
      {status === "error" && errorMsg ? <FormError message={errorMsg} /> : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Company name"
          id="company_name"
          name="company_name"
          error={fieldErrors.company_name}
        />
        <FormField
          label="Contact name"
          id="contact_name"
          name="contact_name"
          error={fieldErrors.contact_name}
        />
        <FormField
          label="Phone"
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          error={fieldErrors.phone}
        />
        <FormField
          label="Email"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          error={fieldErrors.email}
        />
        <div className="sm:col-span-2">
          <FormField
            label="Depot location / postcode"
            id="location"
            name="location"
            error={fieldErrors.location}
          />
        </div>
        <FormField label="Driver type" id="driver_type" error={fieldErrors.driver_type}>
          <select id="driver_type" name="driver_type" className={selectClass} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {DRIVER_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </FormField>
        <FormField
          label="Number of drivers"
          id="num_drivers"
          name="num_drivers"
          type="number"
          min={1}
          error={fieldErrors.num_drivers}
        />
        <FormField
          label="Start date"
          id="start_date"
          name="start_date"
          type="date"
          error={fieldErrors.start_date}
        />
        <FormField
          label="Contract type"
          id="contract_type"
          error={fieldErrors.contract_type}
        >
          <select id="contract_type" name="contract_type" className={selectClass} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {CONTRACT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </FormField>
      </div>
      <FormField label="Message (optional)" id="message" name="message" as="textarea" />
      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending…" : "Request Drivers"}
      </Button>
    </form>
  );
}
