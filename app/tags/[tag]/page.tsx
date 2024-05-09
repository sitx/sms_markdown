import { posts, sms } from '#site/content'
import PostItem from '@/components/post-item'
import { Tag } from '@/components/tag'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getAllTags, getPostsByTagSlug, sortTagsByCount } from '@/lib/utils'
import { slug } from 'github-slugger'
import { Metadata } from 'next'

interface TagPageProps {
  params: {
    tag: string
  }
}

export async function generateMetadata({
  params
}: TagPageProps): Promise<Metadata> {
  const { tag } = params
  return {
    title: tag,
    description: 'Posts on topic of ${tag}'
  }
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts)
  const paths = Object.keys(tags).map(tag => ({ tag: slug(tag) }))
  return paths
}

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params
  const title = tag.split('-').join(' ')

  const displayPosts = getPostsByTagSlug(posts, tag)
  const displaySms = getPostsByTagSlug(sms, tag)
  const display = [...displayPosts, ...displaySms]

  const tags = getAllTags(posts)
  const sortedTags = sortTagsByCount(tags)
  const smsTags = getAllTags(sms)
  const sortedSmsTags = sortTagsByCount(smsTags)
  return (
    <>
      <div className='container max-w-4xl py-6 lg:py-10'>
        <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
          <div className=' flex-1 space-y-4'>
            <h1 className='inline-block text-4xl font-black capitalize lg:text-5xl'>
              Tag: {title}
            </h1>
            <p className='text-xl text-muted-foreground'>
              Все статьи с тегом <span className='font-bold'>{title}</span>
            </p>
          </div>
        </div>
        <div className='mt-8 grid grid-cols-12 gap-3 '>
          <div className='col-span-12 col-start-1 sm:col-span-8'>
            <hr />
            {display?.length > 0 ? (
              <ul className='flex flex-col'>
                {display.map(post => {
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
          </div>
          <Card className='col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1'>
            <CardHeader>
              <CardTitle>Post tags</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-wrap gap-2'>
              {sortedTags?.map(tagInList => (
                <Tag
                  tag={tagInList}
                  key={tagInList}
                  count={tags[tagInList]}
                  current={slug(tagInList) === tag}
                />
              ))}
            </CardContent>
            <CardHeader>
              <CardTitle>Sms tags</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-wrap gap-2'>
              {sortedSmsTags?.map(tagInList => (
                <Tag
                  tag={tagInList}
                  key={tagInList}
                  count={smsTags[tagInList]}
                  current={slug(tagInList) === tag}
                />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
