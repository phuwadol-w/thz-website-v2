import type { Metadata } from "next";
import Link from "next/link";
import BlogPostingSchema from "@/components/BlogPostingSchema";
import { getRelatedPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "สนามเด็กเล่นรวมรุ่นไหนดีสำหรับโรงเรียน | THZ",
  description:
    "แนะนำสนามเด็กเล่นรวม (Combo Set) สำหรับโรงเรียน ขนาด 3-8 เมตร พร้อมอุปกรณ์ครบชุด จาก THZ",
  keywords: [
    "สนามเด็กเล่นรวม",
    "Combo Set สนามเด็กเล่น",
    "สนามเด็กเล่นสำหรับโรงเรียน",
    "ชุดเครื่องเล่นสนาม",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/playground-combo-set",
  },
};

const slug = "playground-combo-set";
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
            สนามเด็กเล่นรวมรุ่นไหนดีสำหรับโรงเรียน
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            สนามเด็กเล่นรวมคืออะไร?
          </h2>
          <p className="text-gray-700 mb-8">
            สนามเด็กเล่นรวม (Combo Set) คือชุดอุปกรณ์สนามเด็กเล่นที่รวมสไลเดอร์ บันไดปีน
            ชิงช้า และอุปกรณ์อื่นๆ เข้าด้วยกันในโครงสร้างเดียว เหมาะสำหรับโรงเรียนที่ต้องการอุปกรณ์ครบชุดในพื้นที่จำกัด
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ขนาดที่แนะนำสำหรับโรงเรียน
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>ขนาดเล็ก (3-4 เมตร)</strong> - 适合โรงเรียนขนาดเล็ก นักเรียนไม่เกิน 100 คน</li>
            <li><strong>ขนาดกลาง (5-6 เมตร)</strong> - เหมาะสำหรับโรงเรียนขนาดกลาง นักเรียน 100-300 คน</li>
            <li><strong>ขนาดใหญ่ (7-8 เมตร)</strong> - เหมาะสำหรับโรงเรียนขนาดใหญ่ นักเรียนมากกว่า 300 คน</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            อุปกรณ์ที่ควรมีในชุด
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>สไลเดอร์ 1-2 ตัว (ขนาดต่างกัน)</li>
            <li>บันไดปีน 2 ด้าน</li>
            <li>ชิงช้า 2-4 ที่นั่ง</li>
            <li>ม้าหมุน 1 ตัว</li>
            <li>พื้นยางรองกระแทก</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            งบประมาณที่ควรเตรียม
          </h2>
          <p className="text-gray-700 mb-8">
            สนามเด็กเล่นรวมมีราคาตั้งแต่ 50,000 - 500,000 บาท ขึ้นอยู่กับขนาดและอุปกรณ์ที่รวม
            ควรเลือกงบประมาณให้เหมาะสมกับขนาดพื้นที่และจำนวนนักเรียน
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
              สนใจสนามเด็กเล่นรวมสำหรับโรงเรียน?
            </h3>
            <p className="text-teal-100 mb-6">
              THZ มีสนามเด็กเล่นรวมหลายขนาด พร้อมบริการติดตั้งฟรีทั่วประเทศ
              รับประกันสินค้า 5 ปี
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
        title="สนามเด็กเล่นรวมรุ่นไหนดีสำหรับโรงเรียน | THZ"
        description="แนะนำสนามเด็กเล่นรวม (Combo Set) สำหรับโรงเรียน ขนาด 3-8 เมตร พร้อมอุปกรณ์ครบชุด จาก THZ"
        datePublished="2026-07-10"
        url="https://thz-website-v2.vercel.app/blog/playground-combo-set"
      />
    </div>
  );
}
