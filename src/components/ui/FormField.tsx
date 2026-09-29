import {
  type InputHTMLAttributes,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";

type FormFieldBase = {
  label: string;
  id: string;
  error?: string;
  hint?: string;
};

type FormFieldWithChildren = FormFieldBase & { children: ReactNode };

type FormFieldInput = FormFieldBase &
  InputHTMLAttributes<HTMLInputElement> & { as?: "input" };

type FormFieldTextarea = FormFieldBase &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

export type FormFieldProps =
  | FormFieldWithChildren
  | FormFieldInput
  | FormFieldTextarea;

const fieldClass =
  "w-full rounded-2xl border border-navy/15 bg-white px-4 py-3.5 text-base text-navy placeholder:text-navy/35 focus:border-teal-dark focus:outline-none focus:ring-2 focus:ring-teal/40 min-h-[48px]";

export function FormField(props: FormFieldProps) {
  const { label, id, error, hint } = props;

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-navy">
        {label}
      </label>
      {"children" in props && props.children ? (
        props.children
      ) : "as" in props && props.as === "textarea" ? (
        (() => {
          const { label: _l, id: _i, error: _e, hint: _h, as: _a, ...rest } =
            props as FormFieldTextarea;
          return <textarea id={id} rows={4} className={fieldClass} {...rest} />;
        })()
      ) : (
        (() => {
          const { label: _l, id: _i, error: _e, hint: _h, as: _a, ...rest } =
            props as FormFieldInput;
          return <input id={id} className={fieldClass} {...rest} />;
        })()
      )}
      {hint && !error ? (
        <p className="text-xs text-navy-muted">{hint}</p>
      ) : null}
      {error ? (
        <p className="text-sm font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const selectClass =
  "w-full rounded-2xl border border-navy/15 bg-white px-4 py-3.5 text-base text-navy focus:border-teal-dark focus:outline-none focus:ring-2 focus:ring-teal/40 min-h-[48px]";
