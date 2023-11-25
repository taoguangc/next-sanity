import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: '文章',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '标题',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: '别名',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'author',
      title: '作者',
      type: 'reference',
      to: { type: 'author' }
    }),
    defineField({
      name: 'mainImage',
      title: '主图',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text'
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: '分类',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    }),
    defineField({
      name: 'publishedAt',
      title: '发布于',
      type: 'datetime'
    }),
    defineField({
      name: 'body',
      title: '正文',
      type: 'blockContent'
    })
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    }
  }
})
