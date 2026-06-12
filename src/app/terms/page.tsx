import { InfoPage } from '@/components/InfoPage';
import { SITE_PAGES } from '@/lib/site-pages';

export const metadata = { title: 'Terms of Service — EHB' };

export default function TermsPage() {
  return <InfoPage page={SITE_PAGES.terms} />;
}
