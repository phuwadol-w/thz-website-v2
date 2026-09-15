import type { Metadata } from "next";
import Link from "next/link";
import ProductSchema from "@/components/ProductSchema";

export const metadata: Metadata = {
  title: "THZ Play - อุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน นครศรีธรรมราช",
  description:
    "ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นคุณภาพ โครงเหล็กชุบสังกะสี + พลาสติก LLDPE มาตรฐาน มอก.3000 จัดส่งทั่วประเทศ บริการติดตั้งฟรี ☎️ 081-300-1932",
  keywords: [
    "อุปกรณ์สนามเด็กเล่น",
    "สนามเด็กเล่นพลาสติก",
    "สไลเดอร์พลาสติก",
    "ชิงช้าสนาม",
    "สนามเด็กเล่นกลางแจ้ง",
    "THZ Play",
    "สนามเด็กเล่น นครศรีธรรมราช",
    "สนามเด็กเล่น ภาคใต้",
    "สนามเด็กเล่นราคาถูก",
    "สนามเด็กเล่นคุณภาพ",
    "สนามเด็กเล่นมาตรฐาน",
    "สนามเด็กเล่นปลอดภัย",
    "สนามเด็กเล่นรับประกัน",
    "สนามเด็กเล่นจัดส่งฟรี",
    "สนามเด็กเล่นติดตั้งฟรี",
    "สนามเด็กเล่นเด็กอนุบาล",
    "สนามเด็กเล่นโรงเรียน",
    "สนามเด็กเล่นหมู่บ้าน",
    "สนามเด็กเล่นคอนโด",
    "สนามเด็กเล่นโรงแรม",
    "สนามเด็กเล่นรีสอร์ท",
    "สนามเด็กเล่นสวนสาธารณะ",
    "สนามเด็กเล่นเทศบาล",
    "สนามเด็กเล่น อบต.",
    "สนามเด็กเล่นมอก.3000",
    "สนามเด็กเล่นเหล็ก",
    "สนามเด็กเล่นพลาสติก LLDPE",
    "สไลเดอร์ นครศรีธรรมราช",
    "ชิงช้า นครศรีธรรมราช",
    "สนามเด็กเล่น สุราษฎร์ธานี",
    "สนามเด็กเล่น สงขลา",
    "สนามเด็กเล่น ภูเก็ต",
    "สนามเด็กเล่น กระบี่",
    "สนามเด็กเล่น ชุมพร",
    "สนามเด็กเล่น ระนอง",
    "สนามเด็กเล่น พังงา",
    "สนามเด็กเล่น ตรัง",
    "สนามเด็กเล่น สตูล",
    "สนามเด็กเล่น ปัตตานี",
    "สนามเด็กเล่น ยะลา",
    "สนามเด็กเล่น นราธิวาส",
    "ผู้ผลิตสนามเด็กเล่น",
    "โรงงานสนามเด็กเล่น",
    "รับทำสนามเด็กเล่น",
    "ออกแบบสนามเด็กเล่น",
    "ขายสนามเด็กเล่น",
    "ผลิตสนามเด็กเล่น",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/products/thz-play",
  },
};

const products = [
  {
    name: "สนามเด็กเล่นรวมรุ่น TOP",
    description: "โครงเหล็กชุบสังกะสี + พลาสติก LLDPE ปลอดภัย มีสไลเดอร์ บันไดปีน ม้าโยก",
    features: ["กันแดดกันฝน", "ได้มาตรฐาน มอก.3000", "รับประกัน 5 ปี"],
    price: "฿15,900",
  },
  {
    name: "สไลเดอร์พลาสติก LLDPE",
    description: "สไลเดอร์พลาสติกคุณภาพสูง ทนแดดทนฝน ปลอดภัยสำหรับเด็ก",
    features: ["พลาสติก LLDPE คุณภาพสูง", "ไม่แตกหักง่าย", "สีไม่ซีดจาง"],
    price: "฿3,900",
  },
  {
    name: "ชิงช้าสนาม 2 ที่นั่ง",
    description: "ชิงช้าสนามแข็งแรง ปลอดภัย พร้อมเข็มขัดนิรภัย",
    features: ["โครงเหล็กหนา", "เข็มขัดนิรภัย", "รับน้ำหนักได้ 50 กก."],
    price: "฿2,500",
  },
  {
    name: "ม้าโยกสปริง รุ่น Premium",
    description: "ม้าโยกสปริงลายสัตว์น่ารัก แข็งแรง ทนทาน",
    features: ["สปริงคุณภาพสูง", "ลายสัตว์น่ารัก", "ฐานกว้างมั่นคง"],
    price: "฿1,800",
  },
];

