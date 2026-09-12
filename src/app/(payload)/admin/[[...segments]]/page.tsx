import type { Metadata } from 'next'

import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'
import PuckEditor from '@/app/(payload)/admin/editor/page'
import AdminBuilderPage from '@/app/(payload)/admin/builder/page'
import AdminDashboard from '@/app/(payload)/admin/dashboard/page'
import TemplateGallery from '@/app/(payload)/admin/templates/page'

// ═══════════════════════════════════════════════════════
// Admin Route Handler
// /admin → Dashboard (ReadyPlanet-style)
// /admin/dashboard → Admin Dashboard
// /admin/templates → Template Gallery
// /admin/builder → GrapesJS Visual Builder
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

  // /admin/dashboard → Admin Dashboard
  if (segments.length === 1 && segments[0] === 'dashboard') {
    return <AdminDashboard />
  }

  // /admin/templates → Template Gallery
  if (segments.length === 1 && segments[0] === 'templates') {
    return <TemplateGallery />
  }

  // /admin/builder → GrapesJS Visual Builder
  if (segments.length === 1 && segments[0] === 'builder') {
    return <AdminBuilderPage />
  }

  // /admin/editor → Puck Editor
  if (segments.length === 1 && segments[0] === 'editor') {
    return <PuckEditor />
  }

  // /admin (root) → Admin Dashboard
  if (segments.length === 0) {
    return <AdminDashboard />
  }

  // /admin/collections/*, /admin/globals/* → Payload CMS admin
  return RootPage({ config, params, searchParams, importMap })
}

export default AdminPage
