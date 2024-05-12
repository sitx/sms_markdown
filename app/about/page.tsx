import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About me',
  description: 'information about me'
}

export default function AboutPage() {
  return (
    <>
      <div className='container max-w-6xl py-6 lg:py-10'>
        <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
          <div className='flex-1 space-x-3'>
            <h1 className=' inline-block text-4xl font-black lg:text-5xl'>
              About Me
            </h1>
          </div>
        </div>
        <hr className='my-8' />
        <div className='flex flex-col items-center gap-8 md:flex-row md:items-start'>
          <div className=' flex min-w-48 max-w-48 flex-col gap-2'>
            <Avatar className='h-48 w-48 '>
              <AvatarImage src={siteConfig.avatar} alt={siteConfig.author} />
              <AvatarFallback>DB</AvatarFallback>
            </Avatar>
            <h2 className='break-words text-center text-2xl font-bold'>
              {siteConfig.author}
            </h2>
            <p className='break-words text-center text-muted-foreground'>
              Captain
            </p>
          </div>
          <p className='py-4 text-lg text-muted-foreground'>
            Имею небольшой опыт морской жизни, считаю себя жителем планеты - как
            многие моряки, люблю приключения и новое, просто Добрый самаритянин.
            <Link href="https://proza.ru/2014/05/18/1930">Q</Link>
          </p>
        </div>
      </div>
    </>
  )
}
