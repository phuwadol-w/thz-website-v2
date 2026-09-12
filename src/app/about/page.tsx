import { getPageBySlug } from '@/lib/puck/fetchPages'
import PuckRenderer from '@/components/PuckRenderer'
import AboutPageClient from './AboutPageClient'

// ═══════════════════════════════════════════════════════
// About Page — Server Component
// Checks DB for Puck layout first, falls back to hardcoded
// ═══════════════════════════════════════════════════════

export const metadata = {
  title: 'เกี่ยวกับเรา | THaiCraftworkZ',
  description: 'หจก.โดมการช่าง ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน มอก.3000',
}

export default async function AboutPage() {
  const page = await getPageBySlug('/about')
  const layout = (page as any)?.layout

  // If Puck layout exists and has content, render it
  if (layout && layout.content && layout.content.length > 0) {
    return <PuckRenderer layout={layout} />
  }

  // Fallback to hardcoded client component
  return <AboutPageClient />
}
