import type { Metadata } from "next";
import Link from "next/link";
import BlogPostingSchema from "@/components/BlogPostingSchema";
import { getRelatedPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "อุปกรณ์สนามเด็กเล่น EN71 คืออะไร | THZ",
  description:
    "ทำความรู้จักมาตรฐาน EN71 สำหรับอุปกรณ์สนามเด็กเล่น ความปลอดภัยที่ได้รับการรับรองระดับสากล จาก THZ",
  keywords: [
    "EN71",
    "มาตรฐานอุปกรณ์สนามเด็กเล่น",
    "ความปลอดภัยสนามเด็กเล่น",
    "EN71 คืออะไร",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/en71-standard",
  },
};

const slug = "en71-standard";
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
            อุปกรณ์สนามเด็กเล่น EN71 คืออะไร
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            EN71 คือมาตรฐานอะไร?
          </h2>
          <p className="text-gray-700 mb-8">
            EN71 เป็นมาตรฐานความปลอดภัยของเล่นเด็กของสหภาพยุโรป (European Standard)
            ครอบคลุมความปลอดภัยของเล่นทุกประเภท รวมถึงอุปกรณ์สนามเด็กเล่น
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ส่วนประกอบของ EN71
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>EN71-1</strong> - ความปลอดภัยทางกล (Mechanical)</li>
            <li><strong>EN71-2</strong> - ความปลอดภัยด้านไฟ (Flammability)</li>
            <li><strong>EN71-3</strong> - ความปลอดภัยด้านสารเคมี (Chemical)</li>
            <li><strong>EN71-9</strong> - สารเคมีอินทรีย์บางชนิด</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ทำไมต้องเลือกอุปกรณ์ที่ได้มาตรฐาน EN71?
          </h2>
          <p className="text-gray-700 mb-8">
            อุปกรณ์ที่ได้มาตรฐาน EN71 ผ่านการทดสอบความปลอดภัยอย่างเข้มงวด
            มั่นใจได้ว่าปลอดภัยสำหรับเด็ก ไม่มีสารพิษ ไม่มีส่วนคม
            โครงสร้างแข็งแรง ทนทาน
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            EN71 vs มอก.3000
          </h2>
          <p className="text-gray-700 mb-8">
            EN71 เป็นมาตรฐานสากล ส่วนมอก.3000 เป็นมาตรฐานไทย
            อุปกรณ์ที่ได้มาตรฐานทั้งสองมีความปลอดภัยสูง
            THZ ผลิตอุปกรณ์ที่ได้รับรองทั้ง มอก.3000 และ EN71
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
              สนใจอุปกรณ์ได้มาตรฐาน EN71?
            </h3>
            <p className="text-teal-100 mb-6">
              THZ ผลิตอุปกรณ์สนามเด็กเล่นได้มาตรฐาน มอก.3000 และ EN71
              มั่นใจในความปลอดภัย จัดส่งทั่วประเทศ
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
        title="อุปกรณ์สนามเด็กเล่น EN71 คืออะไร | THZ"
        description="ทำความรู้จักมาตรฐาน EN71 สำหรับอุปกรณ์สนามเด็กเล่น ความปลอดภัยที่ได้รับการรับรองระดับสากล จาก THZ"
        datePublished="2026-07-20"
        url="https://thz-website-v2.vercel.app/blog/en71-standard"
      />
    </div>
  );
}
