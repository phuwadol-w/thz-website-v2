import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 เทคนิคตกแต่งร้านด้วยเฟอร์นิเจอร์ลอฟให้ดูโดดเด่น",
  description:
    "เทคนิคการเลือกและจัดวางเฟอร์นิเจอร์ลอฟสำหรับร้านคาเฟ่ ร้านอาหาร และโรงแรม ให้ดูโดดเด่น สวยงาม จากผู้เชี่ยวชาญ THZ",
  keywords: [
    "เฟอร์นิเจอร์ลอฟ",
    "ตกแต่งร้านคาเฟ่",
    "เฟอร์นิเจอร์ร้านอาหาร",
    "ออกแบบภายใน",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/loft-furniture-design-tips",
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[#1A1A2E] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog" className="text-gray-300 hover:text-white">
              ← กลับไปหน้าบทความ
            </Link>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
              เฟอร์นิเจอร์ลอฟ
            </span>
            <span className="text-gray-300 text-sm">6 นาที</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            10 เทคนิคตกแต่งร้านด้วยเฟอร์นิเจอร์ลอฟให้ดูโดดเด่น
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            1. เลือกโทนสีที่เข้ากัน
          </h2>
          <p className="text-gray-700 mb-8">
            เฟอร์นิเจอร์ลอฟมักจะมีสีน้ำตาลจากไม้และสีดำจากเหล็ก
            ควรเลือกโทนสีห้องที่เข้ากัน เช่น สีเทา สีขาว หรือสีน้ำตาลอ่อน
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            2. ผสมผสานวัสดุ
          </h2>
          <p className="text-gray-700 mb-8">
            ผสมผสานเฟอร์นิเจอร์เหล็กกับไม้ เพื่อสร้างความน่าสนใจ
            เช่น โต๊ะเหล็ก tops ไม้ หรือ เก้าอี้เหล็กเบาะผ้า
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            3. จัดวางให้โปร่ง
          </h2>
          <p className="text-gray-700 mb-8">
            เฟอร์นิเจอร์ลอฟมักจะมีขนาดใหญ่ ควรจัดวางให้โปร่ง
            ไม่อึดอัด เพื่อให้ลูกค้ารู้สึกสบาย
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            4. ใช้แสงไฟโทนอุ่น
          </h2>
          <p className="text-gray-700 mb-8">
            แสงไฟโทนอุ่นจะช่วยเสริมให้เฟอร์นิเจอร์ลอฟดูสวยงามยิ่งขึ้น
            ใช้หลอดไฟโทน Warm White 2700-3000K
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            5. เพิ่มต้นไม้
          </h2>
          <p className="text-gray-700 mb-8">
            ต้นไม้จะช่วยเพิ่มความสดชื่นให้กับร้าน
            เข้ากันได้ดีกับเฟอร์นิเจอร์ลอฟสไตล์ธรรมชาติ
          </p>

          <div className="bg-[#1A1A2E] text-white rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-bold mb-4">
              THZ Furniture - เฟอร์นิเจอร์ลอฟคุณภาพ
            </h3>
            <p className="text-gray-300 mb-6">
              เฟอร์นิเจอร์ลอฟคุภาพ โต๊ะ เก้าอี้ ชั้นวาง แต่งร้านคาเฟ่ ร้านอาหาร โรงแรม
              จัดส่งทั่วประเทศ
            </p>
            <Link
              href="/products/thz-furniture"
              className="bg-[#D4AF37] text-[#1A1A2E] px-6 py-3 rounded-lg font-bold hover:bg-[#D4AF37]/90 transition-colors inline-block"
            >
              ดูสินค้า THZ Furniture
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
