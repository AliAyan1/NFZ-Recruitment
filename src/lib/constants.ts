export const SITE_NAME = "NFZ Recruitment";
export const LEGAL_NAME = "NFZ Traders Ltd";
export const COMPANY_NUMBER = "13933336";

export const PHONE_DISPLAY = "+44 7367 555848";
export const PHONE_TEL = "+447367555848";
export const EMAIL = "contact@nfztraders.com";
export const WHATSAPP_URL =
  "https://wa.me/447367555848?text=" +
  encodeURIComponent("Hi NFZ Recruitment, I'd like to know more.");

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nfzrecruitment.co.uk";

export const DRIVER_TYPES = [
  { id: "van", label: "Van drivers", icon: "van" as const },
  { id: "courier", label: "Courier drivers", icon: "package" as const },
  { id: "hgv-c", label: "HGV Class 2 (C)", icon: "truck" as const },
  { id: "hgv-ce", label: "HGV Class 1 (C+E)", icon: "truck" as const },
  { id: "7-5t", label: "7.5 tonne drivers", icon: "truck" as const },
];

export const DRIVER_TYPE_OPTIONS = [
  { value: "van", label: "Van driver" },
  { value: "courier", label: "Courier driver" },
  { value: "hgv-c", label: "HGV Class 2 (C)" },
  { value: "hgv-ce", label: "HGV Class 1 (C+E)" },
  { value: "7-5t", label: "7.5 tonne driver" },
];

export const COMPANY_DRIVER_TYPE_OPTIONS = [
  { value: "van", label: "Van" },
  { value: "courier", label: "Courier" },
  { value: "hgv-c", label: "HGV C" },
  { value: "hgv-ce", label: "HGV C+E" },
  { value: "7-5t", label: "7.5t" },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/companies", label: "For Companies" },
  { href: "/drivers", label: "For Drivers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
