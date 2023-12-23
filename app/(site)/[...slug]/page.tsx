import { getPage } from '@/sanity/lib/queries'

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug)
  return (
    <section className='container mx-auto p-8 min-h-screen'>
      <div>{page.title}</div>
    </section>
  )
}
