import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'สนามเด็กเล่น', value: 'playground' },
        { label: 'ม้านั่ง', value: 'bench' },
        { label: 'เฟอร์นิเจอร์', value: 'furniture' },
        { label: 'ติดตั้งจริง', value: 'installation' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'date',
      type: 'date',
    },
  ],
}
