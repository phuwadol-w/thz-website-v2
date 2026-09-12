import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PublicBuilderWrapper from "@/components/page-builder/PublicBuilderWrapper";
import PageRenderer from "@/components/PageRenderer";
import { getSettings, getHomepage, getNavigation, getFooterConfig } from "@/lib/fetchGlobals";
import { getPageBySlug } from "@/lib/puck/fetchPages";

export default async function HomePage() {
  const [settings, homepage, navigation, footerConfig, puckPage] = await Promise.all([
    getSettings(),
    getHomepage(),
    getNavigation(),
    getFooterConfig(),
    getPageBySlug("/"),
  ]);

  const layout = (puckPage as any)?.layout || null;

  const fallback = (
    <main className="min-h-screen">
      <Navbar
        navLinks={navigation?.navLinks?.map((link: any) => ({
          label: String(link.label || ""),
          href: String(link.href || ""),
          children: link.children?.map((child: any) => ({
            label: String(child.label || ""),
            href: String(child.href || ""),
          })),
        }))}
        ctaPhone={String(navigation?.ctaPhone || settings?.phone || "081-300-1932")}
        ctaFacebook={String(navigation?.ctaFacebook || settings?.facebook || "https://www.facebook.com/domekarnchang/")}
      />
      <Hero
        badge={String(homepage?.heroBadge || "")}
        headline1={String(homepage?.heroHeadline1 || "สนามเด็กเล่น")}
        headline2={String(homepage?.heroHeadline2 || "คุณภาพ")}
        headline3={String(homepage?.heroHeadline3 || "มาตรฐาน")}
        standard={String(homepage?.heroStandard || "มอก.3000")}
        subtext={String(homepage?.heroSubtext || "")}
        imageUrl={homepage?.heroImage && typeof homepage.heroImage === "object" && "url" in homepage.heroImage ? String(homepage.heroImage.url || "") : undefined}
        ctaText={String(homepage?.heroCtaText || "ขอใบเสนอราคาฟรี")}
        ctaLink={String(homepage?.heroCtaLink || "/contact")}
      />
      <PublicBuilderWrapper homepage={homepage as any} />
      <Footer
        description={String(footerConfig?.description || "")}
        productLinks={footerConfig?.productLinks?.map((link: any) => ({ label: String(link.label || ""), href: String(link.href || "") }))}
        serviceLinks={footerConfig?.serviceLinks?.map((link: any) => ({ label: String(link.label || "") }))}
        copyright={String(footerConfig?.copyright || "")}
        madeIn={String(footerConfig?.madeIn || "")}
        phone={String(settings?.phone || "081-300-1932")}
        email={String(settings?.email || "THZ@gmail.com")}
        address={String(settings?.address || "")}
        facebook={String(settings?.facebook || "")}
      />
    </main>
  );

  return <PageRenderer slug="/" layout={layout} fallback={fallback} />;
}
