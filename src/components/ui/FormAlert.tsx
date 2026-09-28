import { CheckCircle2, AlertCircle } from "lucide-react";

export function FormSuccess({ message }: { message: string }) {
  return (
    <div
      className="flex items-start gap-3 rounded-2xl border border-mint/40 bg-mint/15 p-4 text-slate-brand"
      role="status"
    >
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mint" aria-hidden />
      <p className="text-sm font-medium sm:text-base">{message}</p>
    </div>
  );
}

export function FormError({ message }: { message: string }) {
  return (
    <div
      className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800"
      role="alert"
    >
      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
      <p className="text-sm font-medium sm:text-base">{message}</p>
    </div>
  );
}
