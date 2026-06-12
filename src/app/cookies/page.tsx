import { InfoPage } from '@/components/InfoPage';
import { SITE_PAGES } from '@/lib/site-pages';

export const metadata = { title: 'Cookie Policy — EHB' };

export default function CookiesPage() {
  return <InfoPage page={SITE_PAGES.cookies} />;
}
