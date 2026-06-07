import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

import {projectId, dataset} from './sanity/env'
import {schemaTypes} from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Melvin Raj Archive',

  projectId,
  dataset,

  plugins: [
  structureTool({
    name: 'structure',
    title: 'Content',
  }),
  visionTool(),
],
  schema: {
    types: schemaTypes,
  },
})