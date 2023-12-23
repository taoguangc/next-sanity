import Container from '@/components/global/container'

type Props = {
  data: {
    title: string
    image: string
  }
}

export default function Hero({ data }: Props) {
  const { title, image } = data

  return (
    <section className='hero'>
      <Container>
        <h2>{data.title}</h2>
      </Container>
    </section>
  )
}
