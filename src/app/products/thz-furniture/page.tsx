import type { Metadata } from "next";
import Link from "next/link";
import ProductSchema from "@/components/ProductSchema";

export const metadata: Metadata = {
  title: "THZ Furniture - เฟอร์นิเจอร์ลอฟคุณภาพ นครศรีธรรมราช",
  description:
    "ผู้ผลิตและจำหน่ายเฟอร์นิเจอร์ลอฟคุณภาพ โต๊ะ เก้าอี้ ชั้นวาง แต่งร้านคาเฟ่ ร้านอาหาร โรงแรม จัดส่งทั่วประเทศ ☎️ 081-300-1932",
  keywords: [
    "เฟอร์นิเจอร์ลอฟ",
    "เฟอร์นิเจอร์เหล็ก",
    "เฟอร์นิเจอร์ไม้",
    "โต๊ะกาแฟ",
    "เก้าอี้ร้านกาแฟ",
    "THZ Furniture",
    "เฟอร์นิเจอร์ลอฟ นครศรีธรรมราช",
    "เฟอร์นิเจอร์เหล็ก นครศรีธรรมราช",
    "เฟอร์นิเจอร์ไม้ นครศรีธรรมราช",
    "โต๊ะกาแฟ นครศรีธรรมราช",
    "เก้าอี้ร้านกาแฟ นครศรีธรรมราช",
    "ชั้นวางของ นครศรีธรรมราช",
    "โต๊ะทำงาน นครศรีธรรมราช",
    "เก้าอี้บาร์ นครศรีธรรมราช",
    "เฟอร์นิเจอร์ลอฟราคาถูก",
    "เฟอร์นิเจอร์ลอฟคุณภาพ",
    "เฟอร์นิเจอร์ลอฟมาตรฐาน",
    "เฟอร์นิเจอร์ลอฟปลอดภัย",
    "เฟอร์นิเจอร์ลอฟรับประกัน",
    "เฟอร์นิเจอร์ลอฟจัดส่งฟรี",
    "เฟอร์นิเจอร์ลอฟติดตั้งฟรี",
    "เฟอร์นิเจอร์ลอฟ ภาคใต้",
    "เฟอร์นิเจอร์เหล็ก ภาคใต้",
    "โต๊ะกาแฟ ภาคใต้",
    "เก้าอี้ร้านกาแฟ ภาคใต้",
    "เฟอร์นิเจอร์ลอฟ สุราษฎร์ธานี",
    "เฟอร์นิเจอร์ลอฟ สงขลา",
    "เฟอร์นิเจอร์ลอฟ ภูเก็ต",
    "เฟอร์นิเจอร์ลอฟ กระบี่",
    "เฟอร์นิเจอร์ลอฟ ชุมพร",
    "เฟอร์นิเจอร์ลอฟ ระนอง",
    "เฟอร์นิเจอร์ลอฟ พังงา",
    "เฟอร์นิเจอร์ลอฟ ตรัง",
    "เฟอร์นิเจอร์ลอฟ สตูล",
    "เฟอร์นิเจอร์ลอฟ ปัตตานี",
    "เฟอร์นิเจอร์ลอฟ ยะลา",
    "เฟอร์นิเจอร์ลอฟ นราธิวาส",
    "ผู้ผลิตเฟอร์นิเจอร์ลอฟ",
    "โรงงานเฟอร์นิเจอร์ลอฟ",
    "รับทำเฟอร์นิเจอร์ลอฟ",
    "ออกแบบเฟอร์นิเจอร์ลอฟ",
    "ขายเฟอร์นิเจอร์ลอฟ",
    "ผลิตเฟอร์นิเจอร์ลอฟ",
    "เฟอร์นิเจอร์ร้านคาเฟ่ นครศรีธรรมราช",
    "เฟอร์นิเจอร์ร้านอาหาร นครศรีธรรมราช",
    "เฟอร์นิเจอร์โรงแรม นครศรีธรรมราช",
    "เฟอร์นิเจอร์รีสอร์ท นครศรีธรรมราช",
    "เฟอร์นิเจอร์ร้านกาแฟ นครศรีธรรมราช",
    "เฟอร์นิเจอร์คาเฟ่ นครศรีธรรมราช",
    "เฟอร์นิเจอร์บาร์ นครศรีธรรมราช",
    "เฟอร์นิเจอร์ผับ นครศรีธรรมราช",
    "เฟอร์นิเจอร์คอนโด นครศรีธรรมราช",
    "เฟอร์นิเจอร์หอพัก นครศรีธรรมราช",
    "เฟอร์นิเจอร์สำนักงาน นครศรีธรรมราช",
    "เฟอร์นิเจอร์ออฟฟิศ นครศรีธรรมราช",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/products/thz-furniture",
  },
};

