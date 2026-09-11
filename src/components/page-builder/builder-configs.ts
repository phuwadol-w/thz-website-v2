// ═══════════════════════════════════════════════════════
// Page Builder — Section Configurations
// Maps each homepage section to its Payload CMS fields
// ═══════════════════════════════════════════════════════

export interface FieldConfig {
  name: string
  label: string
  type: 'text' | 'textarea' | 'image' | 'number' | 'array'
  path: string
  placeholder?: string
}

export interface SectionConfig {
  id: string
  label: string
  icon: string
  globalSlug: string
  fields: FieldConfig[]
}

export const SECTION_CONFIGS: Record<string, SectionConfig> = {
  hero: {
    id: 'hero',
    label: 'Hero — ส่วนหลัก',
    icon: '🏠',
    globalSlug: 'homepage',
    fields: [
      { name: 'heroBadge', label: 'Badge Text', type: 'text', path: 'heroBadge', placeholder: 'EST. 2560 — PLAYGROUND EQUIPMENT' },
      { name: 'heroHeadline1', label: 'Headline 1', type: 'text', path: 'heroHeadline1', placeholder: 'สนามเด็กเล่น' },
      { name: 'heroHeadline2', label: 'Headline 2', type: 'text', path: 'heroHeadline2', placeholder: 'คุณภาพ' },
      { name: 'heroHeadline3', label: 'Headline 3', type: 'text', path: 'heroHeadline3', placeholder: 'มาตรฐาน' },
      { name: 'heroStandard', label: 'Standard', type: 'text', path: 'heroStandard', placeholder: 'มอก.3000' },
      { name: 'heroSubtext', label: 'Subtext', type: 'textarea', path: 'heroSubtext', placeholder: 'รายละเอียดส่วน Hero' },
      { name: 'heroImage', label: 'Hero Image', type: 'image', path: 'heroImage' },
      { name: 'heroCtaText', label: 'CTA Button Text', type: 'text', path: 'heroCtaText', placeholder: 'ขอใบเสนอราคาฟรี' },
    ],
  },
  stats: {
    id: 'stats',
    label: 'Trust Bar — แถบความเชื่อมั่น',
    icon: '📊',
    globalSlug: 'homepage',
    fields: [
      { name: 'stats', label: 'Stats (array)', type: 'array', path: 'stats' },
    ],
  },
  brands: {
    id: 'brands',
    label: 'Brands — แบรนด์สินค้า',
    icon: '🏷️',
    globalSlug: 'homepage',
    fields: [
      { name: 'brandsTitle', label: 'Section Title', type: 'text', path: 'brandsTitle', placeholder: '3 แบรนด์คุณภาพ ครบวงจร' },
      { name: 'brands', label: 'Brand Cards (array)', type: 'array', path: 'brands' },
    ],
  },
  products: {
    id: 'products',
    label: 'Products — สินค้าแนะนำ',
    icon: '📦',
    globalSlug: 'homepage',
    fields: [
      { name: 'productsTitle', label: 'Title', type: 'text', path: 'productsTitle', placeholder: 'สินค้าขายดีของเรา' },
      { name: 'productsSubtitle', label: 'Subtitle', type: 'text', path: 'productsSubtitle', placeholder: 'สินค้าแนะนำ' },
      { name: 'productsDescription', label: 'Description', type: 'textarea', path: 'productsDescription', placeholder: 'รายละเอียดสินค้า' },
    ],
  },
  gallery: {
    id: 'gallery',
    label: 'Gallery — ผลงาน',
    icon: '🖼️',
    globalSlug: 'homepage',
    fields: [
      { name: 'galleryTitle', label: 'Title', type: 'text', path: 'galleryTitle', placeholder: 'ผลงานติดตั้งทั่วประเทศ' },
      { name: 'gallerySubtitle', label: 'Subtitle', type: 'text', path: 'gallerySubtitle', placeholder: 'ผลงานของเรา' },
    ],
  },
  whyChooseUs: {
    id: 'whyChooseUs',
    label: 'Why Choose Us — ทำไมต้อง THZ',
    icon: '✅',
    globalSlug: 'homepage',
    fields: [
      { name: 'whyTitle', label: 'Title', type: 'text', path: 'whyTitle', placeholder: 'คุณภาพระดับโลก ราคาที่เข้าถึงได้' },
      { name: 'whySubtitle', label: 'Subtitle', type: 'text', path: 'whySubtitle', placeholder: 'ทำไมต้อง THZ' },
      { name: 'whyItems', label: 'Items (array)', type: 'array', path: 'whyItems' },
    ],
  },
  testimonials: {
    id: 'testimonials',
    label: 'Testimonials — ความคิดเห็นลูกค้า',
    icon: '💬',
    globalSlug: 'homepage',
    fields: [
      { name: 'testimonialsTitle', label: 'Title', type: 'text', path: 'testimonialsTitle', placeholder: 'ลูกค้าของเราไว้วางใจ' },
      { name: 'testimonials', label: 'Reviews (array)', type: 'array', path: 'testimonials' },
    ],
  },
  cta: {
    id: 'cta',
    label: 'CTA — ปุ่ม(Call to Action)',
    icon: '📞',
    globalSlug: 'homepage',
    fields: [
      { name: 'ctaTitle', label: 'Title', type: 'text', path: 'ctaTitle', placeholder: 'พร้อมสร้างสนามเด็กเล่น' },
      { name: 'ctaSubtitle', label: 'Subtitle', type: 'text', path: 'ctaSubtitle', placeholder: 'ในฝัน ของคุณ?' },
      { name: 'ctaDescription', label: 'Description', type: 'textarea', path: 'ctaDescription', placeholder: 'รายละเอียด CTA' },
      { name: 'ctaPhoneText', label: 'Phone Button Text', type: 'text', path: 'ctaPhoneText', placeholder: 'โทรเลย 081-300-1932' },
    ],
  },
  navigation: {
    id: 'navigation',
    label: 'Navigation — เมนูนำทาง',
    icon: '🧭',
    globalSlug: 'navigation',
    fields: [
      { name: 'navLinks', label: 'Menu Links (array)', type: 'array', path: 'navLinks' },
      { name: 'ctaPhone', label: 'Phone Number', type: 'text', path: 'ctaPhone', placeholder: '081-300-1932' },
    ],
  },
  footer: {
    id: 'footer',
    label: 'Footer — ส่วนท้าย',
    icon: '📋',
    globalSlug: 'footer-config',
    fields: [
      { name: 'description', label: 'Description', type: 'textarea', path: 'description', placeholder: 'รายละเอียดบริษัท' },
      { name: 'productLinks', label: 'Product Links (array)', type: 'array', path: 'productLinks' },
      { name: 'serviceLinks', label: 'Service Links (array)', type: 'array', path: 'serviceLinks' },
      { name: 'copyright', label: 'Copyright', type: 'text', path: 'copyright', placeholder: 'สงวนลิขสิทธิ์' },
    ],
  },
  settings: {
    id: 'settings',
    label: 'Settings — ตั้งค่าเว็บไซต์',
    icon: '⚙️',
    globalSlug: 'settings',
    fields: [
      { name: 'siteName', label: 'Site Name', type: 'text', path: 'siteName', placeholder: 'THaiCraftworkZ (THZ)' },
      { name: 'phone', label: 'Phone', type: 'text', path: 'phone', placeholder: '081-300-1932' },
      { name: 'email', label: 'Email', type: 'text', path: 'email', placeholder: 'THZ@gmail.com' },
      { name: 'address', label: 'Address', type: 'textarea', path: 'address', placeholder: 'ที่อยู่' },
      { name: 'facebook', label: 'Facebook URL', type: 'text', path: 'facebook', placeholder: 'https://www.facebook.com/...' },
    ],
  },
}

// Section ordering for drag & drop
export const DEFAULT_SECTION_ORDER = [
  'hero',
  'stats',
  'brands',
  'products',
  'gallery',
  'whyChooseUs',
  'testimonials',
  'cta',
]

// All editable sections (including nav/footer/settings)
export const ALL_SECTIONS = Object.keys(SECTION_CONFIGS)
