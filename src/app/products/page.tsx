"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Phone, MessageCircle, ArrowRight, Download, FileText, Camera } from "lucide-react";
import Link from "next/link";

const categories = [
  { id: "all", label: "ทั้งหมด", color: "#2196F3" },
  { id: "play", label: "THZ Play", color: "#FF9800" },
  { id: "bench", label: "THZ Bench", color: "#2196F3" },
  { id: "furniture", label: "THZ Furniture", color: "#8BC34A" },
];

const products = [
  // THZ Play
  {
    id: 1,
    title: "สนามเด็กเล่นพลาสติกกันแดด ชุดใหญ่",
    description: "สนามเด็กเล่นรวม โครงเหล็กชุบสังกะสี + พลาสติก LLDPE กันแดดกันฝน มีสไลเดอร์ ชิงช้า บันไดปีน เหมาะสำหรับโรงเรียน หมู่บ้าน เทศบาล",
    image: "/images/products/726606443_1405968788229183_6337553449482275185_n.jpg",
    category: "play",
    badge: "ยอดนิยม",
    accentColor: "#FF9800",
    productCategory: "THZ Play",
  },
  {
    id: 2,
    title: "สไลเดอร์พลาสติกพร้อมบันได",
    description: "สไลเดอร์พลาสติก LLDPE คุณภาพสูง พร้อมบันไดปีน ฐานมั่นคง ปลอดภัยสำหรับเด็ก 2-12 ปี สีสันสดใส ทนแดดทนฝน",
    image: "/images/products/124374999_2742818269293265_2851804580300417570_n.jpg",
    category: "play",
    accentColor: "#2196F3",
    productCategory: "THZ Play",
  },
  {
    id: 3,
    title: "ชิงช้าสนามพลาสติก",
    description: "ชิงช้าสนามโครงเหล็ก แข็งแรง ทนทาน เหมาะสำหรับโรงเรียน หมู่บ้าน เทศบาล ขนาด 2-4 ที่นั่ง ปลอดภัยได้มาตรฐาน",
    image: "/images/products/472772789_3852975844944163_5782975775520749990_n.jpg",
    category: "play",
    accentColor: "#4CAF50",
    productCategory: "THZ Play",
  },
  {
    id: 4,
    title: "เครื่องเล่นรวมเสริมพัฒนาการ",
    description: "ชุดเครื่องเล่นรวม ปีนป่าย สไลเดอร์ ชิงช้า เสริมพัฒนาการเด็กทุกวัย ติดตั้งง่าย โครงเหล็กชุบสังกะสี",
    image: "/images/products/481072543_1171214081676927_1346842185356984644_n.jpg",
    category: "play",
    badge: "ใหม่",
    accentColor: "#FF5722",
    productCategory: "THZ Play",
  },
  {
    id: 5,
    title: "เครื่องเล่นสนามกลางแจ้ง ชุดใหญ่",
    description: "อุปกรณ์สนามเด็กเล่นกลางแจ้ง โครงเหล็กชุบสังกะสี ทนแดดทนฝน ติดตั้งทั่วประเทศ พร้อมสไลเดอร์และชิงช้า",
    image: "/images/products/769309563_1449583230534405_8478278305857454543_n.jpg",
    category: "play",
    accentColor: "#FFC107",
    productCategory: "THZ Play",
  },
  {
    id: 6,
    title: "ชุดปีนป่ายลอดเชือก",
    description: "เครื่องเล่นปีนป่ายทรงโค้ง โครงเหล็กสีดำ + ราวจับสีแดง ฐานคอนกรีต ติดตั้งบนหินคลุก เสริมทักษะการเคลื่อนไหว",
    image: "/images/products/125185838_2742818289293263_7180592319727997288_n.jpg",
    category: "play",
    accentColor: "#FF9800",
    productCategory: "THZ Play",
  },
  {
    id: 7,
    title: "สไลเดอร์พลาสติกขนาดใหญ่",
    description: "สไลเดอร์พลาสติก LLDPE ขนาดใหญ่ พร้อมบันได 2 ด้าน ฐานกว้างมั่นคง ปลอดภัยสำหรับเด็กทุกวัย",
    image: "/images/products/124411819_2741704822737943_1029391881544600295_n.jpg",
    category: "play",
    accentColor: "#2196F3",
    productCategory: "THZ Play",
  },
  {
    id: 8,
    title: "เครื่องเล่นปีนป่ายลูกกรง",
    description: "เครื่องเล่นปีนป่ายทรงลูกกรง โครงเหล็กสีเขียว สำหรับเด็ก 5-15 ปี เสริมทักษะการปีนป่าย",
    image: "/images/products/124782093_2741704996071259_58094902225414694_n.jpg",
    category: "play",
    accentColor: "#4CAF50",
    productCategory: "THZ Play",
  },
  {
    id: 9,
    title: "ชิงช้าสนามโครงเหล็ก",
    description: "ชิงช้าสนามโครงเหล็กสีเขียว แข็งแรง ทนทาน ขนาด 4 ที่นั่ง เหมาะสำหรับสวนสาธารณะ",
    image: "/images/products/124838954_2741704876071271_4716111895763280532_n.jpg",
    category: "play",
    accentColor: "#2196F3",
    productCategory: "THZ Play",
  },
  {
    id: 10,
    title: "สไลเดอร์พร้อมอุปกรณ์ปีนป่าย",
    description: "สไลเดอร์พลาสติกสีเขียว พร้อมบันไดปีน ฐานมั่นคง ปลอดภัย ติดตั้งง่าย",
    image: "/images/products/124839113_2741704969404595_3048744863636296996_n.jpg",
    category: "play",
    accentColor: "#FF9800",
    productCategory: "THZ Play",
  },
  {
    id: 11,
    title: "สนามเด็กเล่นรวมชุดเล็ก",
    description: "สนามเด็กเล่นรวมขนาดเล็ก เหมาะสำหรับพื้นที่จำกัด มีสไลเดอร์และบันไดปีน",
    image: "/images/products/125030763_2741705106071248_6169510735474174283_n.jpg",
    category: "play",
    accentColor: "#FF5722",
    productCategory: "THZ Play",
  },
  {
    id: 12,
    title: "เครื่องเล่นสนามสีสันสดใส",
    description: "เครื่องเล่นสนามพลาสติกสีสันสดใส สำหรับเด็กเล็ก ปลอดภัย ได้มาตรฐาน",
    image: "/images/products/125223894_2742818295959929_7338954461890207654_n.jpg",
    category: "play",
    badge: "ใหม่",
    accentColor: "#FFC107",
    productCategory: "THZ Play",
  },
  // THZ Bench
  {
    id: 13,
    title: "ม้านั่งโรงเรียน โครงเหล็ก",
    description: "ม้านั่งสนาม โครงเหล็กแข็งแรง ทนทาน ขนาดมาตรฐาน เหมาะสำหรับโรงเรียน ขนาด 2-4 ที่นั่ง",
    image: "/images/products/650721761_1321150026711060_532668979833544120_n.jpg",
    category: "bench",
    accentColor: "#2196F3",
    productCategory: "THZ Bench",
  },
  {
    id: 14,
    title: "โต๊ะโรงอาหารพร้อมม้านั่ง",
    description: "โต๊ะรับประทานอาหารพร้อมม้านั่งติด โครงเหล็ก + วัสดุสังเคราะห์ นั่ง 4-6 คน ทนทาน",
    image: "/images/products/486169413_1040308148128584_3212787970872577123_n.jpg",
    category: "bench",
    accentColor: "#4CAF50",
    productCategory: "THZ Bench",
  },
  {
    id: 15,
    title: "ม้านั่งสนามโรงเรียน ชุดใหญ่",
    description: "ม้านั่งสนามโครงเหล็กขนาดใหญ่ 6 ที่นั่ง แข็งแรง ทนทาน สำหรับโรงเรียนและสวนสาธารณะ",
    image: "/images/products/481262010_1171213998343602_4209543818352889602_n.jpg",
    category: "bench",
    accentColor: "#FFC107",
    productCategory: "THZ Bench",
  },
  // THZ Furniture
  {
    id: 16,
    title: "เฟอร์นิเจอร์ Loft โต๊ะทำงาน",
    description: "โต๊ะทำงานสไตล์ Loft โครงเหล็กสีดำ + ไม้ ดีไซน์ทันสมัย วัสดุคุณภาพสูง ผลิตตามสั่ง",
    image: "/images/products/480810171_1020124503480282_8951267677983846832_n.jpg",
    category: "furniture",
    accentColor: "#8BC34A",
    productCategory: "THZ Furniture",
  },
  {
    id: 17,
    title: "ชั้นวางของสไตล์ Loft",
    description: "ชั้นวางของโครงเหล็กสีดำ + ชั้นไม้ สไตล์ Loft ดีไซน์ทันสมัย ทนทาน ผลิตตามสั่ง",
    image: "/images/products/481195895_1021032890056110_1148219317793916146_n.jpg",
    category: "furniture",
    accentColor: "#4CAF50",
    productCategory: "THZ Furniture",
  },
  {
    id: 18,
    title: "เก้าอี้ Loft โครงเหล็ก",
    description: "เก้าอี้สไตล์ Loft โครงเหล็กสีดำ + เบาะหนัง ดีไซน์ทันสมัย ผลิตจากวัสดุคุณภาพสูง",
    image: "/images/products/481208015_1021032613389471_8358362979348232040_n.jpg",
    category: "furniture",
    accentColor: "#FFC107",
    productCategory: "THZ Furniture",
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

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
              สินค้าคุณภาพมาตรฐาน มอก.3000
            </span>
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              สินค้าของเรา
            </h1>
            <p className="thai-text text-lg text-white/70 max-w-2xl mx-auto">
              อุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน มอก.3000
              ผลิตจากวัสดุคุณภาพสูง ทนทาน ปลอดภัย จัดส่งทั่วประเทศ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 lg:top-18 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`thai-text px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "filter-tab-active"
                    : "bg-background-light text-text-dark hover:bg-gray-200"
                }`}
              >
                {cat.label}
                {cat.id !== "all" && (
                  <span className="ml-2 text-xs opacity-70">
                    ({products.filter((p) => p.category === cat.id).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-background-light min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    badge={product.badge}
                    accentColor={product.accentColor}
                    category={product.productCategory}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="thai-text text-gray-500 text-lg">
                ยังไม่มีสินค้าในหมวดนี้
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Installation Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block thai-text bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              <Camera size={14} className="inline mr-1" />
              galeri ผลงานติดตั้ง
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">
              ดูสินค้าจริงหลังติดตั้ง
            </h2>
            <p className="thai-text text-gray-500 max-w-2xl mx-auto">
              ชมผลงานการติดตั้งจริงจากลูกค้าทั่วประเทศ
              เพื่อช่วยในการตัดสินใจก่อนสั่งซื้อ
            </p>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { image: "/images/products/473722342_3859970144244733_1267727839239141879_n.jpg", location: "สนามเด็กเล่นโรงเรียนเทศบาล", category: "สนามเด็กเล่น" },
              { image: "/images/products/473742288_3859970147578066_4753978466273187158_n.jpg", location: "เครื่องเล่นรวมชุดใหญ่", category: "สนามเด็กเล่น" },
              { image: "/images/products/124411819_2741704822737943_1029391881544600295_n.jpg", location: "สไลเดอร์พลาสติก", category: "สไลเดอร์" },
              { image: "/images/products/481073773_1026006139558785_2396254565893924653_n.jpg", location: "ชุดปีนป่ายในร่ม", category: "ปีนป่าย" },
              { image: "/images/products/481132735_1171214018343600_8522940847613013636_n.jpg", location: "ชิงช้าสนามกลางแจ้ง", category: "ชิงช้า" },
              { image: "/images/products/481144859_1171213948343607_2472710232179154173_n.jpg", location: "ม้านั่งสนามโรงเรียน", category: "ม้านั่ง" },
              { image: "/images/products/726606443_1405968788229183_6337553449482275185_n.jpg", location: "สนามเด็กเล่นพลาสติกกันแดด", category: "สนามเด็กเล่น" },
              { image: "/images/products/769309563_1449583230534405_8478278305857454543_n.jpg", location: "เครื่องเล่นสนามกลางแจ้ง", category: "สนามเด็กเล่น" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="gallery-card aspect-square cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={`${item.location} - อุปกรณ์สนามเด็กเล่น THZ`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="overlay flex items-end p-4">
                  <div>
                    <span className="inline-block bg-secondary/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="thai-text text-white font-semibold text-xs md:text-sm">
                      {item.location}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/gallery"
              className="btn-primary inline-flex items-center gap-2"
            >
              ดูผลงานทั้งหมด
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Catalog Download Section */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block thai-text bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              <Download size={14} className="inline mr-1" />
              ดาวน์โหลดแคตาล็อก
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">
              แคตาล็อกสินค้า THZ
            </h2>
            <p className="thai-text text-gray-500 max-w-2xl mx-auto">
              ดาวน์โหลดแคตาล็อกสินค้าของเราเพื่อดูรายละเอียด ขนาด และราคา
              พร้อมภาพสินค้าจริงทุกมุม
            </p>
            <div className="section-divider mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* THZ Play Catalog */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center border border-gray-100"
            >
              <div className="w-20 h-20 bg-[#FF9800]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🛝</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-text-dark mb-2">
                THZ Play
              </h3>
              <p className="thai-text text-sm text-gray-500 mb-6">
                อุปกรณ์สนามเด็กเล่น สไลเดอร์ ชิงช้า ปีนป่าย
              </p>
              <a
                href="/catalogs/thz-play-catalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF9800] text-white font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[#FF9800]/30 transition-all duration-300"
              >
                <Download size={18} />
                ดาวน์โหลด PDF
              </a>
            </motion.div>

            {/* THZ Bench Catalog */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center border border-gray-100"
            >
              <div className="w-20 h-20 bg-[#2196F3]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🪑</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-text-dark mb-2">
                THZ Bench
              </h3>
              <p className="thai-text text-sm text-gray-500 mb-6">
                ม้านั่งโรงเรียน ม้านั่งสนาม โต๊ะโรงอาหาร
              </p>
              <a
                href="/catalogs/thz-bench-catalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2196F3] text-white font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[#2196F3]/30 transition-all duration-300"
              >
                <Download size={18} />
                ดาวน์โหลด PDF
              </a>
            </motion.div>

            {/* THZ Furniture Catalog */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center border border-gray-100"
            >
              <div className="w-20 h-20 bg-[#8BC34A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🏠</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-text-dark mb-2">
                THZ Furniture
              </h3>
              <p className="thai-text text-sm text-gray-500 mb-6">
                เฟอร์นิเจอร์สไตล์ Loft โต๊ะ เก้าอี้ ชั้นวาง
              </p>
              <a
                href="/catalogs/thz-furniture-catalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#8BC34A] text-white font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[#8BC34A]/30 transition-all duration-300"
              >
                <Download size={18} />
                ดาวน์โหลด PDF
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="thai-text text-sm text-gray-400 flex items-center justify-center gap-2">
              <FileText size={14} />
              แคตาล็อกเป็นไฟล์ PDF — สามารถเปิดดูได้ทุกอุปกรณ์
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-2xl md:text-3xl font-extrabold text-white mb-4">
            ไม่พบสินค้าที่ต้องการ?
          </h2>
          <p className="thai-text text-white/80 mb-8">
            เรายินดีออกแบบและผลิตอุปกรณ์สนามเด็กเล่นตามสั่ง
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0813001932"
              className="btn-accent inline-flex items-center gap-2"
            >
              <Phone size={18} />
              โทรปรึกษา 081-300-1932
            </a>
            <a
              href="https://line.me/ti/p/@THZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#06C755] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#05b34a] transition-all duration-300"
            >
              <MessageCircle size={18} />
              แชท LINE
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
