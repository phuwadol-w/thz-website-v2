import { Metadata } from "next";
import { provinces } from "@/lib/provinces";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Phone, MapPin, Shield, Truck, Award, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "พื้นที่ให้บริการ | อุปกรณ์สนามเด็กเล่น ภาคใต้ | THaiCraftworkZ",
  description:
    "บริการจัดส่งและติดตั้งอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน มอก.3000 ทุกจังหวัดในภาคใต้ จัดส่งฟรี บริการติดตั้งฟรี รับประกัน 5 ปี",
  keywords: [
    "อุปกรณ์สนามเด็กเล่น ภาคใต้",
    "สนามเด็กเล่น ภาคใต้",
    "จำหน่ายอุปกรณ์สนามเด็กเล่น ภาคใต้",
    "ติดตั้งสนามเด็กเล่น ภาคใต้",
    "สไลเดอร์ ภาคใต้",
    "ชิงช้า ภาคใต้",
    "ม้านั่งโรงเรียน ภาคใต้",
    "ผู้ผลิตสนามเด็กเล่น ภาคใต้",
    "โรงงานสนามเด็กเล่น ภาคใต้",
    "รับทำสนามเด็กเล่น ภาคใต้",
  ],
  alternates: {
    canonical: "https://www.thz.co.th/areas",
  },
};

const provinceImages: Record<string, string[]> = {
  "nakhon-si-thammarat": [
    "/images/products/473722342_3859970144244733_1267727839239141879_n.jpg",
    "/images/products/473742288_3859970147578066_4753978466273187158_n.jpg",
    "/images/products/726606443_1405968788229183_6337553449482275185_n.jpg",
  ],
  "surat-thani": [
    "/images/products/481072543_1171214081676927_1346842185356984644_n.jpg",
    "/images/products/481073773_1026006139558785_2396254565893924653_n.jpg",
    "/images/products/481132735_1171214018343600_8522940847613013636_n.jpg",
  ],
  "songkhla": [
    "/images/products/124374999_2742818269293265_2851804580300417570_n.jpg",
    "/images/products/124782093_2741704996071259_58094902225414694_n.jpg",
    "/images/products/124838954_2741704876071271_4716111895763280532_n.jpg",
  ],
  "phuket": [
    "/images/products/650721761_1321150026711060_532668979833544120_n.jpg",
    "/images/products/486169413_1040308148128584_3212787970872577123_n.jpg",
    "/images/products/481262010_1171213998343602_4209543818352889602_n.jpg",
  ],
  "krabi": [
    "/images/products/472772789_3852975844944163_5782975775520749990_n.jpg",
    "/images/products/472973828_3852975854944162_1295451813594355416_n.jpg",
    "/images/products/473069018_3852975938277487_1586752797642414569_n.jpg",
  ],
  "chumphon": [
    "/images/products/480810171_1020124503480282_8951267677983846832_n.jpg",
    "/images/products/480819385_1021034926722573_5530719093716867474_n.jpg",
    "/images/products/480847505_1022037619955637_6531711096495971983_n.jpg",
  ],
  "ranong": [
    "/images/products/481195895_1021032890056110_1148219317793916146_n.jpg",
    "/images/products/481208015_1021032613389471_8358362979348232040_n.jpg",
    "/images/products/481220890_1171214215010247_7612389365820312085_n.jpg",
  ],
  "phang-nga": [
    "/images/products/652320449_1326700969489299_5670640098706853679_n.jpg",
    "/images/products/653716266_1326701032822626_4200657426143021090_n.jpg",
    "/images/products/653839757_1325909172901812_6851414429459484925_n.jpg",
  ],
  "trang": [
    "/images/products/655012724_1326701062822623_7114424685328189895_n.jpg",
    "/images/products/656017573_1329272592565470_513478976908395589_n.jpg",
    "/images/products/656959813_1330064319152964_4514484620650011695_n.jpg",
  ],
  "satun": [
    "/images/products/663255111_1341510071341722_3679425143221483642_n.jpg",
    "/images/products/663259197_1341510101341719_8037926028050811332_n.jpg",
    "/images/products/663342485_1342223691270360_6175117029909381468_n.jpg",
  ],
  "pattani": [
    "/images/products/668138084_1340741368085259_4838382229884132118_n.jpg",
    "/images/products/668291803_1340741404751922_7730343894183645000_n.jpg",
    "/images/products/668447947_1343753761117353_4816887290650354029_n.jpg",
  ],
  "yala": [
    "/images/products/669043970_1343075747851821_2734602861982744717_n.jpg",
    "/images/products/669303839_1341510111341718_3286144536448425734_n.jpg",
    "/images/products/688846358_1363606189132110_2712887141066737004_n.jpg",
  ],
  "narathiwat": [
    "/images/products/694719190_1366909368801792_2569808972367764351_n.jpg",
    "/images/products/695398001_1369439638548765_502410126914098700_n.jpg",
    "/images/products/696262638_1369439688548760_7096633484510823609_n.jpg",
  ],
};

const serviceHighlights = [
  { icon: Shield, text: "ได้มาตรฐาน มอก.3000", color: "text-primary" },
  { icon: Truck, text: "จัดส่งฟรีทั่วภาคใต้", color: "text-secondary" },
  { icon: Award, text: "รับประกัน 5 ปี", color: "text-accent-dark" },
  { icon: CheckCircle, text: "บริการติดตั้งฟรี", color: "text-[#06C755]" },
];

