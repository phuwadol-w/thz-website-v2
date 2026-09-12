import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

// ═══════════════════════════════════════════════════════
// GET /api/puck/pages/[id] — Get single page
// ═══════════════════════════════════════════════════════
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const payload = await getPayload({ config })
    const page = await payload.findByID({
      collection: 'pages',
      id,
    })
    return NextResponse.json(page)
  } catch (error: any) {
    console.error('Failed to fetch page:', error)
    return NextResponse.json({ error: error.message || 'Failed to fetch page' }, { status: 500 })
  }
}

// ═══════════════════════════════════════════════════════
// PATCH /api/puck/pages/[id] — Update page layout
// ═══════════════════════════════════════════════════════
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const payload = await getPayload({ config })
    const body = await request.json()

    const page = await payload.update({
      collection: 'pages',
      id,
      data: body,
    })

    return NextResponse.json({ doc: page })
  } catch (error: any) {
    console.error('Failed to update page:', error)
    return NextResponse.json({ error: error.message || 'Failed to update page' }, { status: 500 })
  }
}

// ═══════════════════════════════════════════════════════
// DELETE /api/puck/pages/[id] — Delete page
// ═══════════════════════════════════════════════════════
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const payload = await getPayload({ config })
    await payload.delete({
      collection: 'pages',
      id,
    })
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Failed to delete page:', error)
    return NextResponse.json({ error: error.message || 'Failed to delete page' }, { status: 500 })
  }
}
