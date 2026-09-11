import { Metadata } from "next";
import { notFound } from "next/navigation";
import { provinces, getProvinceBySlug } from "@/lib/provinces";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Phone, MapPin, Shield, Truck, Award, ArrowRight, MessageCircle } from "lucide-react";

// Generate static params for all provinces
export async function generateStaticParams() {
  return provinces.map((province) => ({
    slug: province.slug,
  }));
}

// Generate metadata for each province page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const province = getProvinceBySlug(slug);
  if (!province) return {};

  return {
    title: province.metaTitle,
    description: province.metaDescription,
    openGraph: {
      title: province.metaTitle,
      description: province.metaDescription,
      url: `https://www.thz.co.th/areas/${province.slug}`,
      siteName: "THaiCraftworkZ (THZ)",
      locale: "th_TH",
      type: "website",
    },
    alternates: {
      canonical: `https://www.thz.co.th/areas/${province.slug}`,
    },
    keywords: [
      `อุปกรณ์สนามเด็กเล่น ${province.name}`,
      `สนามเด็กเล่น ${province.name}`,
      `จำหน่ายอุปกรณ์สนามเด็กเล่น ${province.name}`,
      `ติดตั้งสนามเด็กเล่น ${province.name}`,
      `สไลเดอร์ ${province.name}`,
      `ชิงช้า ${province.name}`,
      `ม้านั่งโรงเรียน ${province.name}`,
    ],
  };
}

