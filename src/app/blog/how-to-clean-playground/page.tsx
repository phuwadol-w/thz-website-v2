import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "วิธีทำความสะอาดอุปกรณ์สนามเด็กเล่น | THZ",
  description:
    "คู่มือทำความสะอาดอุปกรณ์สนามเด็กเล่นทุกประเภท ป้องกันเชื้อโรค ยืดอายุการใช้งาน จากผู้เชี่ยวชาญ THZ",
  keywords: [
    "ทำความสะอาดอุปกรณ์สนามเด็กเล่น",
    "ดูแลสนามเด็กเล่น",
    "ทำความสะอาดสไลเดอร์",
    "ทำความสะอาดชิงช้า",
  ],
  alternates: {
    canonical: "https://thz-website-v2.vercel.app/blog/how-to-clean-playground",
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
            <span className="text-teal-200 text-sm">4 นาที</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            วิธีทำความสะอาดอุปกรณ์สนามเด็กเล่น
          </h1>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            1. ทำความสะอาดสัปดาห์ละครั้ง
          </h2>
          <p className="text-gray-700 mb-8">
            ทำความสะอาดอุปกรณ์สนามเด็กเล่นเป็นประจำทุกสัปดาห์
            ใช้น้ำสะอาดผสมสบู่อ่อนๆ เช็ดทำความสะอาดทุกส่วน
            แล้วล้างด้วยน้ำสะอาดอีกครั้ง ผึ่งให้แห้งสนิท
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            2. ทำความสะอาดเฉพาะจุด
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>สไลเดอร์</strong> - เช็ดผิวสไลด์ด้วยผ้าชุบน้ำสบู่ ตรวจรอยเปื้อน</li>
            <li><strong>ชิงช้า</strong> - เช็ดที่นั่งและเชือก ตรวจความแข็งแรง</li>
            <li><strong>บ่อบอล</strong> - ทำความสะอาดลูกบอลทุกลูก ล้างมือก่อนเล่น</li>
            <li><strong>ม้าโยก</strong> - เช็ดตัวม้าและฐาน ตรวจจุดเชื่อมต่อ</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            3. หลีกเลี่ยงสารเคมีแรงๆ
          </h2>
          <p className="text-gray-700 mb-8">
            ห้ามใช้สารเคมีแรงๆ หรือน้ำยาทำความสะอาดที่มีฤทธิ์กัดกร่อน
            เพราะอาจทำลายผิวอุปกรณ์และเป็นอันตรายต่อเด็ก
            ใช้เพียงน้ำสะอาดกับสบู่อ่อนๆ ก็เพียงพอ
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            4. ตรวจเช็คความปลอดภัยระหว่างทำความสะอาด
          </h2>
          <p className="text-gray-700 mb-8">
            ระหว่างทำความสะอาด ให้ตรวจเช็คความปลอดภัยไปด้วย
            น็อตหลวม รอยแตก สีลอก หรือจุดที่อาจเป็นอันตราย
            ถ้าพบปัญหาให้ซ่อมแซมทันที
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            5. บันทึกการดูแล
          </h2>
          <p className="text-gray-700 mb-8">
            จดบันทึกวันที่ทำความสะอาดและตรวจเช็คทุกครั้ง
            เพื่อให้ทราบว่าต้องทำความสะอาดเมื่อไหร่
            และติดตามสภาพอุปกรณ์ได้ถูกต้อง
          </p>

          <div className="bg-[#006D6F] text-white rounded-lg p-8 mt-8">
            <h3 className="text-2xl font-bold mb-4">
              ต้องการอุปกรณ์สนามเด็กเล่นดูแลง่าย?
            </h3>
            <p className="text-teal-100 mb-6">
              THZ มีอุปกรณ์สนามเด็กเล่นทุกประเภท ดูแลรักษาง่าย
              ทนทาน ราคาคุ้มค่า จัดส่งทั่วประเทศ
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
