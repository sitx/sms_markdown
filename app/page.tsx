import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn, sortPosts } from '@/lib/utils'
import Link from 'next/link'
import { posts, sms } from '#site/content'
import PostItem from '@/components/post-item'

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5)
  const latestSms = sortPosts(sms).slice(0, 5)
  const dispPost = sortPosts([...latestPosts, ...latestSms]).slice(0, 6)
  return (
    <>
      <section className='space-y-6 pb-8 pt-6 md:mt-10 md:pb-12 lg:py-32'>
        <div className='container flex  flex-col gap-4 text-center'>
          <h1 className='text-balance text-3xl font-black sm:text-5xl md:text-6xl lg:text-7xl'>
            Добро пожаловать
          </h1>
          <p className='mx-auto max-w-[42rem] text-balance text-muted-foreground sm:text-xl'>
            {siteConfig.description}
          </p>
          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Link
              href='blog'
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-fit')}
            >
              Blog
            </Link>
            <Link
              href='/sms'
              target='_blank'
              rel='noreferrer'
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'w-full sm:w-fit'
              )}
            >
              SMS
            </Link>
          </div>
        </div>
      </section>
      <section className='container mt-60 flex max-w-4xl flex-col space-y-6 py-6 lg:py-10'>
        <h2 className='text-center text-3xl font-black sm:text-5xl md:text-6xl lg:text-7xl'>
          Последние Обновления
        </h2>
        <ul className='flex flex-col'>
          {dispPost.map(post => (
            <li key={post.slug} className='first:border-t first:border-border'>
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
