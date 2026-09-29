import { RoadLine } from "@/components/ui/RoadLine";

type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-navy/5 bg-hero-gradient px-4 py-16 sm:px-6 sm:py-20">
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-navy-muted sm:text-xl">
          {description}
        </p>
        <div className="mx-auto mt-10 max-w-md">
          <RoadLine animated />
        </div>
      </div>
    </section>
  );
}
