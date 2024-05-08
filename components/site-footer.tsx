import { siteConfig } from '@/config/site'
import { Mail } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer>
      <div className=' mb-6 mt-14 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4'>
          <a target='_blank' rel='noreferrer' href='mailto:ska18@mail.ru'>
            <span className='sr-only'>Mail</span>
            <Mail className='h-6 w-6' />
          </a>
        </div>
        <div className='mb-2 flex space-x-2 text-sm text-muted-foreground'>
          <a href={siteConfig.links.site} target='_blank'>
            {siteConfig.author}
          </a>
        </div>
      </div>
    </footer>
  )
}
