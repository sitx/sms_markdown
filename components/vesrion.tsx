import { siteConfig } from '../config/site'

export function SiteVersion() {
  return (
    <div className='ml-2  hidden px-0 text-sm sm:inline-flex'>
      ver.:<span className='font-bold'>{siteConfig.version}</span>
    </div>
  )
}
