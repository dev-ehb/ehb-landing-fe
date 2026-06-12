import { InfoPage } from '@/components/InfoPage';
import { SITE_PAGES } from '@/lib/site-pages';

export const metadata = { title: 'Press Kit — EHB' };

export default function PressPage() {
  return <InfoPage page={SITE_PAGES.press} />;
}
