import type { MetadataRoute } from 'next'

const provinces = [
  { slug: 'nakhon-si-thammarat', name: 'นครศรีธรรมราช' },
  { slug: 'songkhla', name: 'สงขลา' },
  { slug: 'phuket', name: 'ภูเก็ต' },
  { slug: 'krabi', name: 'กระบี่' },
  { slug: 'trang', name: 'ตรัง' },
  { slug: 'phatthalung', name: 'พัทลุง' },
  { slug: 'ranong', name: 'ระนอง' },
  { slug: 'chumphon', name: 'ชุมพร' },
  { slug: 'surat-thani', name: 'สุราษฎร์ธานี' },
  { slug: 'nakhon-nayok', name: 'นครนายก' },
  { slug: 'prachinburi', name: 'ปราจีนบุรี' },
  { slug: 'sa-kaeo', name: 'สระแก้ว' },
  { slug: 'chachoengsao', name: 'ฉะเชิงเทรา' },
]

const blogSlugs = [
  'how-to-choose-playground-equipment',
  'school-bench-material-comparison',
  'loft-furniture-design-tips',
  'playground-safety-standards-thailand',
  'outdoor-playground-maintenance',
  'steel-vs-plastic-playground',
  'how-to-choose-slide',
  'how-to-choose-swing',
  'how-to-clean-playground',
  'how-to-maintain-plastic-slide',
  'playground-equipment-pricing',
  'playground-equipment-price-comparison',
  'custom-playground-equipment',
  'playground-for-toddlers',
  'en71-standard',
  'best-spring-seesaw',
  'playground-combo-set',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thz-website-v2.vercel.app'
  
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/products/thz-play`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/products/thz-bench`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/products/thz-furniture`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ]
  
  const areaPages = provinces.map(province => ({
    url: `${baseUrl}/areas/${province.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  const blogPages = blogSlugs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  return [...staticPages, ...areaPages, ...blogPages]
}
