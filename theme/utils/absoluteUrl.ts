import { siteConfig } from 'src/data/site';

/**
 * Generate an absolute canonical URL ensuring trailing slash and HTTPS WWW domain
 */
export function absoluteUrl(pathname: string): string {
  const base = siteConfig.siteUrl.replace(/\/+$/, '');
  let path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (!path.endsWith('/') && !path.includes('.')) {
    path = `${path}/`;
  }
  return `${base}${path}`;
}
