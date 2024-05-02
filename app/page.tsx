export default function Home() {
  return (
    <section className=''>
      <div className='container max-w-4xl py-6 lg:py-10'>
        <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
          <div className=' flex-1 space-y-4'>
            <h1 className='inline-block text-4xl font-black lg:text-5xl'>
              Sailor V
            </h1>
            <p className='text-xl text-muted-foreground'>
              💛 Ирусь люблю тебя 💛
            </p>
            <p className='text-xl text-muted-foreground'>
              Уже можно потыкать кнопки
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
