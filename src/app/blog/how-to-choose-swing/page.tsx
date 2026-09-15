import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "วิธีเลือกชิงช้าสนามให้ปลอดภัย | THZ",
  description:
    "คู่มือเลือกชิงช้าสนามเด็กเล่นให้ปลอดภัย แข็งแรง ทนทาน สำหรับโรงเรียน สวนสาธารณะ จาก THZ",
  keywords: [
    "ชิงช้าสนาม",
    "เลือกชิงช้าให้ปลอดภัย",
    "ชิงช้าเด็กเล่น",
    "ชิงช้าสนามโรงเรียน",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/how-to-choose-swing",
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
            วิธีเลือกชิงช้าสนามให้ปลอดภัย
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            1. ขนาดและจำนวนที่นั่ง
          </h2>
          <p className="text-gray-700 mb-8">
            เลือกขนาดชิงช้าให้เหมาะกับกลุ่มเป้าหมาย ชิงช้าเดี่ยวเหมาะสำหรับเด็กเล็ก
            ชิงช้าคู่เหมาะสำหรับเด็กโต ชิงช้า 4 ที่นั่งเหมาะสำหรับสวนสาธารณะ
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            2. วัสดุโครงสร้าง
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>เหล็กชุบสังกะสี</strong> - แข็งแรง ทนทาน ทนแดดทนฝน</li>
            <li><strong>สแตนเลส</strong> - สวยงาม ไม่เป็นสนิม แต่ราคาสูง</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            3. เชือกและโซ่
          </h2>
          <p className="text-gray-700 mb-8">
            เลือกเชือกหรือโซ่ที่มีความแข็งแรง ทนทาน เชือกควรมีความหนาพอเหมาะ
            ไม่ควรใช้เชือกที่ขาดง่าย โซ่ต้องชุบกันสนิม
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            4. ที่นั่ง
          </h2>
          <p className="text-gray-700 mb-8">
            ที่นั่งต้องมีความกว้างพอเหมาะ มีราวกั้นด้านข้าง
            วัสดุที่นั่งต้องไม่ร้อนเมื่อถูกแดด ไม่มีรอยคม
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            5. การติดตั้ง
          </h2>
          <p className="text-gray-700 mb-8">
            ชิงช้าต้องติดตั้งบนพื้นที่ราบเรียบ มีพื้นที่ว่างรอบด้านเพียงพอ
            ต้องขึ้นรูปให้มั่นคง ยึดพื้นให้แน่น ป้องกันการล้ม
          </p>

          <div className="bg-[#006D6F] text-white rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-bold mb-4">
              สนใจชิงช้าสนามคุณภาพ?
            </h3>
            <p className="text-teal-100 mb-6">
              THZ มีชิงช้าสนามหลายขนาด วัสดุคุณภาพ ได้มาตรฐาน มอก.3000
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
