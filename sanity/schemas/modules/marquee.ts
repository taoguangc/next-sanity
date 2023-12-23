import { defineType, defineField } from 'sanity'
import { Slideshow } from '@phosphor-icons/react'

export const marquee = defineType({
  name: 'marquee',
  title: 'Marquee',
  type: 'object',
  icon: Slideshow,
  fieldsets: [
    {
      name: 'options',
      title: '选项',
      options: { columns: 2 }
    }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'items',
      title: '项目',
      type: 'array',
      of: [
        {
          name: 'item',
          title: 'Item',
          type: 'object',
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
                {
                  name: 'alt',
                  title: 'Alternative Text',
                  type: 'string'
                }
              ]
            })
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image'
            }
          }
        }
      ],
      validation: Rule => Rule.min(1).required()
    })
  ]
})
