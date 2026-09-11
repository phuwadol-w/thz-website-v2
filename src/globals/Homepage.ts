import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  admin: {
    group: 'จัดการเว็บไซต์',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            { name: 'heroBadge', type: 'text', defaultValue: 'EST. 2560 — PLAYGROUND EQUIPMENT' },
            { name: 'heroHeadline1', type: 'text', defaultValue: 'สนามเด็กเล่น' },
            { name: 'heroHeadline2', type: 'text', defaultValue: 'คุณภาพ' },
            { name: 'heroHeadline3', type: 'text', defaultValue: 'มาตรฐาน' },
            { name: 'heroStandard', type: 'text', defaultValue: 'มอก.3000' },
            { name: 'heroSubtext', type: 'textarea' },
            { name: 'heroImage', type: 'upload', relationTo: 'media' },
            { name: 'heroCtaText', type: 'text', defaultValue: 'ขอใบเสนอราคาฟรี' },
            { name: 'heroCtaLink', type: 'text', defaultValue: '/contact' },
          ],
        },
        {
          label: 'Trust Bar',
          fields: [
            {
              name: 'stats',
              type: 'array',
              maxRows: 4,
              fields: [
                { name: 'number', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
                { name: 'icon', type: 'text', defaultValue: 'Award' },
              ],
            },
          ],
        },
        {
          label: 'Brands',
          fields: [
            { name: 'brandsTitle', type: 'text', defaultValue: '3 แบรนด์คุณภาพ ครบวงจร' },
            {
              name: 'brands',
              type: 'array',
              maxRows: 3,
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'slug', type: 'text', required: true },
                { name: 'description', type: 'text' },
                { name: 'image', type: 'upload', relationTo: 'media' },
                { name: 'color', type: 'text', defaultValue: '#2196F3' },
                { name: 'link', type: 'text' },
              ],
            },
          ],
        },
        {
          label: 'Products',
          fields: [
            { name: 'productsTitle', type: 'text', defaultValue: 'สินค้าขายดีของเรา' },
            { name: 'productsSubtitle', type: 'text', defaultValue: 'สินค้าแนะนำ' },
            { name: 'productsDescription', type: 'textarea' },
          ],
        },
        {
          label: 'Gallery',
          fields: [
            { name: 'galleryTitle', type: 'text', defaultValue: 'ผลงานติดตั้งทั่วประเทศ' },
            { name: 'gallerySubtitle', type: 'text', defaultValue: 'ผลงานของเรา' },
          ],
        },
        {
          label: 'Why Choose Us',
          fields: [
            { name: 'whyTitle', type: 'text', defaultValue: 'คุณภาพระดับโลก ราคาที่เข้าถึงได้' },
            { name: 'whySubtitle', type: 'text', defaultValue: 'ทำไมต้อง THZ' },
            {
              name: 'whyItems',
              type: 'array',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'text' },
                { name: 'icon', type: 'text', defaultValue: 'Shield' },
              ],
            },
          ],
        },
        {
          label: 'Testimonials',
          fields: [
            { name: 'testimonialsTitle', type: 'text', defaultValue: 'ลูกค้าของเราไว้วางใจ' },
            {
              name: 'testimonials',
              type: 'array',
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'role', type: 'text' },
                { name: 'text', type: 'textarea', required: true },
                { name: 'rating', type: 'number', defaultValue: 5, min: 1, max: 5 },
              ],
            },
          ],
        },
        {
          label: 'CTA',
          fields: [
            { name: 'ctaTitle', type: 'text', defaultValue: 'พร้อมสร้างสนามเด็กเล่น' },
            { name: 'ctaSubtitle', type: 'text', defaultValue: 'ในฝัน ของคุณ?' },
            { name: 'ctaDescription', type: 'textarea' },
            { name: 'ctaPhoneText', type: 'text', defaultValue: 'โทรเลย 081-300-1932' },
            { name: 'ctaFacebookText', type: 'text', defaultValue: 'แชท Facebook' },
          ],
        },
      ],
    },
  ],
}
