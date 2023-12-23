export type Page = {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  modules: [
    {
      _id: string
      title: string
      image: string
    }
  ]
}
