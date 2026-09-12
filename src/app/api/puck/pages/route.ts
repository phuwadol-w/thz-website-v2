import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

// ═══════════════════════════════════════════════════════
// GET /api/puck/pages — List all pages with Puck layout
// ═══════════════════════════════════════════════════════
export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'pages',
      limit: 100,
    })
    return NextResponse.json(result)
  } catch (error) {
    console.error('Failed to fetch pages:', error)
    return NextResponse.json({ error: 'Failed to fetch pages' }, { status: 500 })
  }
}

// ═══════════════════════════════════════════════════════
// POST /api/puck/pages — Create new page
// ═══════════════════════════════════════════════════════
export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const body = await request.json()

    const page = await payload.create({
      collection: 'pages',
      data: {
        title: body.title || 'New Page',
        slug: body.slug || `/new-page-${Date.now()}`,
        layout: body.layout || { content: [], root: {}, zones: {} },
        published: body.published || false,
        metaTitle: body.metaTitle || body.title,
        metaDescription: body.metaDescription || '',
      } as any,
    })

    return NextResponse.json({ doc: page })
  } catch (error: any) {
    console.error('Failed to create page:', error)
    return NextResponse.json({ error: error.message || 'Failed to create page' }, { status: 500 })
  }
}
