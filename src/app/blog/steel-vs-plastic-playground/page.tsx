import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "เปรียบเทียบสนามเด็กเล่นเหล็ก vs พลาสติก | THZ",
  description:
    "เปรียบเทียบข้อดีข้อเสียสนามเด็กเล่นเหล็กและพลาสติก LLDPE เพื่อเลือกวัสดุที่เหมาะสมกับการใช้งาน",
  keywords: [
    "สนามเด็กเล่นเหล็ก",
    "สนามเด็กเล่นพลาสติก",
    "เปรียบเทียบวัสดุสนามเด็กเล่น",
    "LLDPE vs เหล็ก",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/steel-vs-plastic-playground",
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
            เปรียบเทียบสนามเด็กเล่นเหล็ก vs พลาสติก
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            สนามเด็กเล่นเหล็ก
          </h2>
          <h3 className="text-xl font-bold text-[#006D6F] mb-3">ข้อดี</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>แข็งแรง ทนทาน รับน้ำหนักได้มาก</li>
            <li>อายุการใช้งานยาวนาน 10-15 ปี</li>
            <li>ออกแบบได้หลายรูปแบบ</li>
            <li>เหมาะสำหรับเด็กโตและผู้ใหญ่</li>
          </ul>
          <h3 className="text-xl font-bold text-red-600 mb-3">ข้อเสีย</h3>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>ร้อนเมื่อถูกแดดจัด อาจทำให้เด็กบาดเจ็บ</li>
            <li>ต้องชุบกันสนิมเป็นประจำ</li>
            <li>มีน้ำหนักมาก ขนส่งยาก</li>
            <li>ราคาสูงกว่าพลาสติก</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            สนามเด็กเล่นพลาสติก LLDPE
          </h2>
          <h3 className="text-xl font-bold text-[#006D6F] mb-3">ข้อดี</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>ปลอดภัย ไม่มีส่วนคม</li>
            <li>ไม่ร้อนเมื่อถูกแดด เพราะพลาสติกไม่เก็บความร้อน</li>
            <li>สีสันสดใส ดึงดูดเด็ก</li>
            <li>ราคาคุ้มค่า ติดตั้งง่าย</li>
          </ul>
          <h3 className="text-xl font-bold text-red-600 mb-3">ข้อเสีย</h3>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>อายุการใช้งานสั้นกว่าเหล็ก (5-8 ปี)</li>
            <li>รับน้ำหนักได้น้อยกว่า</li>
            <li>สีซีดจางเมื่อถูกแดดเป็นเวลานาน</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            สรุป: เลือกวัสดุไหนดี?
          </h2>
          <p className="text-gray-700 mb-8">
            สำหรับโรงเรียนอนุบาลหรือสถานที่ที่มีเด็กเล็ก แนะนำพลาสติก LLDPE เพราะปลอดภัยกว่า
            สำหรับสวนสาธารณะหรือสถานที่ที่มีเด็กโต แนะนำเหล็กชุบสังกะสีเพราะทนทานกว่า
          </p>

          <div className="bg-[#006D6F] text-white rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-bold mb-4">
              ต้องการคำปรึกษาเรื่องสนามเด็กเล่น?
            </h3>
            <p className="text-teal-100 mb-6">
              THZ มีทีมผู้เชี่ยวชาญพร้อมให้คำปรึกษาเรื่องวัสดุและอุปกรณ์สนามเด็กเล่น
              ติดต่อเราได้เลย
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
