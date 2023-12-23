import { defineType, defineField } from 'sanity'

export const project = defineType({
  name: 'project',
  title: '项目',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '名称',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: '别名',
      type: 'slug',
      options: { source: 'name' }
    }),
    defineField({
      name: 'image',
      title: '图像',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url'
    }),
    defineField({
      name: 'content',
      title: '内容',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ]
})
