import { link } from 'fs'

export const siteConfig = {
  name: 'SailorMoon',
  url: 'https://sms-sigma-nine.vercel.app',
  descriprion: 'Nextjs 14 blog using velite tailwindcss and shadcn',
  author: 'sky_wa1ker',
  links: {
    github: 'https://github.com/sitx',
    personalSite: '#',
    telegram: 'https://t.me/sky_wa1ker'
  }
}

export type SiteConfig = typeof siteConfig
