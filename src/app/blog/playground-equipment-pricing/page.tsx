import type { Metadata } from "next";
import Link from "next/link";
import BlogPostingSchema from "@/components/BlogPostingSchema";
import { getRelatedPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "ราคามาตรฐานอุปกรณ์สนามเด็กเล่น 2026 | THZ",
  description:
    "อัพเดทราคามาตรฐานอุปกรณ์สนามเด็กเล่น 2026 ทุกประเภท ตั้งแต่สไลเดอร์ ชิงช้า ม้าโยก จนถึงสนามเด็กเล่นรวม",
  keywords: [
    "ราคาอุปกรณ์สนามเด็กเล่น 2026",
    "ราคาสไลเดอร์สนามเด็กเล่น",
    "ราคาชิงช้าสนาม",
    "อุปกรณ์สนามเด็กเล่นราคาถูก",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/playground-equipment-pricing",
  },
};

const slug = "playground-equipment-pricing";
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
            ราคามาตรฐานอุปกรณ์สนามเด็กเล่น 2026
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ราคาสไลเดอร์
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>สไลเดอร์เดี่ยวพลาสติก</strong> - 3,500 - 8,000 บาท</li>
            <li><strong>สไลเดอร์เดี่ยวสแตนเลส</strong> - 5,000 - 12,000 บาท</li>
            <li><strong>สไลเดอร์คู่พลาสติก</strong> - 12,000 - 25,000 บาท</li>
            <li><strong>สไลเดอร์บันไดเลื่อน</strong> - 15,000 - 35,000 บาท</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ราคาชิงช้า
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>ชิงช้าเดี่ยว</strong> - 1,500 - 3,000 บาท</li>
            <li><strong>ชิงช้าคู่</strong> - 3,500 - 6,000 บาท</li>
            <li><strong>ชิงช้า 4 ที่นั่ง</strong> - 8,000 - 15,000 บาท</li>
            <li><strong>ชิงช้าแม่ลูก</strong> - 5,000 - 10,000 บาท</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ราคาม้าโยกและอุปกรณ์อื่นๆ
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>ม้าโยกสปริง</strong> - 1,200 - 3,500 บาท</li>
            <li><strong>ม้าหมุน</strong> - 5,000 - 12,000 บาท</li>
            <li><strong>บ่อบอล</strong> - 8,000 - 20,000 บาท</li>
            <li><strong>กระดานลื่น</strong> - 2,000 - 5,000 บาท</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ราคาสนามเด็กเล่นรวม
          </h2>
          <p className="text-gray-700 mb-8">
            สนามเด็กเล่นรวม (Combo Set) มีราคาตั้งแต่ 50,000 - 500,000 บาท
            ขึ้นอยู่กับขนาดและจำนวนอุปกรณ์ที่รวม แนะนำให้เลือกรุ่นที่มีสไลเดอร์ 2 ตัว
            ชิงช้า 2 ที่นั่ง และม้าหมุน 1 ตัว เป็นอย่างน้อย
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
              ต้องการเช็คราคาอุปกรณ์สนามเด็กเล่น?
            </h3>
            <p className="text-teal-100 mb-6">
              THZ ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นทุกประเภท
              ราคาคุ้มค่า จัดส่งทั่วประเทศ ติดต่อขอใบเสนอราคาได้เลย
            </p>
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-[#1A1A2E] px-6 py-3 rounded-lg font-bold hover:bg-[#D4AF37]/90 transition-colors inline-block"
            >
              ขอใบเสนอราคา
            </Link>
          </div>
        </div>
      </article>

      <BlogPostingSchema
        title="ราคามาตรฐานอุปกรณ์สนามเด็กเล่น 2026 | THZ"
        description="อัพเดทราคามาตรฐานอุปกรณ์สนามเด็กเล่น 2026 ทุกประเภท ตั้งแต่สไลเดอร์ ชิงช้า ม้าโยก จนถึงสนามเด็กเล่นรวม"
        datePublished="2026-08-05"
        url="https://thz-website-v2.vercel.app/blog/playground-equipment-pricing"
      />
    </div>
  );
}
