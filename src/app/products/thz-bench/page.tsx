import type { Metadata } from "next";
import Link from "next/link";
import ProductSchema from "@/components/ProductSchema";

export const metadata: Metadata = {
  title: "THZ Bench - ม้านั่งโรงเรียนคุณภาพมาตรฐาน",
  description:
    "ผู้ผลิตและจำหน่ายม้านั่งโรงเรียนคุณภาพ โครงเหล็กแข็งแรง ทนทาน ขนาดมาตรฐาน จัดส่งทั่วประเทศ บริการติดตั้งฟรี",
  keywords: [
    "ม้านั่งโรงเรียน",
    "ม้านั่งนักเรียน",
    "ม้านั่งสนาม",
    "ม้านั่งพลาสติก",
    "THZ Bench",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/products/thz-bench",
  },
};

const products = [
  {
    name: "ม้านั่งโรงเรียน รุ่นมาตรฐาน",
    description: "ม้านั่งโรงเรียนโครงเหล็กแข็งแรง ขนาดมาตรฐาน นั่งสบาย",
    features: ["โครงเหล็กหนา 2 มม.", "ทนทาน แข็งแรง", "ขนาดมาตรฐาน 120 ซม."],
    price: "฿1,200",
  },
  {
    name: "ม้านั่งสนาม รุ่น Premium",
    description: "ม้านั่งสนามแข็งแรง ทนแดดทนฝน สวยงาม",
    features: ["โครงเหล็กชุบสังกะสี", "ทนแดดทนฝน", "สีไม่ซีดจาง"],
    price: "฿1,800",
  },
  {
    name: "ม้านั่งพลาสติก รุ่น เด็ก",
    description: "ม้านั่งพลาสติกสำหรับเด็กเล็ก ปลอดภัย น้ำหนักเบา",
    features: ["พลาสติกคุณภาพสูง", "น้ำหนักเบา", "ปลอดภัยสำหรับเด็ก"],
    price: "฿350",
  },
  {
    name: "โต๊ะเรียน รุ่น นักเรียน",
    description: "โต๊ะเรียนโครงเหล็ก ขนาดมาตรฐาน แข็งแรง ทนทาน",
    features: ["โครงเหล็กแข็งแรง", "ขนาดมาตรฐาน 90x60 ซม.", "ปรับระดับได้"],
    price: "฿1,500",
  },
];

export default function THZBenchPage() {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#2D6A4F] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/products" className="text-green-200 hover:text-white">
              ← กลับไปหน้าสินค้า
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">THZ Bench</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            ม้านั่งโรงเรียนคุณภาพมาตรฐาน โครงเหล็กแข็งแรง ทนทาน
            ขนาดมาตรฐาน จัดส่งทั่วประเทศ บริการติดตั้งฟรี
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          สินค้า THZ Bench
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">รูปสินค้า</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>
                <ul className="space-y-1 mb-4">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-green-600 flex items-center gap-1"
                    >
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-[#2D6A4F] font-bold text-lg">
                    {product.price}
                  </span>
                  <Link
                    href="/contact"
                    className="bg-[#D4AF37] text-[#1A1A2E] px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#D4AF37]/90 transition-colors"
                  >
                    สั่งซื้อ
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ทำไมต้องเลือก THZ Bench?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D6A4F] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏫</span>
              </div>
              <h3 className="text-xl font-bold mb-2">ออกแบบสำหรับโรงเรียน</h3>
              <p className="text-gray-600">
                ม้านั่งออกแบบมาเฉพาะสำหรับโรงเรียน ขนาดมาตรฐาน นั่งสบาย
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D6A4F] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-bold mb-2">แข็งแรง ทนทาน</h3>
              <p className="text-gray-600">
                โครงเหล็กหนา ทนทาน ใช้งานได้ยาวนาน คุ้มค่าเงิน
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D6A4F] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-bold mb-2">จัดส่งทั่วประเทศ</h3>
              <p className="text-gray-600">
                พร้อมบริการจัดส่งและติดตั้งฟรี ทุกจังหวัดทั่วไทย
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A1A2E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            สนใจม้านั่งโรงเรียน THZ Bench?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            ติดต่อเราเพื่อรับใบเสนอราคาฟรี บริการจัดส่งและติดตั้งฟรีทั่วประเทศ
            รับประกันสินค้า 5 ปี
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-[#1A1A2E] px-8 py-3 rounded-lg font-bold hover:bg-[#D4AF37]/90 transition-colors"
            >
              ติดต่อเราเลย
            </Link>
            <a
              href="tel:081-300-1932"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#1A1A2E] transition-colors"
            >
              ☎️ 081-300-1932
            </a>
          </div>
        </div>
      </section>
    </div>
    <THZBenchSchema />
    </>
  );
}

function THZBenchSchema() {
  return (
    <>
      <ProductSchema
        name="ม้านั่งโรงเรียน รุ่นมาตรฐาน"
        description="ม้านั่งโรงเรียนโครงเหล็กแข็งแรง ขนาดมาตรฐาน นั่งสบาย โครงเหล็กหนา 2 มม. ทนทาน ขนาด 120 ซม."
        price="1200"
        url="https://thz-website-v2.vercel.app/products/thz-bench"
      />
      <ProductSchema
        name="ม้านั่งสนาม รุ่น Premium"
        description="ม้านั่งสนามโครงเหล็กชุบสังกะสี ทนแดดทนฝน ขนาด 150 ซม. นั่งได้ 3-4 คน"
        price="2500"
        url="https://thz-website-v2.vercel.app/products/thz-bench"
      />
      <ProductSchema
        name="ม้านั่งพลาสติก รุ่น Sport"
        description="ม้านั่งพลาสติก LLDPE น้ำหนักเบา สีสดใส ทนทาน ไม่แตกหักง่าย"
        price="890"
        url="https://thz-website-v2.vercel.app/products/thz-bench"
      />
    </>
  )
}
