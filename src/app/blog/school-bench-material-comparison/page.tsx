import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "เปรียบเทียบวัสดุม้านั่งโรงเรียน ไม้ vs เหล็ก vs พลาสติก",
  description:
    "เปรียบเทียบข้อดีข้อเสียของวัสดุม้านั่งโรงเรียนแต่ละประเภท เพื่อการตัดสินใจที่คุ้มค่าที่สุด จากผู้เชี่ยวชาญ THZ",
  keywords: [
    "ม้านั่งโรงเรียน",
    "ม้านั่งไม้",
    "ม้านั่งเหล็ก",
    "ม้านั่งพลาสติก",
    "เปรียบเทียบม้านั่ง",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/school-bench-material-comparison",
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[#2D6A4F] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog" className="text-green-200 hover:text-white">
              ← กลับไปหน้าบทความ
            </Link>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
              ม้านั่งโรงเรียน
            </span>
            <span className="text-green-200 text-sm">4 นาที</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            เปรียบเทียบวัสดุม้านั่งโรงเรียน ไม้ vs เหล็ก vs พลาสติก
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ม้านั่งไม้
          </h2>
          <p className="text-gray-700 mb-4">
            ม้านั่งไม้เป็นที่นิยมมาอย่างยาวนาน เพราะมีความสวยงามเป็นธรรมชาติ
            ให้ความรู้สึกอบอุ่น เหมาะกับโรงเรียนที่ต้องการบรรยากาศเป็นธรรมชาติ
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">ข้อดี</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>✓ สวยงาม เป็นธรรมชาติ</li>
                <li>✓ แข็งแรง ทนทาน</li>
                <li>✓ ซ่อมแซมได้ง่าย</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">ข้อเสีย</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>✗ ราคาแพงกว่า</li>
                <li>✗ ต้องดูแลรักษามาก</li>
                <li>✗ ผุพังง่ายถ้าไม่ดูแล</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ม้านั่งเหล็ก
          </h2>
          <p className="text-gray-700 mb-4">
            ม้านั่งเหล็กมีความแข็งแรงสูง ทนทานต่อสภาพอากาศ
            เหมาะสำหรับโรงเรียนที่ต้องการความทนทานในระยะยาว
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">ข้อดี</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>✓ แข็งแรงมาก</li>
                <li>✓ ทนทานต่อสภาพอากาศ</li>
                <li>✓ ราคาคุ้มค่า</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">ข้อเสีย</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>✗ น้ำหนักมาก</li>
                <li>✗ ร้อนเมื่อถูกแดด</li>
                <li>✗ อาจเป็นสนิมได้</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ม้านั่งพลาสติก
          </h2>
          <p className="text-gray-700 mb-4">
            ม้านั่งพลาสติกมีน้ำหนักเบา ราคาถูก เหมาะสำหรับเด็กเล็ก
            ปลอดภัยเพราะไม่มีรอยบาด
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">ข้อดี</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>✓ น้ำหนักเบา</li>
                <li>✓ ราคาถูก</li>
                <li>✓ ปลอดภัย ไม่มีรอยบาด</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">ข้อเสีย</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>✗ ไม่ทนทานเท่าเหล็ก</li>
                <li>✗ สีซีดจางง่าย</li>
                <li>✗ รับน้ำหนักได้น้อย</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#2D6A4F] text-white rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-bold mb-4">
              THZ Bench - ม้านั่งโรงเรียนคุณภาพ
            </h3>
            <p className="text-green-100 mb-6">
              ม้านั่งโรงเรียนโครงเหล็กแข็งแรง ทนทาน ราคาคุ้มค่า จัดส่งทั่วประเทศ
            </p>
            <Link
              href="/products/thz-bench"
              className="bg-[#D4AF37] text-[#1A1A2E] px-6 py-3 rounded-lg font-bold hover:bg-[#D4AF37]/90 transition-colors inline-block"
            >
              ดูสินค้า THZ Bench
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
