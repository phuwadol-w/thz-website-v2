import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "คู่มือดูแลรักษาสนามเด็กเล่นกลางแจ้งให้ทนทาน",
  description:
    "วิธีดูแลรักษาอุปกรณ์สนามเด็กเล่นกลางแจ้งให้ทนทานต่อแดดฝน ยืดอายุการใช้งาน จากผู้เชี่ยวชาญ THZ",
  keywords: [
    "ดูแลสนามเด็กเล่น",
    "ซ่อมแซมสนามเด็กเล่น",
    "ยืดอายุสนามเด็กเล่น",
    "สนามเด็กเล่นกลางแจ้ง",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/outdoor-playground-maintenance",
  },
};

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
              สนามเด็กเล่นกลางแจ้ง
            </span>
            <span className="text-teal-200 text-sm">4 นาที</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            คู่มือดูแลรักษาสนามเด็กเล่นกลางแจ้งให้ทนทาน
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            1. ตรวจสอบประจำสัปดาห์
          </h2>
          <p className="text-gray-700 mb-4">
            ควรตรวจสอบอุปกรณ์สนามเด็กเล่นเป็นประจำทุกสัปดาห์
            เพื่อตรวจหาความเสียหาย รอยแตก หรือส่วนที่หลวม
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>ตรวจสอบรอยแตก รอยบุบ ของอุปกรณ์</li>
            <li>ตรวจสอบสกรู น็อต ที่อาจหลวม</li>
            <li>ตรวจสอบรอยสนิมบนโครงเหล็ก</li>
            <li>ตรวจสอบพื้นผิวที่อาจบาดเด็ก</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            2. ทำความสะอาดสม่ำเสมอ
          </h2>
          <p className="text-gray-700 mb-4">
            ทำความสะอาดอุปกรณ์เป็นประจำด้วยน้ำสบู่อ่อนๆ
            หลีกเลี่ยงการใช้น้ำยาทำความสะอาดที่มีสารเคมีรุนแรง
          </p>
          <p className="text-gray-700 mb-8">
            ควรทำความสะอาดอย่างน้อยสัปดาห์ละครั้ง
            และทำความสะอาดทันทีหลังมีฝนตกหนัก
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            3. ทาสีป้องกันสนิม
          </h2>
          <p className="text-gray-700 mb-4">
            สำหรับอุปกรณ์โครงเหล็ก ควรทาสีป้องกันสนิมเป็นประจำทุกปี
            เพื่อป้องกันการเกิดสนิมและการผุกร่อน
          </p>
          <p className="text-gray-700 mb-8">
            ควรเลือกสีทาเหล็กที่มีคุณภาพดี ทนแดดทนฝน
            และทาอย่างน้อย 2 ชั้น
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            4. หลีกเลี่ยงการใช้งานที่ไม่เหมาะสม
          </h2>
          <p className="text-gray-700 mb-8">
            ไม่ควรให้เด็กใช้อุปกรณ์สนามเด็กเล่นในลักษณะที่ไม่เหมาะสม
            เช่น กระโดดจากที่สูง แกว่งเกินกำหนด หรือใช้อุปกรณ์ผิดวิธี
          </p>

          <div className="bg-[#006D6F] text-white rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-bold mb-4">
              ต้องการซ่อมแซมอุปกรณ์สนามเด็กเล่น?
            </h3>
            <p className="text-teal-100 mb-6">
              THZ มีบริการซ่อมแซมและดูแลรักษาอุปกรณ์สนามเด็กเล่น
              ติดต่อเราเพื่อรับบริการ
            </p>
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-[#1A1A2E] px-6 py-3 rounded-lg font-bold hover:bg-[#D4AF37]/90 transition-colors inline-block"
            >
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
