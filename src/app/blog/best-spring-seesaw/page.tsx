import type { Metadata } from "next";
import Link from "next/link";
import BlogPostingSchema from "@/components/BlogPostingSchema";
import { getRelatedPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "ม้าโยกสปริง รุ่นไหนดี 2026 | THZ",
  description:
    "เปรียบเทียบม้าโยกสปริงสนามเด็กเล่น แนะนำรุ่นที่ดีที่สุด ปลอดภัย ทนทาน ราคาคุ้มค่า จาก THZ",
  keywords: [
    "ม้าโยกสปริง",
    "ม้าโยกสนามเด็กเล่น",
    "ม้าโยกรุ่นไหนดี",
    "ม้าโยกเด็กเล่น",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/best-spring-seesaw",
  },
};

const slug = "best-spring-seesaw";
const relatedPosts = getRelatedPosts(slug);

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[#006D6F] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog" className="text-teal-200 hover:text-white">
              ← กลับไปหน้าบทความ
            </Link>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
              อุปกรณ์สนามเด็กเล่น
            </span>
            <span className="text-teal-200 text-sm">4 นาที</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ม้าโยกสปริง รุ่นไหนดี 2026
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ม้าโยกสปริงคืออะไร?
          </h2>
          <p className="text-gray-700 mb-8">
            ม้าโยกสปริงเป็นอุปกรณ์สนามเด็กเล่นที่ช่วยพัฒนากล้ามเนื้อแขนขา
            การทรงตัว และการประสานสัมพันธ์ของร่างกาย เหมาะสำหรับเด็กอายุ 1-8 ปี
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            สิ่งที่ต้องดูในการเลือกม้าโยกสปริง
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>ความแข็งแรงของสปริง</strong> - ต้องไม่อ่อนหรือแข็งเกินไป</li>
            <li><strong>ที่นั่งลึกพอเหมาะ</strong> - ป้องกันเด็กหล่น</li>
            <li><strong>ราวกั้นด้านข้าง</strong> - ปลอดภัยยิ่งขึ้น</li>
            <li><strong>ฐานยึดแน่นหนา</strong> - ป้องกันล้ม</li>
            <li><strong>วัสดุปลอดภัย</strong> - ไม่มีสารพิษ ไม่มีรอยคม</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            รุ่นแนะนำจาก THZ
          </h2>
          <p className="text-gray-700 mb-8">
            THZ มีม้าโยกสปริงหลายรุ่น ทั้งแบบม้า แบบยานพาหนะ และแบบสัตว์
            ทุกรุ่นผลิตจากพลาสติก LLDPE คุณภาพสูง ปลอดภัย ทนทาน
            พร้อมสปริงคุณภาพสูงและฐานยึดที่มั่นคง
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

          <div className="bg-[#006D6F] text-white rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-bold mb-4">
              สนใจม้าโยกสปริงคุณภาพ?
            </h3>
            <p className="text-teal-100 mb-6">
              THZ มีม้าโยกสปริงหลายรุ่น ราคาเริ่มต้น 1,200 บาท
              จัดส่งทั่วประเทศ รับประกันสินค้า 5 ปี
            </p>
            <Link
              href="/products/thz-play"
              className="bg-[#D4AF37] text-[#1A1A2E] px-6 py-3 rounded-lg font-bold hover:bg-[#D4AF37]/90 transition-colors inline-block"
            >
              ดูสินค้า THZ Play
            </Link>
          </div>
        </div>
      </article>

      <BlogPostingSchema
        title="ม้าโยกสปริง รุ่นไหนดี 2026 | THZ"
        description="เปรียบเทียบม้าโยกสปริงสนามเด็กเล่น แนะนำรุ่นที่ดีที่สุด ปลอดภัย ทนทาน ราคาคุ้มค่า จาก THZ"
        datePublished="2026-07-15"
        url="https://thz-website-v2.vercel.app/blog/best-spring-seesaw"
      />
    </div>
  );
}
