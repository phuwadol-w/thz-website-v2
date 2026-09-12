import type { Metadata } from 'next'

import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'
import PuckEditor from '@/app/(payload)/admin/editor/page'

// ═══════════════════════════════════════════════════════
// Admin Route Handler
// /admin → Payload root
// /admin/editor → Puck Editor
// /admin/collections/* → Payload CMS admin
// /admin/globals/* → Payload CMS admin
// ═══════════════════════════════════════════════════════

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams })

async function AdminPage({ params, searchParams }: Args) {
  const resolvedParams = await params
  const segments = resolvedParams.segments || []

  // /admin/editor → Puck Editor
  if (segments.length === 1 && segments[0] === 'editor') {
    return <PuckEditor />
  }

  // /admin/collections/*, /admin/globals/*, /admin → Payload CMS admin
  return RootPage({ config, params, searchParams, importMap })
}

export default AdminPage
