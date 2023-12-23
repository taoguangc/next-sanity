import { PortableTextBlock } from 'sanity'

export type Post = {
  _id: string
  _createdAt: Date
  publishedAt: Date
  title: string
  slug: string
  mainImage: string
  asset: {
    url: string
    metadata: {
      lqip: string
      demensions: {
        height: string
        weight: string
      }
    }
  }
  lqip: string
  categories: string
  body: PortableTextBlock[]
}
