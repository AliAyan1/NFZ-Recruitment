import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-mint text-slate-brand hover:bg-mint/90 shadow-soft focus-visible:ring-mint",
  secondary:
    "bg-sky text-slate-brand hover:bg-sky/90 shadow-soft focus-visible:ring-sky",
  outline:
    "border-2 border-mint bg-white text-slate-brand hover:bg-mint/10 focus-visible:ring-mint",
  ghost: "text-slate-brand hover:bg-slate-brand/5 focus-visible:ring-slate-brand",
};

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", className = "", children } = props;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

  if ("href" in props && props.href) {
    const { href, external } = props;
    const isSpecial =
      external ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      href.startsWith("http");
    if (isSpecial) {
      return (
        <a
          href={href}
          className={`${base} ${variants[variant]} ${className}`}
          {...(external || href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  const { disabled, type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
