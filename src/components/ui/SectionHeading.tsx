type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  id?: string;
};

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <h2
        id={id}
        className="text-2xl font-bold tracking-tight text-slate-brand sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-slate-brand/80 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
