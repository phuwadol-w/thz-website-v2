import type { Metadata } from "next";
import { Montserrat, Inter, Kanit } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "อุปกรณ์สนามเด็กเล่น คุณภาพมาตรฐาน | หจก.โดมการช่าง THZ",
    template: "%s | THaiCraftworkZ (THZ)",
  },
  description:
    "ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นคุณภาพ โครงเหล็กชุบสังกะสี + พลาสติก LLDPE มาตรฐาน มอก.3000 จัดส่งทั่วประเทศ บริการติดตั้งฟรี ☎️ 081-300-1932",
  keywords: [
    "อุปกรณ์สนามเด็กเล่น",
    "สนามเด็กเล่น",
    "สไลเดอร์พลาสติก",
    "ชิงช้าสนาม",
    "สนามเด็กเล่นพลาสติกกันแดด",
    "ม้านั่งโรงเรียน",
    "เฟอร์นิเจอร์ Loft",
    "THZ",
    "THaiCraftworkZ",
    "โดมการช่าง",
    "นครศรีธรรมราช",
    "มอก.3000",
    "อุปกรณ์สนามเด็กเล่น ภาคใต้",
    "สนามเด็กเล่น นครศรีธรรมราช",
    "สนามเด็กเล่น สุราษฎร์ธานี",
    "สนามเด็กเล่น สงขลา",
    "สนามเด็กเล่น ภูเก็ต",
  ],
  authors: [{ name: "หจก.โดมการช่าง" }],
  creator: "THaiCraftworkZ (THZ)",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://www.thz.co.th",
    siteName: "THaiCraftworkZ (THZ) - อุปกรณ์สนามเด็กเล่น",
    title: "อุปกรณ์สนามเด็กเล่น คุณภาพมาตรฐาน | หจก.โดมการช่าง THZ",
    description:
      "ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นคุณภาพ โครงเหล็กชุบสังกะสี + พลาสติก LLDPE มาตรฐาน มอก.3000 จัดส่งทั่วประเทศ บริการติดตั้งฟรี",
    images: [
      {
        url: "/images/products/726606443_1405968788229183_6337553449482275185_n.jpg",
        width: 1200,
        height: 630,
        alt: "อุปกรณ์สนามเด็กเล่น THZ - คุณภาพมาตรฐาน มอก.3000",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "อุปกรณ์สนามเด็กเล่น คุณภาพมาตรฐาน | THZ",
    description:
      "ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นคุณภาพ มอก.3000 จัดส่งทั่วประเทศ บริการติดตั้งฟรี",
    images: ["/images/products/726606443_1405968788229183_6337553449482275185_n.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.thz.co.th",
  },
  verification: {},
  other: {
    "schema-org": "LocalBusiness",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${montserrat.variable} ${inter.variable} ${kanit.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2196F3" />
        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "หจก.โดมการช่าง THaiCraftworkZ (THZ)",
              description:
                "ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นคุณภาพ โครงเหล็กชุบสังกะสี + พลาสติก LLDPE มาตรฐาน มอก.3000",
              url: "https://www.thz.co.th",
              telephone: "081-300-1932",
              email: "THZ@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "44 หมู่ 1 ถนนเทวบุรี",
                addressLocality: "ต.โพธิ์เสด็จ อ.เมือง",
                addressRegion: "จ.นครศรีธรรมราช",
                postalCode: "80000",
                addressCountry: "TH",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 8.4328,
                longitude: 99.9464,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "12:00",
                },
              ],
              image: "/images/products/726606443_1405968788229183_6337553449482275185_n.jpg",
              priceRange: "$$",
              sameAs: [
                "https://www.facebook.com/domekarnchang",
                "https://line.me/ti/p/@THZ",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "อุปกรณ์สนามเด็กเล่น THZ",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "THZ Play - อุปกรณ์สนามเด็กเล่น",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Product",
                          name: "สนามเด็กเล่นพลาสติกกันแดด",
                          description: "สนามเด็กเล่นรวม โครงเหล็กชุบสังกะสี + พลาสติก LLDPE กันแดดกันฝน",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Product",
                          name: "สไลเดอร์พลาสติก",
                          description: "สไลเดอร์พลาสติก LLDPE คุณภาพสูง พร้อมบันไดปีน",
                        },
                      },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "THZ Bench - ม้านั่งโรงเรียน",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Product",
                          name: "ม้านั่งโรงเรียน",
                          description: "ม้านั่งสนาม โครงเหล็กแข็งแรง ทนทาน ขนาดมาตรฐาน",
                        },
                      },
                    ],
                  },
                ],
              },
            }),
          }}
        />
        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "อุปกรณ์สนามเด็กเล่น THZ ได้มาตรฐานอะไร?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "อุปกรณ์สนามเด็กเล่น THZ ได้มาตรฐาน มอก.3000 ผลิตจากวัสดุคุณภาพสูง โครงเหล็กชุบสังกะสี + พลาสติก LLDPE ปลอดภัยสำหรับเด็ก",
                  },
                },
                {
                  "@type": "Question",
                  name: "บริการจัดส่งอุปกรณ์สนามเด็กเล่นที่ไหนบ้าง?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "เราจัดส่งอุปกรณ์สนามเด็กเล่นทั่วประเทศไทย พร้อมบริการติดตั้งฟรี โดยทีมช่างผู้เชี่ยวชาญ",
                  },
                },
                {
                  "@type": "Question",
                  name: "รับประกันสินค้านานแค่ไหน?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "เรารับประกันอุปกรณ์สนามเด็กเล่นนาน 5 ปี พร้อมบริการซ่อมบำรุงและอะไหล่สำรองตลอดอายุการใช้งาน",
                  },
                },
                {
                  "@type": "Question",
                  name: "ติดต่อสั่งซื้ออย่างไร?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "ติดต่อสั่งซื้อได้ที่เบอร์ 081-300-1932 หรือ LINE @THZ หรือกรอกแบบฟอร์มในเว็บไซต์ เราจะติดต่อกลับภายใน 24 ชม.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
