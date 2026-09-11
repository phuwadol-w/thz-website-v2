import type { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  admin: {
    group: 'จัดการเว็บไซต์',
  },
  fields: [
    {
      name: 'navLinks',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
        {
          name: 'children',
          type: 'array',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
      ],
    },
    { name: 'ctaPhone', type: 'text', defaultValue: '081-300-1932' },
    { name: 'ctaFacebook', type: 'text', defaultValue: 'https://www.facebook.com/domekarnchang/' },
  ],
}
