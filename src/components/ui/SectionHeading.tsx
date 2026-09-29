type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  id?: string;
  eyebrow?: string;
};

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  id,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-dark">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-balance text-3xl font-bold tracking-tight text-navy sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg leading-relaxed text-navy-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
