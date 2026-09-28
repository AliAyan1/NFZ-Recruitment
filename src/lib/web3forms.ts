const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export type FormStatus = "idle" | "loading" | "success" | "error";

export async function submitWeb3Form(
  subject: string,
  fields: Record<string, string | string[] | boolean | undefined>,
): Promise<{ ok: boolean; message?: string }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!accessKey) {
    return {
      ok: false,
      message:
        "Form is not configured yet. Please email us directly or try again later.",
    };
  }

  const honeypot = fields.botcheck;
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { ok: true };
  }

  const body: Record<string, unknown> = {
    access_key: accessKey,
    subject,
  };

  for (const [key, value] of Object.entries(fields)) {
    if (key === "botcheck") continue;
    if (value === undefined || value === "") continue;
    if (Array.isArray(value)) {
      body[key] = value.join(", ");
    } else if (typeof value === "boolean") {
      body[key] = value ? "Yes" : "No";
    } else {
      body[key] = value;
    }
  }

  try {
    const res = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = (await res.json()) as { success?: boolean; message?: string };
    if (!res.ok || !data.success) {
      return {
        ok: false,
        message: data.message ?? "Something went wrong. Please try again.",
      };
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      message: "Network error. Please check your connection and try again.",
    };
  }
}
