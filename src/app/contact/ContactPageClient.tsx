"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, CheckCircle } from "lucide-react";

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

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
              พร้อมให้คำปรึกษาฟรี
            </span>
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              ติดต่อเรา
            </h1>
            <p className="thai-text text-lg text-white/70 max-w-2xl mx-auto">
              พร้อมให้คำปรึกษาและออกแบบสนามเด็กเล่นให้ตรงตามความต้องการ
              ติดต่อเราวันนี้เพื่อรับใบเสนอราคาฟรี
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <span className="inline-block thai-text bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-6">
                ช่องทางติดต่อ
              </span>
              <h2 className="font-montserrat text-2xl md:text-3xl font-extrabold text-text-dark mb-8">
                ข้อมูลติดต่อ
              </h2>

              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, title: "โทรศัพท์", content: "081-300-1932", sub: "โทรเลย ไม่ต้องเกรงใจ", href: "tel:0813001932", color: "#2196F3" },
                  { icon: MessageCircle, title: "LINE", content: "@THZ", sub: "แชทได้ตลอด 24 ชม.", href: "https://line.me/ti/p/@THZ", color: "#06C755", external: true },
                  { icon: Mail, title: "อีเมล", content: "THZ@gmail.com", sub: "ส่งรายละเอียดได้เลย", href: "mailto:THZ@gmail.com", color: "#FFC107" },
                  { icon: MapPin, title: "ที่อยู่", content: "44 หมู่ 1 ถนนเทวบุรี", sub: "ต.โพธิ์เสด็จ อ.เมือง จ.นครศรีธรรมราช 80000", color: "#4CAF50" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: item.color + "15" }}>
                      <item.icon size={22} style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-text-dark mb-1">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="thai-text text-primary hover:underline font-medium">
                          {item.content}
                        </a>
                      ) : (
                        <p className="thai-text text-text-dark font-medium">{item.content}</p>
                      )}
                      <p className="thai-text text-xs text-gray-500 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-background-light rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-primary" />
                  <h3 className="font-montserrat font-bold text-text-dark">เวลาทำการ</h3>
                </div>
                <div className="space-y-2 thai-text text-sm">
                  <div className="flex justify-between"><span className="text-gray-600">จันทร์ - ศุกร์</span><span className="font-medium text-text-dark">08:00 - 17:00</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">เสาร์</span><span className="font-medium text-text-dark">08:00 - 12:00</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">อาทิตย์</span><span className="text-gray-400">ปิดทำการ</span></div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <a href="https://www.facebook.com/domekarnchang" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:bg-primary-dark transition-all duration-300 hover:scale-110">
                  <span className="font-bold text-sm">FB</span>
                </a>
                <a href="https://line.me/ti/p/@THZ" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#06C755] rounded-xl flex items-center justify-center text-white hover:bg-[#05b34a] transition-all duration-300 hover:scale-110">
                  <MessageCircle size={20} />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                <span className="inline-block thai-text bg-accent/10 text-accent-dark px-5 py-2 rounded-full text-sm font-semibold mb-4">
                  ขอใบเสนอราคา
                </span>
                <h2 className="font-montserrat text-2xl md:text-3xl font-extrabold text-text-dark mb-2">
                  แบบฟอร์มติดต่อ
                </h2>
                <p className="thai-text text-gray-500 mb-8">
                  กรอกข้อมูลด้านล่าง เราจะติดต่อกลับโดยเร็วที่สุด
                </p>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-secondary" />
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-text-dark mb-2">ส่งข้อความสำเร็จ!</h3>
                    <p className="thai-text text-gray-500">เราจะติดต่อกลับโดยเร็วที่สุดครับ</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="thai-text block text-sm font-semibold text-gray-700 mb-2">ชื่อ-นามสกุล *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="กรอกชื่อ-นามสกุล" className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none thai-text transition-all duration-300" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="thai-text block text-sm font-semibold text-gray-700 mb-2">อีเมล</label>
                        <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="example@email.com" className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none thai-text transition-all duration-300" />
                      </div>
                      <div>
                        <label className="thai-text block text-sm font-semibold text-gray-700 mb-2">เบอร์โทรศัพท์ *</label>
                        <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="081-XXX-XXXX" className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none thai-text transition-all duration-300" />
                      </div>
                    </div>
                    <div>
                      <label className="thai-text block text-sm font-semibold text-gray-700 mb-2">เรื่องที่สนใจ</label>
                      <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none thai-text transition-all duration-300 bg-white">
                        <option value="">เลือกประเภทสินค้า</option>
                        <option value="playground">THZ Play — สนามเด็กเล่นพลาสติกกันแดด</option>
                        <option value="slide">THZ Play — สไลเดอร์พลาสติก</option>
                        <option value="swing">THZ Play — ชิงช้าสนาม</option>
                        <option value="climb">THZ Play — อุปกรณ์ปีนป่าย</option>
                        <option value="bench">THZ Bench — ม้านั่งโรงเรียน</option>
                        <option value="table">THZ Bench — โต๊ะโรงอาหาร</option>
                        <option value="furniture">THZ Furniture — เฟอร์นิเจอร์ Loft</option>
                        <option value="custom">สั่งผลิตพิเศษ</option>
                        <option value="other">อื่นๆ</option>
                      </select>
                    </div>
                    <div>
                      <label className="thai-text block text-sm font-semibold text-gray-700 mb-2">รายละเอียด *</label>
                      <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="กรอกรายละเอียด เช่น ขนาดพื้นที่ จำนวนที่ต้องการ งบประมาณ..." className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none thai-text resize-none transition-all duration-300" />
                    </div>
                    <button type="submit" className="w-full btn-cta flex items-center justify-center gap-2 text-base py-4">
                      <Send size={18} />
                      <span className="thai-text">ส่งข้อความ</span>
                    </button>
                    <p className="thai-text text-xs text-gray-400 text-center">เราจะตอบกลับภายใน 24 ชม. ในวันทำการ</p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
            <span className="inline-block thai-text bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">แผนที่</span>
            <h2 className="font-montserrat text-2xl md:text-3xl font-extrabold text-text-dark">ที่ตั้งบริษัท</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1576.5!2d99.9464!3d8.4328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3042a5c0c0c0c0c1%3A0x1234567890abcdef!2z44ijIDEg5LiD5oSf5YKr5rOV5Y2J5p2l6ZyA6ZmE5pyN5Yqh6KGo5aC0!5e0!3m2!1sth!2sth!4v1234567890!5m2!1sth!2sth" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="ที่ตั้ง THZ" className="w-full" />
          </motion.div>
          <div className="mt-4 text-center">
            <p className="thai-text text-gray-500 text-sm">
              <MapPin size={14} className="inline text-primary mr-1" />
              44 หมู่ 1 ถนนเทวบุรี ต.โพธิ์เสด็จ อ.เมือง จ.นครศรีธรรมราช 80000
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
