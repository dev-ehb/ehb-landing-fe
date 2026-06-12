/**
 * Placeholder content for the landing site's secondary pages (company + legal).
 * This is demo copy for correct navigation flow — final wording to follow.
 * One entry per route under src/app/<slug>/page.tsx.
 */
export interface SitePageSection {
  heading: string;
  body: string[];
}

export interface SitePage {
  title: string;
  subtitle: string;
  updated?: string;
  sections: SitePageSection[];
}

export const SITE_PAGES = {
  about: {
    title: 'About EHB',
    subtitle: 'Education · Health · Business — one trust layer for every industry.',
    sections: [
      {
        heading: 'Our mission',
        body: [
          'EHB (Education Health Business) is building a single, verifiable trust infrastructure that any industry can plug into. Every seller, provider, and professional carries one portable trust score (SQ) earned through our Personal Security System (PSS).',
          'From e-commerce to healthcare to legal services, EHB platforms share the same verification backbone — so trust earned on one platform is recognised everywhere.',
        ],
      },
      {
        heading: 'How it works',
        body: [
          'Entities register once, pass PSS verification, and receive an SQ Level from SQ1 (basic identity) up to SQ10 (elite certified). Buyers and partners see that score at a glance, across the entire ecosystem.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'We would love to hear from you.',
    sections: [
      {
        heading: 'Get in touch',
        body: [
          'For general enquiries, partnerships, or support, email us at support@ehb.world and our team will get back to you within 1–2 business days.',
          'For verification and platform-specific questions, please reach out from within the relevant EHB platform so we can route your request to the right team.',
        ],
      },
    ],
  },
  careers: {
    title: 'Careers at EHB',
    subtitle: 'Help us build the trust layer for the world.',
    sections: [
      {
        heading: 'Why EHB',
        body: [
          'We are a small, fast-moving team building infrastructure used across many industries. If you care about trust, verification, and shipping quality software at scale, you will feel at home here.',
        ],
      },
      {
        heading: 'Open roles',
        body: [
          'We are not actively hiring for specific roles right now, but we are always happy to meet exceptional engineers, designers, and operators. Send your profile to support@ehb.world.',
        ],
      },
    ],
  },
  blog: {
    title: 'EHB Blog',
    subtitle: 'Updates, product notes, and thinking on digital trust.',
    sections: [
      {
        heading: 'Coming soon',
        body: [
          'Our blog is launching shortly. We will share product updates, deep-dives into the PSS engine and SQ scoring, and stories from across the EHB ecosystem.',
        ],
      },
    ],
  },
  press: {
    title: 'Press Kit',
    subtitle: 'Brand assets and company information for media.',
    sections: [
      {
        heading: 'About the brand',
        body: [
          'EHB stands for Education, Health, Business — a unified trust platform spanning multiple verticals, powered by the PSS verification engine.',
          'For logos, brand guidelines, or media enquiries, contact support@ehb.world.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'How we collect, use, and protect your information.',
    updated: 'June 2026',
    sections: [
      {
        heading: 'Information we collect',
        body: [
          'We collect the information you provide during registration and verification, including identity details required for PSS scoring, and usage data needed to operate and secure the platform.',
        ],
      },
      {
        heading: 'How we use it',
        body: [
          'Your information is used to verify your identity, calculate your SQ Level, operate EHB platforms, and keep the ecosystem safe. We do not sell your personal data.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'You may request access to, correction of, or deletion of your personal data, subject to legal and verification requirements. Contact support@ehb.world to exercise these rights.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    subtitle: 'The rules for using EHB platforms.',
    updated: 'June 2026',
    sections: [
      {
        heading: 'Acceptance of terms',
        body: [
          'By accessing or using any EHB platform, you agree to these terms. If you do not agree, please do not use the services.',
        ],
      },
      {
        heading: 'Verification & trust scores',
        body: [
          'SQ Levels are issued based on the information you submit and our verification checks. You agree to provide accurate information and not to misrepresent your identity or credentials.',
        ],
      },
      {
        heading: 'Acceptable use',
        body: [
          'You agree to use EHB platforms lawfully and not to abuse, disrupt, or attempt to circumvent the verification system. Accounts that violate these terms may be suspended.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    subtitle: 'How EHB uses cookies and similar technologies.',
    updated: 'June 2026',
    sections: [
      {
        heading: 'What cookies we use',
        body: [
          'We use essential cookies to keep you signed in and to operate core features, and optional analytics cookies to understand how the site is used so we can improve it.',
        ],
      },
      {
        heading: 'Managing cookies',
        body: [
          'You can control or delete cookies through your browser settings. Disabling essential cookies may affect how the site functions.',
        ],
      },
    ],
  },
  security: {
    title: 'Security',
    subtitle: 'How we keep EHB and your data safe.',
    updated: 'June 2026',
    sections: [
      {
        heading: 'Our approach',
        body: [
          'Security is core to EHB — the entire platform exists to establish trust. We apply encryption in transit, least-privilege access, and continuous monitoring across our services.',
        ],
      },
      {
        heading: 'Reporting a vulnerability',
        body: [
          'If you believe you have found a security issue, please report it responsibly to support@ehb.world. We appreciate the security community and will respond promptly.',
        ],
      },
    ],
  },
} satisfies Record<string, SitePage>;

export type SitePageSlug = keyof typeof SITE_PAGES;
