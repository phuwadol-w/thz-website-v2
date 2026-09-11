import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import HomepageSections from "@/components/HomepageSections";
import { getSettings, getHomepage, getNavigation, getFooterConfig } from "@/lib/fetchGlobals";

// ═══════════════════════════════════════════════════════
// Homepage — Server Component
// Fetches data from Payload CMS globals, passes to client components
// ═══════════════════════════════════════════════════════

export default async function HomePage() {
  // Fetch all CMS data in parallel
  const [settings, homepage, navigation, footerConfig] = await Promise.all([
    getSettings(),
    getHomepage(),
    getNavigation(),
    getFooterConfig(),
  ]);

  return (
    <main className="min-h-screen">
      {/* Navbar — receives navLinks + contact from CMS */}
      <Navbar
        navLinks={navigation?.navLinks?.map((link: any) => ({
          label: link.label,
          href: link.href,
          children: link.children?.map((child: any) => ({
            label: child.label,
            href: child.href,
          })),
        }))}
        ctaPhone={navigation?.ctaPhone || settings?.phone}
        ctaFacebook={navigation?.ctaFacebook || settings?.facebook}
      />

      {/* Hero — receives hero data from CMS */}
      <Hero
        badge={homepage?.heroBadge}
        headline1={homepage?.heroHeadline1}
        headline2={homepage?.heroHeadline2}
        headline3={homepage?.heroHeadline3}
        standard={homepage?.heroStandard}
        subtext={homepage?.heroSubtext}
        imageUrl={homepage?.heroImage?.url}
        ctaText={homepage?.heroCtaText}
        ctaLink={homepage?.heroCtaLink}
      />

      {/* All animated sections — Trust Bar, Brands, Products, Gallery, Why, Testimonials, CTA */}
      <HomepageSections homepage={homepage} />

      {/* Footer — receives footer data from CMS */}
      <Footer
        description={footerConfig?.description}
        productLinks={footerConfig?.productLinks?.map((link: any) => ({
          label: link.label,
          href: link.href,
        }))}
        serviceLinks={footerConfig?.serviceLinks?.map((link: any) => ({
          label: link.label,
        }))}
        copyright={footerConfig?.copyright}
        madeIn={footerConfig?.madeIn}
        phone={settings?.phone}
        email={settings?.email}
        address={settings?.address}
        facebook={settings?.facebook}
      />
    </main>
  );
}
