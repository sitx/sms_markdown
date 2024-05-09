import { posts } from '#site/content'
import PostItem from '@/components/post-item'
import { QueryPagination } from '@/components/query-pagination'
import { Tag } from '@/components/tag'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getAllTags, sortPosts, sortTagsByCount } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'

const POST_PER_PAGE = 5

export const metadata: Metadata = {
  title: 'My blog',
  description: 'This is my blog'
}

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

  const tags = getAllTags(posts)
  const sortedTags = sortTagsByCount(tags)

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
        <div className='mt-8 grid grid-cols-12 gap-3 '>
          <div className='col-span-12 col-start-1 sm:col-span-8'>
            <hr />
            {displayPosts?.length > 0 ? (
              <ul className='flex flex-col'>
                {displayPosts.map(post => {
                  const { slug, date, description, title, tags } = post
                  return (
                    <li key={slug}>
                      <PostItem
                        slug={slug}
                        date={date}
                        title={title}
                        description={description}
                        tags={tags}
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
            <QueryPagination
              totalPages={totalPages}
              className='mt-4 justify-end'
            />
          </div>
          <Card className='col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1'>
            <CardHeader>
              <CardTitle>
                <Link href={`/tags`}>Tags</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-wrap gap-2'>
              {sortedTags?.map(tag => (
                <Tag tag={tag} key={tag} count={tags[tag]} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
