import type { Metadata } from "next";
import Link from "next/link";
import BlogPostingSchema from "@/components/BlogPostingSchema";
import { getRelatedPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "วิธีเลือกอุปกรณ์สนามเด็กเล่นให้เหมาะกับพื้นที่",
  description:
    "คู่มือเลือกอุปกรณ์สนามเด็กเล่นที่เหมาะสม ตั้งแต่วัสดุ ขนาด ความปลอดภัย และงบประมาณ จากผู้เชี่ยวชาญ THZ",
  keywords: [
    "วิธีเลือกอุปกรณ์สนามเด็กเล่น",
    "เลือกสนามเด็กเล่น",
    "อุปกรณ์สนามเด็กเล่น ราคา",
    "สนามเด็กเล่น ปลอดภัย",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/how-to-choose-playground-equipment",
  },
};

const slug = "how-to-choose-playground-equipment";
const relatedPosts = getRelatedPosts(slug);

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#006D6F] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog" className="text-teal-200 hover:text-white">
              ← กลับไปหน้าบทความ
            </Link>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
              สนามเด็กเล่น
            </span>
            <span className="text-teal-200 text-sm">5 นาที</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            วิธีเลือกอุปกรณ์สนามเด็กเล่นให้เหมาะกับพื้นที่
          </h1>
          <p className="text-xl text-teal-100">
            คู่มือเลือกอุปกรณ์สนามเด็กเล่นที่เหมาะสม ตั้งแต่วัสดุ ขนาด
            ความปลอดภัย และงบประมาณ
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            1. กำหนดงบประมาณ
          </h2>
          <p className="text-gray-700 mb-4">
            ก่อนเลือกอุปกรณ์สนามเด็กเล่น สิ่งแรกที่ต้องทำคือการกำหนดงบประมาณ
            ว่ามีงบประมาณเท่าไหร่ เพื่อจะได้เลือกอุปกรณ์ที่เหมาะสมกับงบประมาณที่มี
          </p>
          <p className="text-gray-700 mb-8">
            งบประมาณในการซื้ออุปกรณ์สนามเด็กเล่นจะขึ้นอยู่กับปัจจัยหลายอย่าง เช่น
            ขนาดของพื้นที่ ประเภทของอุปกรณ์ วัสดุที่ใช้ และแบรนด์ของผู้ผลิต
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            2. วัดขนาดพื้นที่
          </h2>
          <p className="text-gray-700 mb-4">
            การวัดขนาดพื้นที่เป็นสิ่งสำคัญมาก เพราะอุปกรณ์สนามเด็กเล่นแต่ละชิ้นมีขนาดที่แตกต่างกัน
            ต้องเลือกอุปกรณ์ที่เหมาะกับขนาดพื้นที่ที่มี
          </p>
          <p className="text-gray-700 mb-8">
            ควรเว้นพื้นที่ว่างรอบอุปกรณ์อย่างน้อย 1.5-2 เมตร
            เพื่อความปลอดภัยของเด็กๆ ในการเล่น
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            3. เลือกวัสดุที่เหมาะสม
          </h2>
          <p className="text-gray-700 mb-4">
            อุปกรณ์สนามเด็กเล่นมีวัสดุหลักๆ 3 ประเภท:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>พลาสติก LLDPE</strong> - ปลอดภัย ทนทาน ราคาคุ้มค่า เหมาะสำหรับเด็กเล็ก</li>
            <li><strong>เหล็กชุบสังกะสี</strong> - แข็งแรง ทนทาน เหมาะสำหรับสนามกลางแจ้ง</li>
            <li><strong>ไม้</strong> - สวยงาม เป็นธรรมชาติ แต่ต้องดูแลรักษามากกว่า</li>
          </ul>
          <p className="text-gray-700 mb-8">
            สำหรับสภาพอากาศในประเทศไทย แนะนำให้เลือกวัสดุที่ทนแดดทนฝน
            เช่น พลาสติก LLDPE หรือเหล็กชุบสังกะสี
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            4. คำนึงถึงความปลอดภัย
          </h2>
          <p className="text-gray-700 mb-4">
            ความปลอดภัยเป็นสิ่งสำคัญที่สุดในการเลือกอุปกรณ์สนามเด็กเล่น
            ควรเลือกอุปกรณ์ที่ได้มาตรฐานความปลอดภัย เช่น มอก.3000 หรือ EN71
          </p>
          <p className="text-gray-700 mb-8">
            ตรวจสอบว่าอุปกรณ์มีความคม รอยบาด หรือส่วนที่อาจทำให้เด็กได้รับบาดเจ็บหรือไม่
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            5. เลือกประเภทของอุปกรณ์
          </h2>
          <p className="text-gray-700 mb-4">
            อุปกรณ์สนามเด็กเล่นมีหลายประเภท ควรเลือกให้เหมาะกับกลุ่มเป้าหมาย:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>เด็กเล็ก (1-5 ปี)</strong> - สไลเดอร์เล็ก ม้าโยก บ่อบอล</li>
            <li><strong>เด็กโต (6-12 ปี)</strong> - ชุดเครื่องเล่นรวม บันไดปีน เชือกปีน</li>
            <li><strong>ทุกวัย</strong> - ม้านั่ง ชิงช้า ม้าหมุน</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            6. เปรียบเทียบราคาและคุณภาพ
          </h2>
          <p className="text-gray-700 mb-4">
            อย่าเลือกเฉพาะราคาถูกที่สุด ควรเปรียบเทียบราคาและคุณภาพร่วมด้วย
            อุปกรณ์ที่มีราคาถูกมากอาจมีคุณภาพต่ำ ไม่ปลอดภัย หรือไม่ทนทาน
          </p>
          <p className="text-gray-700 mb-8">
            ควรเลือกอุปกรณ์ที่มีราคาคุ้มค่ากับคุณภาพ มีการรับประกันสินค้า
            และมีบริการหลังการขายที่ดี
          </p>

          {/* Related Posts */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">บทความที่เกี่ยวข้อง</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-gray-50 rounded-lg p-4 hover:bg-[#006D6F]/5 transition-colors border border-gray-100"
                >
                  <span className="text-xs text-[#006D6F] font-medium">{post.category}</span>
                  <h4 className="text-sm font-bold text-gray-900 mt-1 line-clamp-2">{post.title}</h4>
                  <span className="text-xs text-gray-500 mt-2 block">{post.readTime}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#006D6F] text-white rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-bold mb-4">
              สนใจอุปกรณ์สนามเด็กเล่นคุณภาพ?
            </h3>
            <p className="text-teal-100 mb-6">
              THZ ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน มอก.3000
              จัดส่งทั่วประเทศ บริการติดตั้งฟรี
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products/thz-play"
                className="bg-[#D4AF37] text-[#1A1A2E] px-6 py-3 rounded-lg font-bold hover:bg-[#D4AF37]/90 transition-colors text-center"
              >
                ดูสินค้า THZ Play
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-[#1A1A2E] transition-colors text-center"
              >
                ติดต่อเรา
              </Link>
            </div>
          </div>
        </div>
      </article>

      <BlogPostingSchema
        title="วิธีเลือกอุปกรณ์สนามเด็กเล่นให้เหมาะกับพื้นที่"
        description="คู่มือเลือกอุปกรณ์สนามเด็กเล่นที่เหมาะสม ตั้งแต่วัสดุ ขนาด ความปลอดภัย และงบประมาณ จากผู้เชี่ยวชาญ THZ"
        datePublished="2026-09-15"
        url="https://thz-website-v2.vercel.app/blog/how-to-choose-playground-equipment"
      />
    </div>
  );
}
