import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "วิธีเลือกสไลเดอร์สนามเด็กเล่นให้ปลอดภัย | THZ",
  description:
    "คู่มือเลือกสไลเดอร์สนามเด็กเล่นให้ปลอดภัย ทนทาน คุ้มค่า สำหรับโรงเรียน คอนโด และหน่วยงานราชการ จาก THZ",
  keywords: [
    "สไลเดอร์สนามเด็กเล่น",
    "เลือกสไลเดอร์ให้ปลอดภัย",
    "สไลเดอร์พลาสติก",
    "สไลเดอร์เหล็ก",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/how-to-choose-slide",
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
              อุปกรณ์สนามเด็กเล่น
            </span>
            <span className="text-teal-200 text-sm">5 นาที</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            วิธีเลือกสไลเดอร์สนามเด็กเล่นให้ปลอดภัย
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            1. ตรวจสอบมาตรฐานความปลอดภัย
          </h2>
          <p className="text-gray-700 mb-4">
            สิ่งสำคัญที่สุดในการเลือกสไลเดอร์สนามเด็กเล่นคือมาตรฐานความปลอดภัย
            ควรเลือกสไลเดอร์ที่ได้รับรองมาตรฐาน มอก.3000 หรือ EN71
            ซึ่งเป็นมาตรฐานสากลสำหรับของเล่นเด็ก
          </p>
          <p className="text-gray-700 mb-8">
            ตรวจสอบว่าสไลเดอร์มีขอบมน ไม่มีส่วนคม รอยบาด
            หรือจุดยึดที่หลวมซึ่งอาจทำให้เด็กได้รับบาดเจ็บ
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            2. เลือกวัสดุที่เหมาะสม
          </h2>
          <p className="text-gray-700 mb-4">
            สไลเดอร์มีวัสดุหลัก 2 ประเภท:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>พลาสติก LLDPE</strong> - ปลอดภัย ไม่ร้อนเมื่อถูกแดด ทนทานต่อสภาพอากาศ เหมาะสำหรับเด็กเล็ก</li>
            <li><strong>สแตนเลส</strong> - แข็งแรง ทนทาน แต่อาจร้อนเมื่อถูกแดดจัด เหมาะสำหรับเด็กโต</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            3. ขนาดและความสูง
          </h2>
          <p className="text-gray-700 mb-4">
            เลือกขนาดสไลเดอร์ให้เหมาะกับกลุ่มเป้าหมาย:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>เด็กเล็ก (1-5 ปี)</strong> - ความสูงไม่เกิน 1 เมตร บันไดไม่ชัน</li>
            <li><strong>เด็กโต (6-12 ปี)</strong> - ความสูง 1-2 เมตร พร้อมราวกั้น</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            4. ตรวจสอบความเรียบของผิวสไลด์
          </h2>
          <p className="text-gray-700 mb-8">
            ผิวสไลด์ต้องเรียบลื่น ไม่มีรอยเชื่อม รอยต่อ หรือจุดที่อาจครูดผิวหนังเด็ก
            ทดสอบด้วยการเอามือลูบผิวทั้งหมดก่อนตัดสินใจซื้อ
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            5. ความแข็งแรงของโครงสร้าง
          </h2>
          <p className="text-gray-700 mb-8">
            โครงสร้างต้องมีความแข็งแรง รับน้ำหนักเด็กหลายคนพร้อมกันได้
            ควรมีน็อตยึดที่แน่นหนา ไม่หลวม และมีการชุบกันสนิมสำหรับสไลเดอร์เหล็ก
          </p>

          <div className="bg-[#006D6F] text-white rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-bold mb-4">
              สนใจสไลเดอร์สนามเด็กเล่นคุณภาพ?
            </h3>
            <p className="text-teal-100 mb-6">
              THZ ผลิตสไลเดอร์สนามเด็กเล่นทั้งพลาสติก LLDPE และสแตนเลส
              ได้มาตรฐาน มอก.3000 จัดส่งทั่วประเทศ บริการติดตั้งฟรี
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
    </div>
  );
}
