import type { Metadata } from "next";
import Link from "next/link";
import BlogPostingSchema from "@/components/BlogPostingSchema";
import { getRelatedPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "อุปกรณ์สนามเด็กเล่นสำหรับเด็กเล็ก 1-5 ปี | THZ",
  description:
    "แนะนำอุปกรณ์สนามเด็กเล่นที่เหมาะสมสำหรับเด็กเล็กอายุ 1-5 ปี ปลอดภัย ขนาดเล็ก ราคาคุ้มค่า จาก THZ",
  keywords: [
    "อุปกรณ์สนามเด็กเล่นเด็กเล็ก",
    "สนามเด็กเล่นอายุ 1-5 ปี",
    "สนามเด็กเล่นอนุบาล",
    "สไลเดอร์เด็กเล็ก",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/playground-for-toddlers",
  },
};

const slug = "playground-for-toddlers";
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
            <span className="text-teal-200 text-sm">5 นาที</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            อุปกรณ์สนามเด็กเล่นสำหรับเด็กเล็ก 1-5 ปี
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            1. สไลเดอร์ขนาดเล็ก
          </h2>
          <p className="text-gray-700 mb-8">
            เลือกสไลเดอร์ที่มีความสูงไม่เกิน 1 เมตร บันไดมีขั้นบันไดกว้าง
            ไม่ชันเกินไป และมีราวกั้นทั้งสองด้าน ผิวสไลด์เรียบลื่นไม่มีรอยคม
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            2. ม้าโยกสปริง
          </h2>
          <p className="text-gray-700 mb-8">
            ม้าโยกสปริงเป็นอุปกรณ์ที่เหมาะสำหรับเด็กเล็ก เพราะช่วยพัฒนากล้ามเนื้อ
            และการทรงตัว เลือกรุ่นที่มีที่นั่งลึก มีราวกั้น และสปริงไม่แข็งเกินไป
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            3. บ่อบอล
          </h2>
          <p className="text-gray-700 mb-8">
            บ่อบอลช่วยให้เด็กได้ออกกำลังกายและพัฒนากล้ามเนื้อ เลือกบ่อบอลที่มีขอบนิ่ม
            ไม่มีจุดแหลมคม และมีขนาดพอเหมาะสำหรับเด็กเล็ก
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            4. กระดานลื่น
          </h2>
          <p className="text-gray-700 mb-8">
            กระดานลื่นช่วยพัฒนาทักษะการเคลื่อนไหว เลือกรุ่นที่มีความสูงต่ำ
            มีพื้นที่พอเหมาะสำหรับเด็กเล็ก และมีพื้นรองรับกระแทก
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            5. สิ่งที่ต้องคำนึง
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>วัสดุต้องไม่มีสารพิษ ปลอดภัยสำหรับเด็ก</li>
            <li>ขนาดต้องพอเหมาะกับตัวเด็ก ไม่ใหญ่หรือเล็กเกินไป</li>
            <li>ต้องมีพื้นยางรองกระแทกใต้อุปกรณ์</li>
            <li>ผู้ใหญ่ต้องดูแลอย่างใกล้ชิดเสมอ</li>
          </ul>

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
              สนใจอุปกรณ์สนามเด็กเล่นสำหรับเด็กเล็ก?
            </h3>
            <p className="text-teal-100 mb-6">
              THZ มีอุปกรณ์สนามเด็กเล่นสำหรับเด็กเล็กหลายรุ่น
              ปลอดภัย ได้มาตรฐาน มอก.3000 จัดส่งทั่วประเทศ
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
        title="อุปกรณ์สนามเด็กเล่นสำหรับเด็กเล็ก 1-5 ปี | THZ"
        description="แนะนำอุปกรณ์สนามเด็กเล่นที่เหมาะสมสำหรับเด็กเล็กอายุ 1-5 ปี ปลอดภัย ขนาดเล็ก ราคาคุ้มค่า จาก THZ"
        datePublished="2026-07-25"
        url="https://thz-website-v2.vercel.app/blog/playground-for-toddlers"
      />
    </div>
  );
}
