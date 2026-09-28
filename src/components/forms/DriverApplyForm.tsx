"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormError, FormSuccess } from "@/components/ui/FormAlert";
import { FormField } from "@/components/ui/FormField";
import { HoneypotField } from "@/components/ui/HoneypotField";
import { DRIVER_TYPE_OPTIONS } from "@/lib/constants";
import { submitWeb3Form, type FormStatus } from "@/lib/web3forms";

const SUCCESS_MSG = "Thanks! We'll contact you within 24 hours.";

const selectClass =
  "w-full rounded-xl border border-slate-brand/20 bg-white px-4 py-3 text-slate-brand focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30";

export function DriverApplyForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [consent, setConsent] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldErrors({});
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const errors: Record<string, string> = {};

    const fullName = (data.get("full_name") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const town = (data.get("town") as string)?.trim();
    const driverType = data.get("driver_type") as string;
    const licenceCategory = (data.get("licence_category") as string)?.trim();
    const experience = (data.get("experience") as string)?.trim();
    const penaltyPoints = data.get("penalty_points") as string;
    const rightToWork = data.get("right_to_work") as string;
    const availableDate = (data.get("available_date") as string)?.trim();

    if (!fullName) errors.full_name = "Full name is required";
    if (!phone) errors.phone = "Phone is required";
    if (!email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Enter a valid email";
    if (!town) errors.town = "Town or postcode is required";
    if (!driverType) errors.driver_type = "Select a driver type";
    if (!licenceCategory) errors.licence_category = "Licence category is required";
    if (!experience) errors.experience = "Years of experience is required";
    if (!penaltyPoints) errors.penalty_points = "Select penalty points";
    if (!rightToWork) errors.right_to_work = "Please confirm right to work";
    if (!availableDate) errors.available_date = "Available date is required";
    if (!consent) errors.consent = "You must agree to continue";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus("loading");
    const result = await submitWeb3Form("New Driver Application", {
      botcheck: (data.get("botcheck") as string) ?? "",
      from_name: fullName,
      email,
      phone,
      full_name: fullName,
      town,
      driver_type: driverType,
      licence_category: licenceCategory,
      years_experience: experience,
      penalty_points: penaltyPoints,
      right_to_work: rightToWork,
      driver_cpc: (data.get("driver_cpc") as string) || "Not specified",
      digital_tacho: (data.get("digital_tacho") as string) || "Not specified",
      available_date: availableDate,
      message: (data.get("message") as string)?.trim() || undefined,
    });

    if (result.ok) {
      setStatus("success");
      form.reset();
      setConsent(false);
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
          label="Full name"
          id="full_name"
          name="full_name"
          autoComplete="name"
          required
          error={fieldErrors.full_name}
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
        <FormField
          label="Town / postcode"
          id="town"
          name="town"
          required
          error={fieldErrors.town}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Driver type" id="driver_type" error={fieldErrors.driver_type}>
          <select
            id="driver_type"
            name="driver_type"
            className={selectClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            {DRIVER_TYPE_OPTIONS.map((o) => (
              <option key={o.value} value={o.label}>
                {o.label}
              </option>
            ))}
          </select>
        </FormField>
        <FormField
          label="Licence category"
          id="licence_category"
          name="licence_category"
          placeholder="e.g. C, C+E, B"
          required
          error={fieldErrors.licence_category}
        />
        <FormField
          label="Years of driving experience"
          id="experience"
          name="experience"
          type="number"
          min={0}
          required
          error={fieldErrors.experience}
        />
        <FormField
          label="Penalty points on licence"
          id="penalty_points"
          error={fieldErrors.penalty_points}
        >
          <select
            id="penalty_points"
            name="penalty_points"
            className={selectClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            <option value="0">0</option>
            <option value="1-3">1–3</option>
            <option value="4-6">4–6</option>
            <option value="7+">7+</option>
          </select>
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Right to work in the UK"
          id="right_to_work"
          error={fieldErrors.right_to_work}
        >
          <select
            id="right_to_work"
            name="right_to_work"
            className={selectClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </FormField>
        <FormField label="Driver CPC card" id="driver_cpc">
          <select id="driver_cpc" name="driver_cpc" className={selectClass} defaultValue="">
            <option value="">Select…</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Not applicable">Not applicable</option>
          </select>
        </FormField>
        <FormField label="Digital tachograph card" id="digital_tacho">
          <select
            id="digital_tacho"
            name="digital_tacho"
            className={selectClass}
            defaultValue=""
          >
            <option value="">Select…</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Not applicable">Not applicable</option>
          </select>
        </FormField>
        <FormField
          label="Available to start"
          id="available_date"
          name="available_date"
          type="date"
          required
          error={fieldErrors.available_date}
        />
      </div>

      <FormField label="Message (optional)" id="message" name="message" as="textarea" />

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-brand">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-brand/30 text-mint focus:ring-mint"
          />
          <span>
            I agree to NFZ Recruitment storing my details to find me work, as
            described in the{" "}
            <Link href="/privacy" className="font-medium text-mint underline-offset-2 hover:underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {fieldErrors.consent ? (
          <p className="mt-1.5 text-sm text-red-600" role="alert">
            {fieldErrors.consent}
          </p>
        ) : null}
      </div>

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending…" : "Apply Now"}
      </Button>
    </form>
  );
}
