import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-navy shadow-soft hover:shadow-lift hover:brightness-[1.02] focus-visible:ring-teal-dark",
  secondary:
    "bg-white text-navy border border-navy/10 shadow-card hover:shadow-soft hover:border-teal/40",
  outline:
    "border-2 border-teal-dark/40 bg-white text-navy hover:bg-teal/10",
  ghost: "text-navy hover:bg-navy/5",
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
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

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
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
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