export default function AreasPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block thai-text bg-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
              บริการทั่วภาคใต้ 14 จังหวัด
            </span>
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              พื้นที่ให้บริการ
            </h1>
            <p className="thai-text text-lg text-white/80 max-w-3xl mx-auto mb-4">
              หจก.โดมการช่าง ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน
              มอก.3000 พร้อมให้บริการจัดส่งและติดตั้งทุกจังหวัดในภาคใต้
            </p>
            <p className="thai-text text-sm text-white/60">
              จัดส่งฟรี บริการติดตั้งฟรี รับประกัน 5 ปี พร้อมทีมช่างมืออาชีพ
            </p>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceHighlights.map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3">
                <item.icon size={24} className={item.color} />
                <span className="thai-text text-sm font-semibold text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provinces Grid */}
      <section className="py-16 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block thai-text bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              14 จังหวัดภาคใต้
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">
              เลือกจังหวัดที่คุณต้องการ
            </h2>
            <p className="thai-text text-gray-500 max-w-2xl mx-auto">
              คลิกเข้าดูผลงานจริงและสินค้าแนะนำในแต่ละจังหวัด พร้อมใบเสนอราคาฟรี
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {provinces.map((province, index) => {
              const images = provinceImages[province.slug] || provinceImages["nakhon-si-thammarat"];
              return (
                <Link
                  key={province.slug}
                  href={`/areas/${province.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100">
                    {/* Image Gallery */}
                    <div className="relative h-56 overflow-hidden">
                      <div className="grid grid-cols-3 h-full">
                        {images.map((img, i) => (
                          <div key={i} className="relative overflow-hidden">
                            <img
                              src={img}
                              alt={`${province.name} - ผลงานที่ ${i + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                            />
                            {i === 0 && (
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            )}
                          </div>
                        ))}
                      </div>
                      {/* Province Badge */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                        <span className="thai-text font-bold text-primary text-sm">
                          {province.name}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-montserrat font-extrabold text-xl text-text-dark mb-3 group-hover:text-primary transition-colors">
                        อุปกรณ์สนามเด็กเล่น {province.name}
                      </h3>
                      <p className="thai-text text-sm text-gray-500 mb-4 line-clamp-2">
                        {province.description}
                      </p>

                      {/* Nearby Areas */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin size={14} className="text-secondary" />
                          <span className="thai-text text-xs font-semibold text-gray-600">
                            พื้นที่ให้บริการ
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {province.nearbyAreas.slice(0, 3).map((area, i) => (
                            <span
                              key={i}
                              className="thai-text text-xs bg-background-light text-gray-600 px-2.5 py-1 rounded-full"
                            >
                              {area}
                            </span>
                          ))}
                          {province.nearbyAreas.length > 3 && (
                            <span className="thai-text text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                              +{province.nearbyAreas.length - 3} อำเภอ
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="thai-text text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors">
                          ดูผลงานทั้งหมด
                        </span>
                        <ArrowRight
                          size={18}
                          className="text-primary group-hover:translate-x-2 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block thai-text bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              ครอบคลุมทั่วภาคใต้
            </span>
            <h2 className="font-montserrat text-3xl font-extrabold text-text-dark">
              พื้นที่ให้บริการทั้งหมด
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {provinces.map((province) => (
              <Link
                key={province.slug}
                href={`/areas/${province.slug}`}
                className="bg-background-light hover:bg-primary/10 rounded-xl p-4 text-center transition-all duration-300 group"
              >
                <span className="thai-text text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">
                  {province.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block thai-text bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              ทำไมต้องเลือก THZ
            </span>
            <h2 className="font-montserrat text-3xl font-extrabold text-text-dark">
              ผู้ผลิตอุปกรณ์สนามเด็กเล่นอันดับ 1 ในภาคใต้
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "ผลิตเอง 100%", desc: "ผลิตในประเทศไทย ควบคุมคุณภาพทุกขั้นตอน ไม่ใช่ของนำเข้า", icon: "🏭" },
              { title: "มาตรฐาน มอก.3000", desc: "ผ่านการรับรองมาตรฐานความปลอดภัยสำหรับเด็ก", icon: "✅" },
              { title: "จัดส่งฟรีทั่วใต้", desc: "ไม่มีค่าจัดส่ง ไม่มีค่าติดตั้ง บริการครบวงจร", icon: "🚛" },
              { title: "รับประกัน 5 ปี", desc: "รับประกันสินค้าทุกรายการ พร้อมอะไหล่สำรองตลอดอายุการใช้งาน", icon: "🛡️" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-montserrat font-bold text-text-dark mb-2">{item.title}</h3>
                <p className="thai-text text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-2xl md:text-3xl font-extrabold text-white mb-4">
            พร้อมสร้างสนามเด็กเล่นในพื้นที่ของคุณ?
          </h2>
          <p className="thai-text text-white/80 mb-8">
            ติดต่อเราวันนี้เพื่อรับใบเสนอราคาฟรี ออกแบบและติดตั้งอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0813001932"
              className="btn-accent inline-flex items-center gap-2"
            >
              <Phone size={18} />
              โทรเลย 081-300-1932
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              ติดต่อเรา
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
