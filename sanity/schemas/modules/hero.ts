import { defineType, defineField } from 'sanity'
import { Image } from '@phosphor-icons/react'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: Image,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text'
        })
      ]
    })
  ]
})
