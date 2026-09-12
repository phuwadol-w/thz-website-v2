import type { Metadata } from 'next'

import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'
import AdminBuilderWrapper from '@/components/page-builder/AdminBuilderWrapper'

// ═══════════════════════════════════════════════════════
// Visual Builder — renders at /admin (root, no segments)
// Payload CMS admin — renders at /admin/collections/* etc.
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

// When segments is empty (i.e., /admin root) → render Visual Builder
// When segments has values (e.g., /admin/collections/products) → render Payload admin
async function AdminPage({ params, searchParams }: Args) {
  const resolvedParams = await params

  // If no segments — show the Visual Page Builder (wrapped in BuilderProvider)
  if (!resolvedParams.segments || resolvedParams.segments.length === 0) {
    return <AdminBuilderWrapper />
  }

  // Otherwise — show the default Payload CMS admin
  return RootPage({ config, params, searchParams, importMap })
}

export default AdminPage
