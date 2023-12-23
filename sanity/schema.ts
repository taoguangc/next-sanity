import { type SchemaTypeDefinition } from 'sanity'

import { page } from './schemas/documents/page'
import { post } from './schemas/documents/post'
import { section } from './schemas/documents/section'
import { siteSettings } from './schemas/documents/siteSettings'
import { category } from './schemas/documents/category'
import { blockContent } from './schemas/modules/blockContent'
import { hero } from './schemas/modules/hero'
import { marquee } from './schemas/modules/marquee'
import { columns } from './schemas/modules/columns'
import { twoColumns } from './schemas/modules/twoColumns'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, section, post, siteSettings, category, blockContent, hero, marquee, columns, twoColumns]
}
