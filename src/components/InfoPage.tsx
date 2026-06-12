import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { SitePage } from '@/lib/site-pages';

/**
 * Shared shell for the landing site's secondary pages (company + legal).
 * Renders the site Navbar + Footer with a simple prose layout so every
 * dummy page stays visually consistent.
 */
export function InfoPage({ page }: { page: SitePage }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        <p className="section-label mb-4">EHB</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 mb-3">
          {page.title}
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed">{page.subtitle}</p>
        {page.updated && (
          <p className="mt-2 text-xs text-slate-400">Last updated: {page.updated}</p>
        )}

        <div className="mt-10 space-y-8">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-bold text-slate-900 mb-3">
                {section.heading}
              </h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-slate-600 leading-relaxed mb-3">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link href="/" className="text-blue-600 hover:underline font-medium text-sm">
            ← Back to home
          </Link>
          <p className="mt-4 text-xs text-slate-400">
            This is placeholder content for demonstration. Final copy to follow.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
