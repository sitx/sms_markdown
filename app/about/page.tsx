import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { siteConfig } from '@/config/site'

type Props = {}

export default function AboutPage({}: Props) {
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
              <AvatarImage src='/avatar.jpg' alt={siteConfig.author} />
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            deleniti saepe totam, voluptatum dolores cumque ducimus similique
            voluptas corrupti odit impedit corporis modi id dolorem
            consequuntur, culpa reprehenderit illum dolor. Consequatur
            voluptatem, rem ullam expedita deleniti praesentium cumque illum
            distinctio aperiam eveniet animi dolores eum asperiores fugiat
            laudantium quod totam rerum! A non unde illum ea vitae, pariatur
            nulla consequatur similique ducimus est, amet voluptate incidunt
            nisi temporibus velit quidem fugiat asperiores illo minus in
            corporis id, repellendus error? Voluptatibus reiciendis voluptate
            maxime repellendus doloremque tenetur, voluptates perferendis
            consequatur minima laudantium? Voluptas, numquam? Minus consequuntur
            blanditiis fugiat molestiae quam illo!
          </p>
        </div>
      </div>
    </>
  )
}
