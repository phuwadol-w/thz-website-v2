"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Target, Heart, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const values = [
  {
    icon: Shield,
    title: "คุณภาพ (Quality)",
    description: "ผลิตภัณฑ์ได้มาตรฐาน มอก.3000 วัสดุเกรดพรีเมียม โครงเหล็กชุบสังกะสี + พลาสติก LLDPE",
    color: "#2196F3",
  },
  {
    icon: Target,
    title: "ความปลอดภัย (Safety)",
    description: "ออกแบบเพื่อความปลอดภัยของเด็กทุกวัย ผ่านการทดสอบมาตรฐานความปลอดภัย",
    color: "#4CAF50",
  },
  {
    icon: Heart,
    title: "ความทนทาน (Durability)",
    description: "วัสดุเกรดพรีเมียม ทนทานแดดทนฝน ใช้งานได้ยาวนาน 5-10 ปี",
    color: "#FFC107",
  },
  {
    icon: Award,
    title: "การบริการ (Service)",
    description: "บริการหลังขาย ดูแลซ่อมบำรุงตลอดอายุการใช้งาน พร้อมอะไหล่สำรอง",
    color: "#FF5722",
  },
];

const milestones = [
  { year: "2560", event: "จดทะเบียน หจก.โดมการช่าง ทุน 1 ล้านบาท" },
  { year: "2561", event: "เริ่มผลิตอุปกรณ์สนามเด็กเล่นพลาสติก" },
  { year: "2562", event: "เปิดตัวแบรนด์ THaiCraftworkZ (THZ)" },
  { year: "2563", event: "ขยายโรงงาน เพิ่มสายการผลิต" },
  { year: "2564", event: "เปิดตัว THZ Play / THZ Bench / THZ Furniture" },
  { year: "2565", event: "ติดตั้งกว่า 300 โครงการทั่วประเทศ" },
  { year: "2566", event: "ขยายตลาดทั่วประเทศ 500+ โครงการ" },
  { year: "2567", event: "พัฒนาผลิตภัณฑ์ใหม่ ออกแบบตามสั่ง" },
];

export default function AboutPageClient() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block thai-text bg-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
              สร้างความสุขผ่านการเล่น
            </span>
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              เกี่ยวกับเรา
            </h1>
            <p className="thai-text text-lg text-white/70 max-w-2xl mx-auto">
              หจก.โดมการช่าง ผู้ผลิตอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน
              ผลิตในประเทศไทย จัดส่งทั่วประเทศ
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block thai-text bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-6">
                ประวัติบริษัท
              </span>
              <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-6">
                THaiCraftworkZ
                <br />
                <span className="text-primary">(THZ)</span>
              </h2>
              <div className="thai-text text-gray-600 space-y-5 leading-relaxed">
                <p>
                  <strong className="text-text-dark">หจก.โดมการช่าง</strong> จดทะเบียนเมื่อวันที่ 14 ธันวาคม 2560
                  ด้วยทุนจดทะเบียน 1,000,000 บาท ตั้งอยู่ที่ 44 หมู่ 1 ถนนเทวบุรี
                  ต.โพธิ์เสด็จ อ.เมือง จ.นครศรีธรรมราช 80000
                </p>
                <p>
                  เราเป็นผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่น สนามเด็กเล่นพลาสติกกันแดด
                  สไลเดอร์ ชิงช้า ม้านั่งโรงเรียน เฟอร์นิเจอร์ Loft
                  ภายใต้แบรนด์ <strong className="text-primary">THaiCraftworkZ (THZ)</strong>
                </p>
                <p>
                  ผลิตภัณฑ์ของเราผลิตจากวัสดุคุณภาพสูง โครงเหล็กชุบสังกะสี
                  พลาสติก LLDPE ได้มาตรฐาน มอก.3000 ปลอดภัยสำหรับเด็ก
                  ทนทานแดดทนฝน ใช้งานได้ยาวนาน 5-10 ปี
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/473722342_3859970144244733_1267727839239141879_n.jpg"
                  alt="สนามเด็กเล่น THZ"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
                      <p className="font-montserrat font-extrabold text-2xl text-primary">8+</p>
                      <p className="thai-text text-xs text-gray-600">ปีประสบการณ์</p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
                      <p className="font-montserrat font-extrabold text-2xl text-secondary">500+</p>
                      <p className="thai-text text-xs text-gray-600">โครงการทั่วประเทศ</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block thai-text bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              คุณค่าแบรนด์
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">
              4 คุณค่าหลักของ THZ
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: value.color + "15" }}
                >
                  <value.icon size={28} style={{ color: value.color }} />
                </div>
                <h3 className="font-montserrat font-bold text-text-dark mb-3">
                  {value.title}
                </h3>
                <p className="thai-text text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block thai-text bg-accent/10 text-accent-dark px-5 py-2 rounded-full text-sm font-semibold mb-4">
              เส้นทางของเรา
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">
              ประวัติบริษัท
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg -translate-x-1/2 z-10" />
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                }`}>
                  <div className="bg-background-light rounded-2xl p-6 shadow-sm">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-2">
                      พ.ศ. {milestone.year}
                    </span>
                    <p className="thai-text text-gray-700 font-medium">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-brands */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block thai-text bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              แบรนด์สินค้า
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">
              3 แบรนด์คุณภาพ
            </h2>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "THZ Play", color: "#FF9800", description: "อุปกรณ์สนามเด็กเล่น สไลเดอร์ ชิงช้า ปีนป่าย เครื่องเล่นเสริมพัฒนาการเด็ก" },
              { name: "THZ Bench", color: "#2196F3", description: "ม้านั่งโรงเรียน ม้านั่งสนาม โต๊ะโรงอาหาร อุปกรณ์สำหรับสถานศึกษา" },
              { name: "THZ Furniture", color: "#8BC34A", description: "เฟอร์นิเจอร์สไตล์ Loft โต๊ะ เก้าอี้ ชั้นวาง ดีไซน์ทันสมัย" },
            ].map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border-t-4"
                style={{ borderColor: brand.color }}
              >
                <h3 className="font-montserrat font-extrabold text-xl text-text-dark mb-3">{brand.name}</h3>
                <p className="thai-text text-gray-600 leading-relaxed">{brand.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-white mb-6">
              ร่วมเป็นส่วนหนึ่งกับเรา
            </h2>
            <p className="thai-text text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              สนใจอุปกรณ์สนามเด็กเล่น ติดต่อเราได้เลย
              เรายินดีให้คำปรึกษาและออกแบบสนามเด็กเล่นให้ตรงตามความต้องการ
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-accent inline-flex items-center gap-2">
                ติดต่อเรา
                <ArrowRight size={18} />
              </Link>
              <Link href="/products" className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                ดูสินค้า
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
