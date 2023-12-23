import { defineType, defineField } from 'sanity'

export const columns = defineType({
  name: 'columns',
  title: 'Columns',
  type: 'array',
  of: [{ type: 'hero' }, { type: 'marquee' }]
})
