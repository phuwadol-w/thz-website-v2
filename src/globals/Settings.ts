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
          label: 'ธีม & สี',
          fields: [
            {
              name: 'template',
              type: 'select',
              defaultValue: 'modern',
              options: [
                { label: 'Modern Teal', value: 'modern' },
                { label: 'Classic Blue', value: 'classic' },
                { label: 'Minimal White', value: 'minimal' },
                { label: 'Bold Orange', value: 'bold' },
                { label: 'Nature Green', value: 'nature' },
              ],
              admin: { description: 'เทมเพลตหลักของเว็บไซต์' },
            },
            { name: 'primaryColor', type: 'text', defaultValue: '#006D6F', admin: { description: 'สีหลัก (Primary)' } },
            { name: 'secondaryColor', type: 'text', defaultValue: '#2D6A4F', admin: { description: 'สีรอง (Secondary)' } },
            { name: 'accentColor', type: 'text', defaultValue: '#D4AF37', admin: { description: 'สีเน้น (Accent)' } },
            { name: 'bgColor', type: 'text', defaultValue: '#FFFFFF', admin: { description: 'สีพื้นหลัง' } },
            { name: 'textColor', type: 'text', defaultValue: '#1A1A2E', admin: { description: 'สีข้อความ' } },
            {
              name: 'fontPrimary',
              type: 'select',
              defaultValue: 'Montserrat',
              options: [
                { label: 'Montserrat', value: 'Montserrat' },
                { label: 'Inter', value: 'Inter' },
                { label: 'Kanit', value: 'Kanit' },
                { label: 'Sarabun', value: 'Sarabun' },
              ],
              admin: { description: 'ฟอนต์หลัก' },
            },
          ],
        },
        {
          label: 'Banner',
          fields: [
            { name: 'bannerEnabled', type: 'checkbox', defaultValue: true, admin: { description: 'เปิด/ปิด Banner หน้าแรก' } },
            { name: 'bannerImage', type: 'upload', relationTo: 'media', admin: { description: 'รูป Banner' } },
            { name: 'bannerLink', type: 'text', admin: { description: 'ลิงก์เมื่อกด Banner' } },
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
            { name: 'ogImage', type: 'upload', relationTo: 'media', admin: { description: 'รูป OG Image สำหรับ Social Share' } },
          ],
        },
      ],
    },
  ],
}
