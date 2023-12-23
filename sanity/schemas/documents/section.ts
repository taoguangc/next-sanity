import { defineType, defineField } from 'sanity'
import { SelectionBackground } from '@phosphor-icons/react'

export const section = defineType({
  name: 'section',
  title: '可重用部分',
  type: 'document',
  icon: SelectionBackground,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Provide a name to reference this section. For internal use only.',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'hero' }, { type: 'marquee' }],
      validation: Rule => Rule.length(1).error('您只能拥有一项内容')
    })
  ],
  preview: {
    select: {
      name: 'name',
      content: 'content.0'
    }
    // prepare({ name, content }) {
    //   return {
    //     title: name,
    //     subtitle: getModuleName(content._type)
    //   }
    // }
  }
})
