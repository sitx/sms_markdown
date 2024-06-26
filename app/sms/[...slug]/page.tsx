import { sms } from '#site/content'
import { MDXComponent } from '@/components/mdx-components'
import { formatDate } from '@/lib/utils'
import { Calendar } from 'lucide-react'
import { notFound } from 'next/navigation'
import '@/styles/mdx.css'
import { Tag } from '@/components/tag'

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/')
  const post = sms.find(post => post.slugAsParams === slug)
  return post
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return sms.map(post => ({ slug: post.slugAsParams.split('/') }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostParams(params)

  if (!post || !post.published) {
    return notFound()
  }

  return (
    <article className='mx container prose mx-auto max-w-3xl py-6 dark:prose-invert'>
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
