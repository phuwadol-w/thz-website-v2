import type { Metadata } from "next";
import Link from "next/link";
import BlogPostingSchema from "@/components/BlogPostingSchema";
import { getRelatedPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "เปรียบเทียบราคาอุปกรณ์สนามเด็กเล่น 5 แบรนด์ | THZ",
  description:
    "เปรียบเทียบราคาอุปกรณ์สนามเด็กเล่น 5 แบรนด์ในประเทศไทย คุ้มค่า ราคาดี จาก THZ",
  keywords: [
    "เปรียบเทียบราคาอุปกรณ์สนามเด็กเล่น",
    "ราคาสนามเด็กเล่น 5 แบรนด์",
    "อุปกรณ์สนามเด็กเล่นราคาถูก",
    "สนามเด็กเล่นคุ้มค่า",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/playground-equipment-price-comparison",
  },
};

const slug = "playground-equipment-price-comparison";
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
            เปรียบเทียบราคาอุปกรณ์สนามเด็กเล่น 5 แบรนด์
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ราคาเปรียบเทียบ
          </h2>
          <p className="text-gray-700 mb-4">
            ราคาอุปกรณ์สนามเด็กเล่นในประเทศไทยมีหลายระดับ ขึ้นอยู่กับวัสดุ ขนาด และแบรนด์
            แบรนด์ไทยมักมีราคาคุ้มค่ากว่าแบรนด์นำเข้า
          </p>
          <p className="text-gray-700 mb-8">
            THZ เป็นผู้ผลิตในประเทศไทย ทำให้มีราคาคุ้มค่ากว่าแบรนด์นำเข้า
            เพราะไม่มีค่าขนส่งระหว่างประเทศและภาษีนำเข้า
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ปัจจัยที่影響ราคา
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>วัสดุ</strong> - พลาสติก LLDPE ราคาถูกกว่าสแตนเลส</li>
            <li><strong>ขนาด</strong> - ยิ่งใหญ่ ยิ่งแพง</li>
            <li><strong>จำนวนอุปกรณ์</strong> - ชุดรวมราคาถูกกว่าซื้อแยก</li>
            <li><strong>การรับประกัน</strong> - รับประกันยาว ราคาสูงขึ้นเล็กน้อย</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ทำไมต้องเลือก THZ?
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>ผลิตในประเทศไทย ราคาคุ้มค่า</li>
            <li>ได้มาตรฐาน มอก.3000 และ EN71</li>
            <li>รับประกัน 5 ปี</li>
            <li>จัดส่งและติดตั้งฟรีทั่วประเทศ</li>
            <li>มีบริการหลังการขาย</li>
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
              ต้องการเปรียบเทียบราคาอุปกรณ์สนามเด็กเล่น?
            </h3>
            <p className="text-teal-100 mb-6">
              THZ ยินดีส่งใบเสนอราคาให้เปรียบเทียบ
              ติดต่อเราได้เลย ฟรีไม่มีค่าใช้จ่าย
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
        title="เปรียบเทียบราคาอุปกรณ์สนามเด็กเล่น 5 แบรนด์ | THZ"
        description="เปรียบเทียบราคาอุปกรณ์สนามเด็กเล่น 5 แบรนด์ในประเทศไทย คุ้มค่า ราคาดี จาก THZ"
        datePublished="2026-08-01"
        url="https://thz-website-v2.vercel.app/blog/playground-equipment-price-comparison"
      />
    </div>
  );
}
