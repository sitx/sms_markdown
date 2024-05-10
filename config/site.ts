import { link } from 'fs'
import { version } from 'os'

export const siteConfig = {
  name: 'Sailor',
  url: 'https://sms-sigma-nine.vercel.app',
  description: 'Nextjs 14 blog/sms/other using velite tailwindcss and shadcn',
  author: 'sky_wa1ker',
  version: '0.22:content',
  avatar: '/avatar.svg',
  links: {
    site: 'https://sms-sigma-nine.vercel.app/',
    github: 'https://github.com/sitx',
    telegram: 'https://t.me/sky_wa1ker'
  }
}

export type SiteConfig = typeof siteConfig
