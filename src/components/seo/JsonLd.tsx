import { siteConfig } from "@/lib/site-config";

export function EmploymentAgencyJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/roadworthy-icon.png`,
    description: siteConfig.tagline,
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneTel,
      contactType: "customer service",
      availableLanguage: "English",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
