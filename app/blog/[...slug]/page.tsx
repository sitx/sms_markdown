import { posts } from '#site/content'
import { MDXComponent } from '@/components/mdx-components'
import { notFound } from 'next/navigation'
import '@/styles/mdx.css'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { Tag } from '@/components/tag'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/')
  const post = posts.find(post => post.slugAsParams === slug)
  return post
}

export async function generateMetadata({
  params
}: PostPageProps): Promise<Metadata> {
  const post = await getPostParams(params)

  if (!post) {
    return {}
  }
  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set('title', post.title)

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`]
    }
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return posts.map(post => ({ slug: post.slugAsParams.split('/') }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostParams(params)

  if (!post || !post.published) {
    return notFound()
  }

  return (
    <article className='lg:min-width container prose mx-auto max-w-3xl py-6 dark:prose-invert'>
      <h1 className='mb-2 text-2xl'>{post.title}</h1>
      <div className='mb-2 flex gap-2'>
        {post.tags?.map(tag => <Tag key={tag} tag={tag} />)}
      </div>
      {post.description ? (
        <p className='mt-0 text-xl text-muted-foreground'>{post.description}</p>
      ) : null}
      {/* <dl>
        <dt className='sr-only'>Published On</dt>
        <dd className='flex  items-center gap-1 text-sm font-medium text-muted-foreground sm:text-base'>
          <Calendar className='h-4 w-4' />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </dd>
      </dl> */}
      <hr className='my-4' />
      <MDXComponent code={post.body} />
    </article>
  )
}
