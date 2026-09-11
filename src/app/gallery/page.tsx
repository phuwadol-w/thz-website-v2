"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { id: "all", label: "ทั้งหมด" },
  { id: "playground", label: "สนามเด็กเล่น" },
  { id: "slide", label: "สไลเดอร์" },
  { id: "swing", label: "ชิงช้า" },
  { id: "bench", label: "ม้านั่ง" },
  { id: "climb", label: "ปีนป่าย" },
];

const installations = [
  { id: 1, image: "/images/products/473722342_3859970144244733_1267727839239141879_n.jpg", location: "สนามเด็กเล่นโรงเรียนเทศบาล", category: "playground", year: "2567" },
  { id: 2, image: "/images/products/473742288_3859970147578066_4753978466273187158_n.jpg", location: "เครื่องเล่นรวมชุดใหญ่", category: "playground", year: "2567" },
  { id: 3, image: "/images/products/124411819_2741704822737943_1029391881544600295_n.jpg", location: "สไลเดอร์พลาสติกสีเขียว", category: "slide", year: "2567" },
  { id: 4, image: "/images/products/124782093_2741704996071259_58094902225414694_n.jpg", location: "ชุดปีนป่ายลูกกรงสีเขียว", category: "climb", year: "2567" },
  { id: 5, image: "/images/products/124838954_2741704876071271_4716111895763280532_n.jpg", location: "ชิงช้าสนามโครงเหล็ก", category: "swing", year: "2567" },
  { id: 6, image: "/images/products/124839113_2741704969404595_3048744863636296996_n.jpg", location: "สไลเดอร์พร้อมบันไดปีน", category: "slide", year: "2567" },
  { id: 7, image: "/images/products/125030763_2741705106071248_6169510735474174283_n.jpg", location: "สนามเด็กเล่นรวมชุดเล็ก", category: "playground", year: "2567" },
  { id: 8, image: "/images/products/125185838_2742818289293263_7180592319727997288_n.jpg", location: "ชุดปีนป่ายลอดเชือก", category: "climb", year: "2567" },
  { id: 9, image: "/images/products/125223894_2742818295959929_7338954461890207654_n.jpg", location: "เครื่องเล่นสนามสีสันสดใส", category: "playground", year: "2567" },
  { id: 10, image: "/images/products/650721761_1321150026711060_532668979833544120_n.jpg", location: "ม้านั่งโรงเรียนโครงเหล็ก", category: "bench", year: "2567" },
  { id: 11, image: "/images/products/486169413_1040308148128584_3212787970872577123_n.jpg", location: "โต๊ะโรงอาหารพร้อมม้านั่ง", category: "bench", year: "2567" },
  { id: 12, image: "/images/products/726606443_1405968788229183_6337553449482275185_n.jpg", location: "สนามเด็กเล่นพลาสติกกันแดด ชุดใหญ่", category: "playground", year: "2566" },
  { id: 13, image: "/images/products/124374999_2742818269293265_2851804580300417570_n.jpg", location: "สไลเดอร์พลาสติกคุณภาพสูง", category: "slide", year: "2566" },
  { id: 14, image: "/images/products/472772789_3852975844944163_5782975775520749990_n.jpg", location: "ชิงช้าสนามพลาสติก", category: "swing", year: "2566" },
  { id: 15, image: "/images/products/481072543_1171214081676927_1346842185356984644_n.jpg", location: "เครื่องเล่นรวมเสริมพัฒนาการ", category: "playground", year: "2566" },
  { id: 16, image: "/images/products/769309563_1449583230534405_8478278305857454543_n.jpg", location: "เครื่องเล่นสนามกลางแจ้ง ชุดใหญ่", category: "playground", year: "2566" },
  { id: 17, image: "/images/products/481073773_1026006139558785_2396254565893924653_n.jpg", location: "ชุดปีนป่ายในร่ม", category: "climb", year: "2566" },
  { id: 18, image: "/images/products/481132735_1171214018343600_8522940847613013636_n.jpg", location: "ชิงช้าสนามกลางแจ้ง", category: "swing", year: "2566" },
  { id: 19, image: "/images/products/481144859_1171213948343607_2472710232179154173_n.jpg", location: "ม้านั่งสนามโรงเรียน", category: "bench", year: "2566" },
  { id: 20, image: "/images/products/481262010_1171213998343602_4209543818352889602_n.jpg", location: "ม้านั่งสนามชุดใหญ่", category: "bench", year: "2566" },
  { id: 21, image: "/images/products/480810171_1020124503480282_8951267677983846832_n.jpg", location: "เฟอร์นิเจอร์ Loft โต๊ะทำงาน", category: "bench", year: "2566" },
  { id: 22, image: "/images/products/481195895_1021032890056110_1148219317793916146_n.jpg", location: "ชั้นวางของสไตล์ Loft", category: "bench", year: "2566" },
  { id: 23, image: "/images/products/481208015_1021032613389471_8358362979348232040_n.jpg", location: "เก้าอี้ Loft โครงเหล็ก", category: "bench", year: "2566" },
  { id: 24, image: "/images/products/476804687_3876065642635183_765086473282700496_n.jpg", location: "สนามเด็กเล่นพลาสติกสีฟ้า", category: "playground", year: "2566" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? installations
      : installations.filter((item) => item.category === activeFilter);

  const categoryCount = (catId: string) => {
    if (catId === "all") return installations.length;
    return installations.filter((i) => i.category === catId).length;
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
              ผลงานกว่า 500 โครงการทั่วประเทศ
            </span>
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              ผลงานของเรา
            </h1>
            <p className="thai-text text-lg text-white/70 max-w-2xl mx-auto">
              ชมผลงานการผลิตและติดตั้งอุปกรณ์สนามเด็กเล่น สนามเด็กเล่นพลาสติกกันแดด
              ม้านั่งโรงเรียน เฟอร์นิเจอร์ Loft ทั่วประเทศไทย
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
                onClick={() => setActiveFilter(cat.id)}
                className={`thai-text px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeFilter === cat.id
                    ? "filter-tab-active"
                    : "bg-background-light text-text-dark hover:bg-gray-200"
                }`}
              >
                {cat.label}
                <span className={`ml-2 text-xs ${
                  activeFilter === cat.id ? "text-white/70" : "text-gray-400"
                }`}>
                  {categoryCount(cat.id)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background-light min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="gallery-card aspect-square cursor-pointer group"
                >
                  <img
                    src={item.image}
                    alt={`${item.location} - อุปกรณ์สนามเด็กเล่น THZ`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="overlay flex items-end p-4 md:p-5">
                    <div>
                      <span className="inline-block bg-secondary/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                        {item.location.includes("สไลเดอร์")
                          ? "สไลเดอร์"
                          : item.location.includes("ชิงช้า")
                          ? "ชิงช้า"
                          : item.location.includes("ปีนป่าย")
                          ? "ปีนป่าย"
                          : item.location.includes("ม้านั่ง") || item.location.includes("โต๊ะ") || item.location.includes("เฟอร์นิเจอร์") || item.location.includes("ชั้นวาง") || item.location.includes("เก้าอี้")
                          ? "ม้านั่ง/เฟอร์นิเจอร์"
                          : "สนามเด็กเล่น"}
                      </span>
                      <h3 className="thai-text text-white font-semibold text-sm md:text-base leading-tight">
                        {item.location}
                      </h3>
                      <p className="thai-text text-white/60 text-xs mt-1">
                        ติดตั้งปี {item.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="thai-text text-gray-500 text-lg">
                ยังไม่มีผลงานในหมวดนี้
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "โครงการทั่วประเทศ", color: "text-primary" },
              { number: "8+", label: "ปีประสบการณ์", color: "text-secondary" },
              { number: "100%", label: "ลูกค้าพอใจ", color: "text-accent-dark" },
              { number: "24 ชม.", label: "บริการลูกค้า", color: "text-cta" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p className={`font-montserrat text-3xl md:text-4xl font-extrabold ${stat.color} mb-2`}>
                  {stat.number}
                </p>
                <p className="thai-text text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-2xl md:text-3xl font-extrabold text-white mb-4">
            อยากให้เราเป็นผู้ออกแบบสนามเด็กเล่น?
          </h2>
          <p className="thai-text text-white/80 mb-8">
            ติดต่อเราวันนี้เพื่อรับใบเสนอราคาฟรี ออกแบบตามงบประมาณของคุณ
          </p>
          <a
            href="tel:0813001932"
            className="btn-accent inline-flex items-center gap-2"
          >
            โทรเลย 081-300-1932
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
