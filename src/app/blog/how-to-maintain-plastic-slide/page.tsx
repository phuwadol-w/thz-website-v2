import type { Metadata } from "next";
import Link from "next/link";
import BlogPostingSchema from "@/components/BlogPostingSchema";
import { getRelatedPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "วิธีดูแลรักษาสไลเดอร์พลาสติกให้ทนทาน | THZ",
  description:
    "คู่มือดูแลรักษาสไลเดอร์พลาสติก LLDPE ให้ทนทาน ยืดอายุการใช้งาน ป้องกันสีซีดจาง จากผู้เชี่ยวชาญ THZ",
  keywords: [
    "ดูแลสไลเดอร์พลาสติก",
    "วิธีทำความสะอาดสไลเดอร์",
    "ยืดอายุสไลเดอร์",
    "สไลเดอร์ LLDPE ทนทาน",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/how-to-maintain-plastic-slide",
  },
};

const slug = "how-to-maintain-plastic-slide";
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
            วิธีดูแลรักษาสไลเดอร์พลาสติกให้ทนทาน
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            1. ทำความสะอาดเป็นประจำ
          </h2>
          <p className="text-gray-700 mb-4">
            ทำความสะอาดสไลเดอร์สัปดาห์ละครั้งด้วยน้ำสะอาดและสบู่อ่อนๆ
            หลีกเลี่ยงการใช้สารเคมีแรงๆ เพราะอาจทำลายผิวพลาสติก
          </p>
          <p className="text-gray-700 mb-8">
            ใช้ผ้าหรือฟองน้ำนุ่มๆ เช็ดทำความสะอาด แล้วล้างด้วยน้ำสะอาดอีกครั้ง
            ผึ่งให้แห้งก่อนปล่อยเด็กเล่น
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            2. ตรวจสอบจุดเชื่อมต่อ
          </h2>
          <p className="text-gray-700 mb-8">
            ตรวจสอบน็อตและจุดเชื่อมต่อทุกเดือน ขันให้แน่นเมื่อพบว่าหลวม
            จุดเชื่อมต่อที่หลวมอาจทำให้โครงสร้างไม่แข็งแรงและเกิดอันตรายได้
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            3. ป้องกันสีซีดจาง
          </h2>
          <p className="text-gray-700 mb-8">
            หลีกเลี่ยงการตั้งสไลเดอร์ในจุดที่ถูกแดดจัดตลอดทั้งวัน
            ถ้าเป็นไปได้ ควรติดตั้งหลังคาหรือตาข่ายกันแดด
            ทาสารกันรังสี UV ทุก 6 เดือน เพื่อรักษาสีสัน
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            4. ซ่อมแซมรอยแตก
          </h2>
          <p className="text-gray-700 mb-8">
            ถ้าพบรอยแตกหรือรอยบุบ ควรซ่อมแซมทันทีด้วยกาวพลาสติกเฉพาะทาง
            หรือเปลี่ยนใหม่ถ้ารอยแตกใหญ่ เพื่อความปลอดภัยของเด็ก
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            5. บันทึกการดูแลรักษา
          </h2>
          <p className="text-gray-700 mb-8">
            จดบันทึกวันที่ทำความสะอาด ตรวจเช็ค และซ่อมแซมทุกครั้ง
            เพื่อให้ทราบว่าต้องดูแลรักษาเมื่อไหร่ และติดตามอายุการใช้งานได้ถูกต้อง
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
              ต้องการสไลเดอร์พลาสติกคุณภาพ?
            </h3>
            <p className="text-teal-100 mb-6">
              THZ ผลิตสไลเดอร์พลาสติก LLDPE คุณภาพสูง ทนทาน ดูแลรักษาง่าย
              พร้อมบริการติดตั้งและรับประกัน 5 ปี
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
        title="วิธีดูแลรักษาสไลเดอร์พลาสติกให้ทนทาน | THZ"
        description="คู่มือดูแลรักษาสไลเดอร์พลาสติก LLDPE ให้ทนทาน ยืดอายุการใช้งาน ป้องกันสีซีดจาง จากผู้เชี่ยวชาญ THZ"
        datePublished="2026-08-08"
        url="https://thz-website-v2.vercel.app/blog/how-to-maintain-plastic-slide"
      />
    </div>
  );
}
