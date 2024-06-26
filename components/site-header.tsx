import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { Icons } from './icons'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'
import { ModeToggle } from './mode-toggle'
import { SiteVersion } from './vesrion'

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-10 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 '>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <MainNav />
        <div className='flex flex-1 items-center justify-end space-x-2'>
          <nav className='flex items-center'>
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'hidden w-10 px-0 sm:inline-flex'
                )}
              >
                <Icons.gitHub className='h-4 w-4' />
                <span className='sr-only'>GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.telegram}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'hidden w-10 px-0 sm:inline-flex'
                )}
              >
                <Icons.telegram className='h-4 w-4' />
                <span className='sr-only'>Telegram</span>
              </div>
            </Link>
            <Link href={siteConfig.links.site} target='_blank' rel='noreferrer'>
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'hidden w-10 px-0 sm:inline-flex'
                )}
              >
                <Icons.site className='h-4 w-4' />
                <span className='sr-only'>Site</span>
              </div>
            </Link>
            <ModeToggle />
            <SiteVersion />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  )
}
