import { AlertCircle, CheckCircle2 } from "lucide-react";

export function FormSuccess({ message }: { message: string }) {
  return (
    <div
      className="rounded-2xl border border-teal/50 bg-teal/15 p-6 text-navy"
      role="status"
    >
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-teal-dark" aria-hidden />
        <div>
          <p className="text-lg font-semibold">Thank you</p>
          <p className="mt-1 text-navy-muted">{message}</p>
        </div>
      </div>
    </div>
  );
}

export function FormError({ message }: { message: string }) {
  return (
    <div
      className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-900"
      role="alert"
    >
      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}
