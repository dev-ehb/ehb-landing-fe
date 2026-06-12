import { InfoPage } from '@/components/InfoPage';
import { SITE_PAGES } from '@/lib/site-pages';

export const metadata = { title: 'Careers — EHB' };

export default function CareersPage() {
  return <InfoPage page={SITE_PAGES.careers} />;
}
