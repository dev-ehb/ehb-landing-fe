import { InfoPage } from '@/components/InfoPage';
import { SITE_PAGES } from '@/lib/site-pages';

export const metadata = { title: 'Security — EHB' };

export default function SecurityPage() {
  return <InfoPage page={SITE_PAGES.security} />;
}
