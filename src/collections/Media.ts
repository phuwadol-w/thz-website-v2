import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
  },
  upload: {
    staticDir: 'public/media',
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
