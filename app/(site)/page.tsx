import { getHomepage } from '@/sanity/lib/queries'
import Block from '@/components/blocks'

type Props = {
  params: { slug: string }
}

export default async function Home({ params }: Props) {
  const page = await getHomepage('params.slug')
  const { pageBuilder } = page
  return (
    <>
      <section className='container mx-auto p-8 min-h-screen'>
        <div>{page.title}</div>
      </section>
      {pageBuilder ? (
        <>{pageBuilder?.map(module => <Module key={module._key} block={module} />)}</>
      ) : (
        <>
          <p className='mt-4 mb-12 p-10 rounded-lg bg-white'>
            Nothing to see here. Start adding some blocks to this page in your Sanity Studio!
          </p>
        </>
      )}
    </>
  )
}