const products = [
  {
    name: "โต๊ะกาแฟลอฟท์ รุ่น Premium",
    description: "โต๊ะกาแฟสไตล์ลอฟท์ โครงเหล็ก+ tops ไม้จริง สวยงาม แข็งแรง",
    features: ["โครงเหล็กหนา", "tops ไม้จริง", "ทนทาน สวยงาม"],
    price: "฿3,500",
  },
  {
    name: "เก้าอี้บาร์ลอฟท์",
    description: "เก้าอี้บาร์สไตล์ลอฟท์ โครงเหล็ก นั่งสบาย ทนทาน",
    features: ["โครงเหล็กแข็งแรง", "นั่งสบาย", "ทนทาน"],
    price: "฿1,200",
  },
  {
    name: "ชั้นวางของลอฟท์",
    description: "ชั้นวางของสไตล์ลอฟท์ โครงเหล็ก+ไม้ จัดวางสวยงาม",
    features: ["โครงเหล็กแข็งแรง", "tops ไม้จริง", "จัดวางสวยงาม"],
    price: "฿2,800",
  },
  {
    name: "โต๊ะทำงานลอฟท์",
    description: "โต๊ะทำงานสไตล์ลอฟท์ ขนาดใหญ่ ทำงานสะดวก",
    features: ["ขนาดใหญ่ 120x60 ซม.", "โครงเหล็กแข็งแรง", "tops ไม้จริง"],
    price: "฿4,200",
  },
];

export default function THZFurniturePage() {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1A1A2E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/products" className="text-gray-300 hover:text-white">
              ← กลับไปหน้าสินค้า
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">THZ Furniture</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            เฟอร์นิเจอร์ลอฟคุณภาพ โต๊ะ เก้าอี้ ชั้นวาง
            แต่งร้านคาเฟ่ ร้านอาหาร โรงแรม จัดส่งทั่วประเทศ
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          สินค้า THZ Furniture
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
                  <span className="text-[#1A1A2E] font-bold text-lg">
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
            ทำไมต้องเลือก THZ Furniture?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1A1A2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-2">ดีไซน์สวยงาม</h3>
              <p className="text-gray-600">
                เฟอร์นิเจอร์ลอฟดีไซน์สวยงาม ทันสมัย เหมาะกับทุกสถานที่
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1A1A2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-2">สั่งทำพิเศษได้</h3>
              <p className="text-gray-600">
                รับสั่งทำเฟอร์นิเจอร์ลอฟตามแบบ ตามขนาด ตามงบประมาณ
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1A1A2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚚</span>
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
      <section className="bg-[#006D6F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            สนใจเฟอร์นิเจอร์ลอฟ THZ Furniture?
          </h2>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
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
    <THZFurnitureSchema />
    </>
  );
}

function THZFurnitureSchema() {
  return (
    <>
      <ProductSchema
        name="โต๊ะกาแฟลอฟท์ รุ่น Premium"
        description="โต๊ะกาแฟสไตล์ลอฟท์ โครงเหล็ก+ tops ไม้จริง สวยงาม แข็งแรง ทนทาน"
        price="4500"
        url="https://thz-website-v2.vercel.app/products/thz-furniture"
      />
      <ProductSchema
        name="เก้าอี้บาร์ลอฟท์ รุ่น Classic"
        description="เก้าอี้บาร์สไตล์ลอฟท์ โครงเหล็กชุบดำ นั่งสบาย แข็งแรง ทนทาน"
        price="2800"
        url="https://thz-website-v2.vercel.app/products/thz-furniture"
      />
      <ProductSchema
        name="ชั้นวางของอเนกประสงค์ รุ่น Loft"
        description="ชั้นวางของสไตล์ลอฟท์ โครงเหล็ก+ไม้ 5 ชั้น แข็งแรง สวยงาม จุของได้เยอะ"
        price="3900"
        url="https://thz-website-v2.vercel.app/products/thz-furniture"
      />
    </>
  )
}
