import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

const defaultDescription =
  "NFZ Recruitment supplies pre-screened, licence-checked van, courier and HGV drivers to UK delivery and logistics companies. Driver recruitment UK — you only pay when they start work.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Driver Recruitment UK`,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  keywords: [
    "driver recruitment UK",
    "van driver jobs UK",
    "HGV driver recruitment",
    "courier driver jobs",
    "delivery driver recruitment",
    "logistics drivers UK",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
    images: [
      {
        url: "/nfz-logo.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/nfz-logo.png"],
  },
  icons: {
    icon: "/nfz-icon.png",
    apple: "/nfz-icon.png",
  },
};

export function pageMetadata(
  title: string,
  description: string,
  path = "",
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path ? `${SITE_URL}${path}` : SITE_URL },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path ? `${SITE_URL}${path}` : SITE_URL,
    },
  };
}
