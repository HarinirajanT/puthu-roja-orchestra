/** Prefix for public assets when deployed under a subpath (e.g. GitHub Pages). */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [pathname, query] = path.split("?");
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${normalized}${query ? `?${query}` : ""}`;
}
