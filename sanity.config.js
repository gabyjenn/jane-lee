import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes/index.js'
import {
  orderableDocumentListDeskItem,
} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'Jane Lee',

  projectId: 'rvrschc0',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({
              type: 'artwork',
              title: 'Artwork',
              S,
              context,
            }),
  
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'artwork'
            ),
          ]),
    }),
  
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})