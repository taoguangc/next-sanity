import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('./hero'))
const Marquee = dynamic(() => import('./marquee'))

type Props = {
  data: any
}

export default function Module({ data }: Props) {
  const type = data._type

  switch (type) {
    case 'Hero':
      return <Hero data={data} />
    case 'Marquee':
      return <Marquee data={data} />
  }
}
