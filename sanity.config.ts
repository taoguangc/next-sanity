import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { zhHansLocale } from '@sanity/locale-zh-hans'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { structure } from '@/sanity/deskStructure'
import { schema } from './sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [deskTool({ structure }), visionTool({ defaultApiVersion: apiVersion }), media(), zhHansLocale()]
})
