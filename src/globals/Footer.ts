import type { GlobalConfig } from 'payload'

export const FooterConfig: GlobalConfig = {
  slug: 'footer-config',
  admin: {
    group: 'จัดการเว็บไซต์',
  },
  fields: [
    { name: 'description', type: 'textarea', defaultValue: 'หจก.โดมการช่าง ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่น\nคุณภาพมาตรฐาน มอก.3000 ผลิตในประเทศไทย\nจัดส่งและติดตั้งทั่วประเทศ' },
    {
      name: 'productLinks',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    {
      name: 'serviceLinks',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
      ],
    },
    { name: 'copyright', type: 'text', defaultValue: 'สงวนลิขสิทธิ์' },
    { name: 'madeIn', type: 'text', defaultValue: 'ผลิตในประเทศไทย' },
  ],
}
