import { posts } from '#site/content'
import PostItem from '@/components/post-item'
import { QueryPagination } from '@/components/query-pagination'
import { sortPosts } from '@/lib/utils'

const POST_PER_PAGE = 5

interface BlogPageProps {
  searchParams: {
    page?: string
  }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1

  const sortedPost = sortPosts(posts.filter(post => post.published))
  const totalPages = Math.ceil(sortedPost.length / POST_PER_PAGE)

  const displayPosts = sortedPost.slice(
    POST_PER_PAGE * (currentPage - 1),
    POST_PER_PAGE * currentPage
  )

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
        <QueryPagination totalPages={totalPages} className='mt-4 justify-end' />
      </div>
    </>
  )
}
