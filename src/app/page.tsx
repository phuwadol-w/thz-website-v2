import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PublicBuilderWrapper from "@/components/page-builder/PublicBuilderWrapper";
import { getSettings, getHomepage, getNavigation, getFooterConfig } from "@/lib/fetchGlobals";

// ═══════════════════════════════════════════════════════
// Homepage — หน้าคนทั่วไป (ไม่มี editing UI)
// แก้ไขได้เฉพาะ /admin เท่านั้น
// ═══════════════════════════════════════════════════════

export default async function HomePage() {
  const [settings, homepage, navigation, footerConfig] = await Promise.all([
    getSettings(),
    getHomepage(),
    getNavigation(),
    getFooterConfig(),
  ]);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
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

      {/* Hero Section */}
      <Hero
        badge={String(homepage?.heroBadge || '')}
        headline1={String(homepage?.heroHeadline1 || 'สนามเด็กเล่น')}
        headline2={String(homepage?.heroHeadline2 || 'คุณภาพ')}
        headline3={String(homepage?.heroHeadline3 || 'มาตรฐาน')}
        standard={String(homepage?.heroStandard || 'มอก.3000')}
        subtext={String(homepage?.heroSubtext || '')}
        imageUrl={homepage?.heroImage && typeof homepage.heroImage === 'object' && 'url' in homepage.heroImage ? String(homepage.heroImage.url || '') : undefined}
        ctaText={String(homepage?.heroCtaText || 'ขอใบเสนอราคาฟรี')}
        ctaLink={String(homepage?.heroCtaLink || '/contact')}
      />

      {/* Homepage Sections (Stats, Brands, Products, Gallery, WhyChooseUs, Testimonials, CTA) */}
      <PublicBuilderWrapper homepage={homepage as any} />

      {/* Footer */}
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
  );
}
