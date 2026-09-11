import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  admin: {
    group: 'จัดการเว็บไซต์',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'ข้อมูลเว็บไซต์',
          fields: [
            { name: 'siteName', type: 'text', defaultValue: 'THaiCraftworkZ (THZ)' },
            { name: 'siteDescription', type: 'textarea', defaultValue: 'ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน มอก.3000' },
            { name: 'logo', type: 'upload', relationTo: 'media' },
          ],
        },
        {
          label: 'ติดต่อ',
          fields: [
            { name: 'phone', type: 'text', defaultValue: '081-300-1932' },
            { name: 'email', type: 'email', defaultValue: 'THZ@gmail.com' },
            { name: 'address', type: 'textarea', defaultValue: '44 หมู่ 1 ถนนเทวบุรี ต.โพธิ์เสด็จ อ.เมือง จ.นครศรีธรรมราช 80000' },
            { name: 'facebook', type: 'text', defaultValue: 'https://www.facebook.com/domekarnchang/' },
            { name: 'website', type: 'text', defaultValue: 'www.thz.co.th' },
          ],
        },
        {
          label: 'SEO',
          fields: [
            { name: 'metaTitle', type: 'text' },
            { name: 'metaDescription', type: 'textarea' },
            { name: 'keywords', type: 'textarea' },
          ],
        },
      ],
    },
  ],
}
