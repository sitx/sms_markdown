import { link } from 'fs'

export const siteConfig = {
  name: 'Sailor V',
  url: 'https://sms-sigma-nine.vercel.app',
  descriprion: 'Nextjs 14 blog using velite tailwindcss and shadcn',
  author: 'sky_wa1ker',
  links: {
    site: 'https://sms-sigma-nine.vercel.app/',
    github: 'https://github.com/sitx',
    telegram: 'https://t.me/sky_wa1ker'
  }
}

export type SiteConfig = typeof siteConfig
