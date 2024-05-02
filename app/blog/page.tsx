import { posts } from '#site/content'
import PostItem from '@/components/post-item'
import { sortPosts } from '@/lib/utils'

export default async function BlogPage() {
  const sortedPost = sortPosts(posts.filter(post => post.published))
  const displayPosts = sortedPost

  return (
    <>
      <div className='container max-w-4xl py-6 lg:py-10'>
        <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
          <div className=' flex-1 space-y-4'>
            <h1 className='inline-block text-4xl font-black lg:text-5xl'>
              Блог
            </h1>
            <p className='text-xl text-muted-foreground'>
              Мои рассуждения обо всем и не о чем.
            </p>
          </div>
        </div>
        <hr className='mt-8' />
        {displayPosts?.length > 0 ? (
          <ul className='flex flex-col'>
            {displayPosts.map(post => {
              const { slug, date, description, title } = post
              return (
                <li key={slug}>
                  <PostItem
                    slug={slug}
                    date={date}
                    title={title}
                    description={description}
                  />
                </li>
              )
            })}
          </ul>
        ) : (
          <p className='my-6 text-xl text-muted-foreground'>
            Нет постов пока нечего показать
          </p>
        )}
      </div>
    </>
  )
}
