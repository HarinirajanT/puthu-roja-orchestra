export const SITE_DOMAIN = "puthurojaorchestra.com";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? `https://${SITE_DOMAIN}`;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${SITE_URL}${base}${normalized}`;
}
