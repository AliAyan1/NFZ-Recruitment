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

type FormFieldWithChildren = FormFieldBase & {
  children: ReactNode;
};

type FormFieldInput = FormFieldBase &
  InputHTMLAttributes<HTMLInputElement> & {
    as?: "input";
  };

type FormFieldTextarea = FormFieldBase &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: "textarea";
  };

export type FormFieldProps =
  | FormFieldWithChildren
  | FormFieldInput
  | FormFieldTextarea;

export function FormField(props: FormFieldProps) {
  const { label, id, error, hint } = props;

  const fieldClass =
    "w-full rounded-xl border border-slate-brand/20 bg-white px-4 py-3 text-slate-brand placeholder:text-slate-brand/40 focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30";

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-slate-brand">
        {label}
      </label>
      {"children" in props && props.children ? (
        props.children
      ) : "as" in props && props.as === "textarea" ? (
        (() => {
          const { label: _l, id: _i, error: _e, hint: _h, as: _a, ...textareaProps } =
            props as FormFieldTextarea;
          return <textarea id={id} rows={4} className={fieldClass} {...textareaProps} />;
        })()
      ) : (
        (() => {
          const {
            label: _l,
            id: _i,
            error: _e,
            hint: _h,
            as: _a,
            ...inputProps
          } = props as FormFieldInput;
          return <input id={id} className={fieldClass} {...inputProps} />;
        })()
      )}
      {hint && !error ? (
        <p className="text-xs text-slate-brand/60">{hint}</p>
      ) : null}
      {error ? (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
