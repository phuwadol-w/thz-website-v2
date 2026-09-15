import type { Metadata } from "next";
import Link from "next/link";
import BlogPostingSchema from "@/components/BlogPostingSchema";
import { getRelatedPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "อุปกรณ์สนามเด็กเล่นสั่งทำพิเศษได้ไหม | THZ",
  description:
    "บริการสั่งทำอุปกรณ์สนามเด็กเล่นพิเศษ ออกแบบตามความต้องการ พร้อมผลิตและติดตั้ง โดย THZ",
  keywords: [
    "อุปกรณ์สนามเด็กเล่นสั่งทำ",
    "สนามเด็กเล่นออกแบบพิเศษ",
    "สั่งทำอุปกรณ์สนามเด็กเล่น",
    "สนามเด็กเล่น customize",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/custom-playground-equipment",
  },
};

const slug = "custom-playground-equipment";
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
            อุปกรณ์สนามเด็กเล่นสั่งทำพิเศษได้ไหม
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            THZ รับสั่งทำอุปกรณ์สนามเด็กเล่น
          </h2>
          <p className="text-gray-700 mb-8">
            ใช่ครับ! THZ รับสั่งทำอุปกรณ์สนามเด็กเล่นพิเศษตามความต้องการของลูกค้า
            ทั้งขนาด สี วัสดุ และรูปแบบ สามารถออกแบบได้ตามพื้นที่จริง
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ประเภทอุปกรณ์ที่สั่งทำได้
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>สไลเดอร์ขนาดพิเศษ</li>
            <li>ชุดเครื่องเล่นรวม (Combo Set) ออกแบบพิเศษ</li>
            <li>ชิงช้าแบบต่างๆ</li>
            <li>ม้าโยกสปริงแบบพิเศษ</li>
            <li>อุปกรณ์ปีนป่าย</li>
            <li>บ่อบอล กระดานลื่น ขนาดพิเศษ</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ขั้นตอนการสั่งทำ
          </h2>
          <ol className="list-decimal list-inside text-gray-700 mb-8 space-y-2">
            <li>ติดต่อทีมขาย แจ้งความต้องการ</li>
            <li>ทีมออกแบบจะเข้าไปดูหน้างาน (ฟรี)</li>
            <li>ส่งแบบร่างและใบเสนอราคา</li>
            <li>อนุมัติแบบและมัดจำ 50%</li>
            <li>ผลิตสินค้า (30-45 วัน)</li>
            <li>จัดส่งและติดตั้ง</li>
          </ol>

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
              ต้องการสั่งทำอุปกรณ์สนามเด็กเล่นพิเศษ?
            </h3>
            <p className="text-teal-100 mb-6">
              THZ รับสั่งทำอุปกรณ์สนามเด็กเล่นทุกประเภท
              ออกแบบตามความต้องการ ราคาคุ้มค่า จัดส่งทั่วประเทศ
            </p>
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-[#1A1A2E] px-6 py-3 rounded-lg font-bold hover:bg-[#D4AF37]/90 transition-colors inline-block"
            >
              ติดต่อขอใบเสนอราคา
            </Link>
          </div>
        </div>
      </article>

      <BlogPostingSchema
        title="อุปกรณ์สนามเด็กเล่นสั่งทำพิเศษได้ไหม | THZ"
        description="บริการสั่งทำอุปกรณ์สนามเด็กเล่นพิเศษ ออกแบบตามความต้องการ พร้อมผลิตและติดตั้ง โดย THZ"
        datePublished="2026-07-28"
        url="https://thz-website-v2.vercel.app/blog/custom-playground-equipment"
      />
    </div>
  );
}