export default function THZPlayPage() {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#006D6F] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/products" className="text-teal-200 hover:text-white">
              ← กลับไปหน้าสินค้า
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">THZ Play</h1>
          <p className="text-xl text-teal-100 max-w-3xl">
            อุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน โครงเหล็กชุบสังกะสี +
            พลาสติก LLDPE ปลอดภัยสำหรับเด็ก จัดส่งทั่วประเทศ
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          สินค้า THZ Play
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
                  <span className="text-[#006D6F] font-bold text-lg">
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
            ทำไมต้องเลือก THZ Play?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#006D6F] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold mb-2">ผู้ผลิตโดยตรง</h3>
              <p className="text-gray-600">
                ผลิตเองทุกขั้นตอน ควบคุมคุณภาพได้เอง ราคาคุ้มค่า
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#006D6F] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-2">ได้มาตรฐาน มอก.3000</h3>
              <p className="text-gray-600">
                ผ่านการรับรองมาตรฐานความปลอดภัย ปลอดภัยสำหรับเด็ก
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#006D6F] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">จัดส่งทั่วประเทศ</h3>
              <p className="text-gray-600">
                พร้อมบริการติดตั้งฟรี โดยทีมช่างผู้เชี่ยวชาญ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A1A2E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            สนใจอุปกรณ์สนามเด็กเล่น THZ Play?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            ติดต่อเราเพื่อรับใบเสนอราคาฟรี บริการติดตั้งฟรีทั่วประเทศ
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
    <THZPlaySchema />
    </>
  );
}

function THZPlaySchema() {
  return (
    <>
      <ProductSchema
        name="สนามเด็กเล่นรวมรุ่น TOP"
        description="สนามเด็กเล่นรวม โครงเหล็กชุบสังกะสี + พลาสติก LLDPE ปลอดภัย มีสไลเดอร์ บันไดปีน ม้าโยก ได้มาตรฐาน มอก.3000"
        price="15900"
        url="https://thz-website-v2.vercel.app/products/thz-play"
      />
      <ProductSchema
        name="สไลเดอร์พลาสติก LLDPE"
        description="สไลเดอร์พลาสติกคุณภาพสูง ทนแดดทนฝน ปลอดภัยสำหรับเด็ก พลาสติก LLDPE คุณภาพสูง"
        price="3900"
        url="https://thz-website-v2.vercel.app/products/thz-play"
      />
      <ProductSchema
        name="ชิงช้าสนาม 2 ที่นั่ง"
        description="ชิงช้าสนามแข็งแรง ปลอดภัย พร้อมเข็มขัดนิรภัย โครงเหล็กหนา รับน้ำหนักได้ 50 กก."
        price="2500"
        url="https://thz-website-v2.vercel.app/products/thz-play"
      />
      <ProductSchema
        name="ม้าโยกสปริง รุ่น Premium"
        description="ม้าโยกสปริงลายสัตว์น่ารัก แข็งแรง ทนทาน สปริงคุณภาพสูง ฐานกว้างมั่นคง"
        price="1800"
        url="https://thz-website-v2.vercel.app/products/thz-play"
      />
    </>
  )
}
