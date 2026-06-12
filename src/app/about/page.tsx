import { InfoPage } from '@/components/InfoPage';
import { SITE_PAGES } from '@/lib/site-pages';

export const metadata = { title: 'About EHB' };

export default function AboutPage() {
  return <InfoPage page={SITE_PAGES.about} />;
}