export default async function ProvincePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const province = getProvinceBySlug(slug);

  if (!province) {
    notFound();
  }

  // Schema.org for this province page
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `หจก.โดมการช่าง THZ - อุปกรณ์สนามเด็กเล่น ${province.name}`,
    description: province.metaDescription,
    url: `https://www.thz.co.th/areas/${province.slug}`,
    telephone: "081-300-1932",
    email: "THZ@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "44 หมู่ 1 ถนนเทวบุรี",
      addressLocality: "ต.โพธิ์เสด็จ อ.เมือง",
      addressRegion: `จ.นครศรีธรรมราช`,
      postalCode: "80000",
      addressCountry: "TH",
    },
    areaServed: {
      "@type": "State",
      name: province.name,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.4328,
      longitude: 99.9464,
    },
    image: "/images/products/726606443_1405968788229183_6337553449482275185_n.jpg",
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/domekarnchang",
      "https://line.me/ti/p/@THZ",
    ],
  };

  const products = [
    {
      title: "สนามเด็กเล่นพลาสติกกันแดด",
      description: "สนามเด็กเล่นรวม โครงเหล็กชุบสังกะสี + พลาสติก LLDPE กันแดดกันฝน",
      image: "/images/products/726606443_1405968788229183_6337553449482275185_n.jpg",
    },
    {
      title: "สไลเดอร์พลาสติก",
      description: "สไลเดอร์พลาสติก LLDPE คุณภาพสูง พร้อมบันไดปีน ปลอดภัยสำหรับเด็ก",
      image: "/images/products/124374999_2742818269293265_2851804580300417570_n.jpg",
    },
    {
      title: "ชิงช้าสนาม",
      description: "ชิงช้าสนามโครงเหล็ก แข็งแรง ทนทาน เหมาะสำหรับโรงเรียน หมู่บ้าน",
      image: "/images/products/472772789_3852975844944163_5782975775520749990_n.jpg",
    },
    {
      title: "ม้านั่งโรงเรียน",
      description: "ม้านั่งสนาม โครงเหล็กแข็งแรง ทนทาน ขนาดมาตรฐาน เหมาะสำหรับโรงเรียน",
      image: "/images/products/650721761_1321150026711060_532668979833544120_n.jpg",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block thai-text bg-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
              บริการทั่วภาคใต้
            </span>
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              อุปกรณ์สนามเด็กเล่น {province.name}
            </h1>
            <p className="thai-text text-lg text-white/80 max-w-2xl mx-auto mb-4">
              {province.description}
            </p>
            <p className="thai-text text-sm text-white/60">
              จัดส่งฟรี บริการติดตั้งฟรี รับประกัน 5 ปี
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="font-montserrat text-2xl md:text-3xl font-extrabold text-text-dark mb-6">
                อุปกรณ์สนามเด็กเล่นคุณภาพ ในจังหวัด{province.name}
              </h2>
              <div className="thai-text text-gray-600 space-y-4 leading-relaxed mb-8">
                <p>{province.content}</p>
                <p>
                  อุปกรณ์สนามเด็กเล่นของเราผลิตจากวัสดุคุณภาพสูง
                  โครงเหล็กชุบสังกะสี + พลาสติก LLDPE ได้มาตรฐาน มอก.3000
                  ปลอดภัยสำหรับเด็ก ทนทานแดดทนฝน ใช้งานได้ยาวนาน 5-10 ปี
                </p>
                <p>
                  เราพร้อมให้บริการจัดส่งและติดตั้งอุปกรณ์สนามเด็กเล่นทุกอำเภอในจังหวัด{province.name}
                  {province.nearbyAreas.length > 0 && (
                    <> รวมถึง {province.nearbyAreas.join(" ")}</>
                  )}
                </p>
              </div>

              {/* Products in this province */}
              <h3 className="font-montserrat text-xl font-bold text-text-dark mb-6">
                สินค้าแนะนำสำหรับจังหวัด{province.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {products.map((product, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 card-hover">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={`${product.image} ${province.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-montserrat font-bold text-text-dark mb-2">
                        {product.title}
                      </h4>
                      <p className="thai-text text-sm text-gray-500">
                        {product.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 mb-8 sticky top-24">
                <h3 className="font-montserrat font-bold text-text-dark text-lg mb-4">
                  ติดต่อสั่งซื้อ
                </h3>
                <p className="thai-text text-sm text-gray-500 mb-6">
                  สนใจอุปกรณ์สนามเด็กเล่นในจังหวัด{province.name} ติดต่อเราได้เลย
                </p>
                <div className="space-y-4 mb-6">
                  <a
                    href="tel:0813001932"
                    className="flex items-center gap-3 btn-primary text-sm w-full justify-center"
                  >
                    <Phone size={18} />
                    โทร 081-300-1932
                  </a>
                  <a
                    href="https://line.me/ti/p/@THZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#06C755] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#05b34a] transition-all duration-300 w-full justify-center"
                  >
                    <MessageCircle size={18} />
                    แชท LINE
                  </a>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Shield, text: "ได้มาตรฐาน มอก.3000", color: "text-primary" },
                    { icon: Truck, text: "จัดส่งฟรีทั่วจังหวัด", color: "text-secondary" },
                    { icon: Award, text: "รับประกัน 5 ปี", color: "text-accent-dark" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <item.icon size={18} className={item.color} />
                      <span className="thai-text text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby areas */}
              {province.nearbyAreas.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                  <h3 className="font-montserrat font-bold text-text-dark mb-4">
                    พื้นที่ให้บริการใกล้เคียง
                  </h3>
                  <ul className="space-y-2">
                    {province.nearbyAreas.map((area, index) => (
                      <li key={index} className="thai-text text-sm text-gray-600 flex items-center gap-2">
                        <MapPin size={14} className="text-secondary" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* All provinces */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-montserrat font-bold text-text-dark mb-4">
                  จังหวัดอื่นๆ ที่ให้บริการ
                </h3>
                <ul className="space-y-2">
                  {provinces
                    .filter((p) => p.slug !== province.slug)
                    .slice(0, 6)
                    .map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/areas/${p.slug}`}
                          className="thai-text text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                          อุปกรณ์สนามเด็กเล่น {p.name}
                          <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-2xl md:text-3xl font-extrabold text-white mb-4">
            พร้อมสร้างสนามเด็กเล่นในจังหวัด{province.name}?
          </h2>
          <p className="thai-text text-white/80 mb-8">
            ติดต่อเราวันนี้เพื่อรับใบเสนอราคาฟรี ออกแบบและติดตั้งอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0813001932"
              className="btn-accent inline-flex items-center gap-2"
            >
              <Phone size={18} />
              โทรเลย 081-300-1932
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              ติดต่อเรา
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Footer />
    </main>
  );
}
