import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "มาตรฐานความปลอดภัยอุปกรณ์สนามเด็กเล่นในประเทศไทย",
  description:
    "รู้จักมาตรฐาน มอก.3000 และ EN71 สำหรับอุปกรณ์สนามเด็กเล่น เพื่อความปลอดภัยของเด็กๆ จากผู้เชี่ยวชาญ THZ",
  keywords: [
    "มาตรฐานอุปกรณ์สนามเด็กเล่น",
    "มอก.3000",
    "EN71",
    "ความปลอดภัยสนามเด็กเล่น",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/playground-safety-standards-thailand",
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
              สนามเด็กเล่น
            </span>
            <span className="text-teal-200 text-sm">7 นาที</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            มาตรฐานความปลอดภัยอุปกรณ์สนามเด็กเล่นในประเทศไทย
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            มอก.3000 - มาตรฐานอุตสาหกรรมไทย
          </h2>
          <p className="text-gray-700 mb-4">
            มอก.3000 เป็นมาตรฐานอุตสาหกรรมของไทยสำหรับอุปกรณ์สนามเด็กเล่น
            กำหนดข้อกำหนดด้านความปลอดภัย วัสดุ และการทดสอบ
          </p>
          <p className="text-gray-700 mb-8">
            อุปกรณ์สนามเด็กเล่นที่ได้มาตรฐาน มอก.3000 จะผ่านการทดสอบความปลอดภัย
            ความทนทาน และความแข็งแรง ปลอดภัยสำหรับเด็ก
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            EN71 - มาตรฐานยุโรป
          </h2>
          <p className="text-gray-700 mb-4">
            EN71 เป็นมาตรฐานความปลอดภัยของสหภาพยุโรปสำหรับของเล่นเด็ก
            แบ่งเป็นหลายส่วน เช่น EN71-1 (ทางกล), EN71-2 (ไวไฟ), EN71-3 (สารเคมี)
          </p>
          <p className="text-gray-700 mb-8">
            อุปกรณ์สนามเด็กเล่นที่ได้มาตรฐาน EN71 จะมีความปลอดภัยสูง
            ผ่านการทดสอบจากห้องปฏิบัติการที่ได้รับการรับรอง
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ASTM F1487 - มาตรฐานอเมริกา
          </h2>
          <p className="text-gray-700 mb-8">
            ASTM F1487 เป็นมาตรฐานของ American Society for Testing and Materials
            สำหรับอุปกรณ์สนามเด็กเล่นเชิงพาณิชย์ กำหนดข้อกำหนดด้านความปลอดภัย การออกแบบ และการติดตั้ง
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            สิ่งที่ต้องตรวจสอบ
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>วัสดุต้องปลอดภัย ไม่มีสารเคมีอันตราย</li>
            <li>โครงสร้างต้องแข็งแรง ทนทาน</li>
            <li>ไม่มีรอยบาด ความคม หรือส่วนที่อาจทำให้เด็กได้รับบาดเจ็บ</li>
            <li>มีข้อแนะนำในการติดตั้งและใช้งาน</li>
            <li>มีการรับประกันสินค้า</li>
          </ul>

          <div className="bg-[#006D6F] text-white rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-bold mb-4">
              THZ Play - ได้มาตรฐาน มอก.3000
            </h3>
            <p className="text-teal-100 mb-6">
              อุปกรณ์สนามเด็กเล่น THZ ได้มาตรฐาน มอก.3000 ปลอดภัยสำหรับเด็ก
              จัดส่งทั่วประเทศ บริการติดตั้งฟรี
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
