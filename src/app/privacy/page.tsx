import { InfoPage } from '@/components/InfoPage';
import { SITE_PAGES } from '@/lib/site-pages';

export const metadata = { title: 'Privacy Policy — EHB' };

export default function PrivacyPage() {
  return <InfoPage page={SITE_PAGES.privacy} />;
}
