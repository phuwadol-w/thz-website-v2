import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "บทความ SEO | อุปกรณ์สนามเด็กเล่น THZ",
  description:
    "รวมบทความเกี่ยวกับอุปกรณ์สนามเด็กเล่น ม้านั่งโรงเรียน เฟอร์นิเจอร์ลอฟ ความรู้tips และการดูแลรักษาจากผู้เชี่ยวชาญ THZ",
  keywords: [
    "บทความอุปกรณ์สนามเด็กเล่น",
    "tips ดูแลสนามเด็กเล่น",
    "วิธีเลือกอุปกรณ์สนามเด็กเล่น",
    "ม้านั่งโรงเรียน",
    "เฟอร์นิเจอร์ลอฟ",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#006D6F] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            บทความ SEO
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl">
            รวมความรู้ tips และเทคนิคเกี่ยวกับอุปกรณ์สนามเด็กเล่น
            ม้านั่งโรงเรียน และเฟอร์นิเจอร์ลอฟ จากผู้เชี่ยวชาญ THZ
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#006D6F]/10 text-[#006D6F] text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#006D6F] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#006D6F] font-medium hover:underline"
                  >
                    อ่านต่อ →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A1A2E] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            สนใจอุปกรณ์สนามเด็กเล่นคุณภาพ?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            THZ ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่น ม้านั่งโรงเรียน
            เฟอร์นิเจอร์ลอฟ คุณภาพมาตรฐาน มอก.3000 จัดส่งทั่วประเทศ
          </p>
          <Link
            href="/contact"
            className="bg-[#D4AF37] text-[#1A1A2E] px-8 py-3 rounded-lg font-bold hover:bg-[#D4AF37]/90 transition-colors inline-block"
          >
            ติดต่อเราเลย
          </Link>
        </div>
      </section>
    </div>
  );
}
