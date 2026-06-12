'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { EHB_LINKS, SOCIAL_LINKS } from '@/lib/links';

const FOOTER_LINKS = {
  // Platforms with a live app link out; the rest stay as placeholders for now.
  Platforms: [
    { label: 'GoSellr', href: EHB_LINKS.gosellr },
    { label: 'OLS', href: '#' },
    { label: 'HPS', href: '#' },
    { label: 'JPS', href: EHB_LINKS.jps },
    { label: 'WMS', href: '#' },
    { label: 'OBS', href: '#' },
  ],
  Technology: [
    { label: 'PSS Engine', href: '#pss' },
    { label: 'SQ Levels', href: '#sq-levels' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'API Docs', href: '#' },
    { label: 'Architecture', href: '#' },
  ],
  Company: [
    { label: 'About EHB', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Press Kit', href: '/press' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Security', href: '/security' },
  ],
};

const SOCIAL = [
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
  { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: SOCIAL_LINKS.email, label: 'Email' },
];

/** Footer link that handles in-page anchors (#), internal routes (/x), and external URLs. */
function FooterLink({ href, label }: { href: string; label: string }) {
  const cls = 'text-slate-500 hover:text-slate-800 text-sm transition-colors';
  if (href.startsWith('http') || href.startsWith('mailto:')) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>;
  }
  if (href.startsWith('/')) {
    return <Link href={href} className={cls}>{label}</Link>;
  }
  return <a href={href} className={cls}>{label}</a>;
}

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12 pb-10 border-b border-slate-200">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-3 w-fit" aria-label="EHB home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-ehb-full.svg" alt="EHB — Education Health Business" className="h-10 w-auto" />
            </Link>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Education Health Business — the trust infrastructure
              for every industry, powered by PSS.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {SOCIAL.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:shadow-sm transition-all"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-widest mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-slate-400 text-xs">
            <span>© 2026 EHB — Education Health Business</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">All rights reserved</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              PSS Engine Operational
            </span>
            <span>·</span>
            <span>Deployed on ehb.world</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
