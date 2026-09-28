type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="border-b border-slate-brand/5 bg-gradient-to-b from-sky/20 to-background px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-brand sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-brand/80">
          {description}
        </p>
      </div>
    </section>
  );
}
