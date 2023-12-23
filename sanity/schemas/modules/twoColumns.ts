import { defineType, defineField } from 'sanity'

export const twoColumns = defineType({
  name: 'twoColumns',
  title: 'Two Columns',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineField({
          name: 'block',
          title: 'Block',
          type: 'block'
        })
      ]
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image'
    })
  ]
})
