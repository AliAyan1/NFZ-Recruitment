/**
 * Single source of truth — update placeholders here before go-live.
 */
export const siteConfig = {
  brandName: "RoadWorthy Recruitment",
  /** Trading name legal entity — replace placeholder */
  companyLegalName: "[COMPANY NAME] Ltd",
  /** Companies House number — replace placeholder */
  companyNumber: "[COMPANY_NUMBER]",
  domain: "roadworthyrecruitment.co.uk",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://roadworthyrecruitment.co.uk",
  /** Replace placeholder */
  email: "[EMAIL]",
  phoneDisplay: "+44 7367 555848",
  phoneTel: "+447367555848",
  whatsAppNumber: "447367555848",
  whatsAppPrefill: "Hi RoadWorthy Recruitment, I'd like to know more.",
  driverFormUrl: "https://tally.so/r/Zjq2L5",
  driverFormId: "Zjq2L5",
  get driverFormEmbedUrl() {
    return `https://tally.so/embed/${this.driverFormId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;
  },
  get whatsAppUrl() {
    return (
      "https://wa.me/" +
      this.whatsAppNumber +
      "?text=" +
      encodeURIComponent(this.whatsAppPrefill)
    );
  },
  tagline:
    "Pre-screened, licence-checked van and courier drivers for UK delivery companies.",
  coverage: "Covering all of the UK",
  driversApplyPath: "/drivers#apply",
} as const;

export type SiteConfig = typeof siteConfig;
