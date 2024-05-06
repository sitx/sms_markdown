'use client'

import Link from 'next/link'
import { Icons } from './icons'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export function MainNav() {
  const pathname = usePathname()
  return (
    <nav className='flex items-center space-x-4 lg:space-x-6'>
      <Link href='/' className=' mr-6 flex items-center space-x-2'>
        {/* <Icons.logo className='h-6 w-6 ' /> */}
        <Icons.logo2 className='h-10 w-10' />
        <span className='font-bold'>{siteConfig.name}</span>
      </Link>
      <Link
        href='/blog'
        className={cn(
          'hidden text-sm font-medium transition-colors hover:text-primary sm:inline-flex',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Blog
      </Link>
      <Link
        href='/sms'
        className={cn(
          'hidden text-sm font-medium transition-colors hover:text-primary sm:inline-flex',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        SMS
      </Link>
      <Link
        href='/about'
        className={cn(
          'hidden text-sm font-medium transition-colors hover:text-primary sm:inline-flex',
          pathname === '/about' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        About
      </Link>
    </nav>
  )
}
