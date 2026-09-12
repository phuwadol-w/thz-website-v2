import { getPayload } from 'payload'
import config from '@payload-config'

// ═══════════════════════════════════════════════════════
// Server-side Puck data fetching
// ═══════════════════════════════════════════════════════

export async function getPageBySlug(slug: string) {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'pages',
      where: {
        slug: { equals: slug },
      },
      limit: 1,
    })
    return (result.docs[0] as any) || null
  } catch (error) {
    console.error(`Failed to fetch page ${slug}:`, error)
    return null
  }
}

export async function getAllPages() {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'pages',
      limit: 100,
    })
    return result.docs || []
  } catch (error) {
    console.error('Failed to fetch pages:', error)
    return []
  }
}

export async function getLayoutBySlug(slug: string) {
  const page = await getPageBySlug(slug)
  return page?.layout || null
}
