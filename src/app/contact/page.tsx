import { InfoPage } from '@/components/InfoPage';
import { SITE_PAGES } from '@/lib/site-pages';

export const metadata = { title: 'Contact — EHB' };

export default function ContactPage() {
  return <InfoPage page={SITE_PAGES.contact} />;
}
