import type { Metadata } from "next";
import { siteConfig } from "./site-config";

const defaultDescription =
  "RoadWorthy Recruitment supplies pre-screened, licence-checked van and courier drivers to UK delivery companies. Van driver recruitment UK — pay only when they start work.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.brandName} | Van Driver Recruitment UK`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: defaultDescription,
  keywords: [
    "van driver recruitment UK",
    "van driver jobs UK",
    "courier driver jobs",
    "delivery driver recruitment",
    "Christmas delivery driver jobs",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: siteConfig.brandName,
    images: [
      {
        url: "/roadworthy-icon.png",
        width: 512,
        height: 512,
        alt: `${siteConfig.brandName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/roadworthy-icon.png"],
  },
  icons: {
    icon: "/roadworthy-icon.png",
    apple: "/roadworthy-icon.png",
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
    alternates: {
      canonical: path ? `${siteConfig.siteUrl}${path}` : siteConfig.siteUrl,
    },
    openGraph: {
      title: `${title} | ${siteConfig.brandName}`,
      description,
      url: path ? `${siteConfig.siteUrl}${path}` : siteConfig.siteUrl,
    },
  };
}
