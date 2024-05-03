'use client'

import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { useState } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import { Icons } from './icons'
import { siteConfig } from '@/config/site'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' className='w-10 px-0 sm:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <MobileLink
          onOpenChange={setOpen}
          href='/'
          className='flex items-center'
        >
          <Icons.logo2 className='mr-2 h-8 w-8' />
          <span className='font-bold'>{siteConfig.name}</span>
        </MobileLink>
        <div className='mt-3 flex flex-col gap-3'>
          <MobileLink onOpenChange={setOpen} href='/blog'>
            Blog
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href='/about'>
            About
          </MobileLink>
          <hr className='my-2' />
          <Link target='_blank' rel='noreferrer' href={siteConfig.links.github}>
            GitHub
          </Link>
          <Link
            target='_blank'
            rel='noreferrer'
            href={siteConfig.links.telegram}
          >
            Telegram
          </Link>
          <Link target='_blank' rel='noreferrer' href={siteConfig.links.site}>
            Site
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode
  onOpenChange?: (open: boolean) => void
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}
