import { InfoPage } from '@/components/InfoPage';
import { SITE_PAGES } from '@/lib/site-pages';

export const metadata = { title: 'Blog — EHB' };

export default function BlogPage() {
  return <InfoPage page={SITE_PAGES.blog} />;
}
