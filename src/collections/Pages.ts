import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    group: 'จัดการเว็บไซต์',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: false,
    },
    // ═══ Puck Layout (JSON) ═══
    {
      name: 'layout',
      type: 'json',
      defaultValue: { content: [], root: {}, zones: {} },
      admin: {
        description: 'Puck Editor layout data (drag-and-drop components)',
      },
    },
    // ═══ SEO ═══
    {
      name: 'metaTitle',
      type: 'text',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
    },
    // ═══ Legacy content (for backward compatibility) ═══
    {
      name: 'content',
      type: 'richText',
      admin: {
        description: 'Legacy rich text content (optional, for pages not using Puck)',
        hidden: true,
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        hidden: true,
      },
    },
  ],
}
