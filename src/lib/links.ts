/**
 * Single source of truth for outbound EHB app URLs used across the landing
 * site. Override per environment with NEXT_PUBLIC_* vars; the defaults point
 * at the live ehb.world apps.
 *
 * NOTE: access env vars statically (process.env.NEXT_PUBLIC_X) so Next.js
 * inlines them into the client bundle — dynamic access is not replaced.
 */
export const EHB_LINKS = {
  landing: process.env.NEXT_PUBLIC_LANDING_URL ?? 'https://ehb.world/',
  mainLogin: process.env.NEXT_PUBLIC_MAIN_LOGIN_URL ?? 'https://main.ehb.world/login',
  mainRegister: process.env.NEXT_PUBLIC_MAIN_REGISTER_URL ?? 'https://main.ehb.world/register',
  gosellr: process.env.NEXT_PUBLIC_GOSELLR_URL ?? 'https://gosellr.ehb.world/',
  jps: process.env.NEXT_PUBLIC_JPS_URL ?? 'https://jps.ehb.world/login',
  pss: process.env.NEXT_PUBLIC_PSS_URL ?? 'https://pss.ehb.world/',
} as const;

/** Social / contact links shown in the footer. */
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/ehbworld',
  github: 'https://github.com/ehb-world',
  linkedin: 'https://www.linkedin.com/company/ehb-world',
  email: 'mailto:support@ehb.world',
} as const;
