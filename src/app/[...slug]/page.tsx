import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPageBySlug } from '@/lib/puck/fetchPages'
import PuckRenderer from '@/components/PuckRenderer'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getSettings, getNavigation, getFooterConfig } from '@/lib/fetchGlobals'

// ═══════════════════════════════════════════════════════
// Dynamic Page Renderer — renders pages from DB via Puck
// Catches routes like /about, /contact, /gallery, etc.
// Homepage (/) is handled separately in page.tsx
// ═══════════════════════════════════════════════════════

interface PageProps {
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const slugPath = '/' + (slug ? slug.join('/') : '')
  const page = await getPageBySlug(slugPath)

  if (!page) return { title: 'ไม่พบหน้า | THZ' }

  return {
    title: page.metaTitle || `${page.title} | THaiCraftworkZ`,
    description: page.metaDescription || '',
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const slugPath = '/' + (slug ? slug.join('/') : '')

  // Don't catch /admin or /api routes
  if (slugPath.startsWith('/admin') || slugPath.startsWith('/api')) {
    notFound()
  }

  const [page, settings, navigation, footerConfig] = await Promise.all([
    getPageBySlug(slugPath),
    getSettings(),
    getNavigation(),
    getFooterConfig(),
  ])

  // If page exists in DB and has Puck layout, render it
  const pageLayout = (page as any)?.layout;
  if (pageLayout && pageLayout.content && pageLayout.content.length > 0) {
    return (
      <main className="min-h-screen">
        <Navbar
          navLinks={navigation?.navLinks?.map((link: any) => ({
            label: String(link.label || ''),
            href: String(link.href || ''),
            children: link.children?.map((child: any) => ({
              label: String(child.label || ''),
              href: String(child.href || ''),
            })),
          }))}
          ctaPhone={String(navigation?.ctaPhone || settings?.phone || '081-300-1932')}
          ctaFacebook={String(navigation?.ctaFacebook || settings?.facebook || 'https://www.facebook.com/domekarnchang/')}
        />
        <PuckRenderer layout={pageLayout} />
        <Footer
          description={String(footerConfig?.description || '')}
          productLinks={footerConfig?.productLinks?.map((link: any) => ({
            label: String(link.label || ''),
            href: String(link.href || ''),
          }))}
          serviceLinks={footerConfig?.serviceLinks?.map((link: any) => ({
            label: String(link.label || ''),
          }))}
          copyright={String(footerConfig?.copyright || '')}
          madeIn={String(footerConfig?.madeIn || '')}
          phone={String(settings?.phone || '081-300-1932')}
          email={String(settings?.email || 'THZ@gmail.com')}
          address={String(settings?.address || '')}
          facebook={String(settings?.facebook || '')}
        />
      </main>
    )
  }

  // Page not found in DB or no layout
  notFound()
}
