import { StructureBuilder } from 'sanity/desk'
import { Gear } from '@phosphor-icons/react'

export const structure = (S: StructureBuilder) =>
  S.list()
    .id('Content')
    .title('内容')
    .items([
      S.listItem()
        .id('siteSettings')
        .title('网站设置')
        .icon(Gear)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings').title('网站设置')),
      S.divider(),
      // Filter out docs already defined above
      ...S.documentTypeListItems().filter(item => item.getId() !== 'siteSettings')
    ])
