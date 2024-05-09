import { getAllTags, sortTagsByCount } from '@/lib/utils'
import { Metadata } from 'next'
import { posts, sms } from '#site/content'
import { Tag } from '@/components/tag'

export const metadata: Metadata = {
  title: 'Tags',
  description: 'Topic written about'
}
export default async function TagsPage() {
  const tags = getAllTags(posts)
  const sortedTags = sortTagsByCount(tags)
  const smsTags = getAllTags(sms)
  const sortedSmsTags = sortTagsByCount(smsTags)

  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block text-4xl font-black lg:text-5xl'>Tags</h1>
        </div>
      </div>
      <hr className='my-4' />
      <h2 className='mb-2'>Blog:</h2>
      <div className='flex flex-wrap gap-3'>
        {sortedTags?.map(tag => <Tag tag={tag} count={tags[tag]} key={tag} />)}
      </div>
      <h2 className='my-2'>SMS:</h2>
      <div className='flex flex-wrap gap-3'>
        {sortedSmsTags?.map(tag => (
          <Tag tag={tag} count={smsTags[tag]} key={tag} />
        ))}
      </div>
    </div>
  )
}
