export const SITE_DOMAIN = "puthurojaorchestra.com";
export const SITE_URL = `https://${SITE_DOMAIN}`;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
