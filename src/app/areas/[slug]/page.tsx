import { Metadata } from "next";
import { notFound } from "next/navigation";
import { provinces, getProvinceBySlug } from "@/lib/provinces";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Phone, MapPin, Shield, Truck, Award, ArrowRight, MessageCircle, CheckCircle, Star, Clock } from "lucide-react";

// Province images mapping - real installation photos
const provinceImages: Record<string, { installation: string[]; products: string[] }> = {
  "nakhon-si-thammarat": {
    installation: [
      "/images/products/473722342_3859970144244733_1267727839239141879_n.jpg",
      "/images/products/473742288_3859970147578066_4753978466273187158_n.jpg",
      "/images/products/726606443_1405968788229183_6337553449482275185_n.jpg",
      "/images/products/769309563_1449583230534405_8478278305857454543_n.jpg",
    ],
    products: [
      "/images/products/124374999_2742818269293265_2851804580300417570_n.jpg",
      "/images/products/472772789_3852975844944163_5782975775520749990_n.jpg",
      "/images/products/650721761_1321150026711060_532668979833544120_n.jpg",
    ],
  },
  "surat-thani": {
    installation: [
      "/images/products/481072543_1171214081676927_1346842185356984644_n.jpg",
      "/images/products/481073773_1026006139558785_2396254565893924653_n.jpg",
      "/images/products/481132735_1171214018343600_8522940847613013636_n.jpg",
      "/images/products/481144859_1171213948343607_2472710232179154173_n.jpg",
    ],
    products: [
      "/images/products/124374999_2742818269293265_2851804580300417570_n.jpg",
      "/images/products/481262010_1171213998343602_4209543818352889602_n.jpg",
      "/images/products/486169413_1040308148128584_3212787970872577123_n.jpg",
    ],
  },
  "songkhla": {
    installation: [
      "/images/products/124374999_2742818269293265_2851804580300417570_n.jpg",
      "/images/products/124782093_2741704996071259_58094902225414694_n.jpg",
      "/images/products/124838954_2741704876071271_4716111895763280532_n.jpg",
      "/images/products/124839113_2741704969404595_3048744863636296996_n.jpg",
    ],
    products: [
      "/images/products/125030763_2741705106071248_6169510735474174283_n.jpg",
      "/images/products/125185838_2742818289293263_7180592319727997288_n.jpg",
      "/images/products/125223894_2742818295959929_7338954461890207654_n.jpg",
    ],
  },
  "phuket": {
    installation: [
      "/images/products/650721761_1321150026711060_532668979833544120_n.jpg",
      "/images/products/486169413_1040308148128584_3212787970872577123_n.jpg",
      "/images/products/481262010_1171213998343602_4209543818352889602_n.jpg",
      "/images/products/481265070_1171214001676935_8516482559786430676_n.jpg",
    ],
    products: [
      "/images/products/480810171_1020124503480282_8951267677983846832_n.jpg",
      "/images/products/481195895_1021032890056110_1148219317793916146_n.jpg",
      "/images/products/481208015_1021032613389471_8358362979348232040_n.jpg",
    ],
  },
  "krabi": {
    installation: [
      "/images/products/472772789_3852975844944163_5782975775520749990_n.jpg",
      "/images/products/472973828_3852975854944162_1295451813594355416_n.jpg",
      "/images/products/473069018_3852975938277487_1586752797642414569_n.jpg",
      "/images/products/473566054_3858215024420245_3741806486544438858_n.jpg",
    ],
    products: [
      "/images/products/124411819_2741704822737943_1029391881544600295_n.jpg",
      "/images/products/124839113_2741704969404595_3048744863636296996_n.jpg",
      "/images/products/481072543_1171214081676927_1346842185356984644_n.jpg",
    ],
  },
  "chumphon": {
    installation: [
      "/images/products/480810171_1020124503480282_8951267677983846832_n.jpg",
      "/images/products/480819385_1021034926722573_5530719093716867474_n.jpg",
      "/images/products/480847505_1022037619955637_6531711096495971983_n.jpg",
      "/images/products/480951831_1021032680056131_2582530911444144758_n.jpg",
    ],
    products: [
      "/images/products/481045453_3895805183994562_8622605332744103999_n.jpg",
      "/images/products/481183383_3887604108148003_1473181569421912161_n.jpg",
      "/images/products/481704544_1025232799636119_4804760732142165980_n.jpg",
    ],
  },
  "ranong": {
    installation: [
      "/images/products/481195895_1021032890056110_1148219317793916146_n.jpg",
      "/images/products/481208015_1021032613389471_8358362979348232040_n.jpg",
      "/images/products/481220890_1171214215010247_7612389365820312085_n.jpg",
      "/images/products/481280442_1171214015010267_2075137896484013894_n.jpg",
    ],
    products: [
      "/images/products/481456677_1022017363290996_1891033869727128662_n.jpg",
      "/images/products/481473257_1025997472892985_9174762777043777122_n.jpg",
      "/images/products/481509300_1022026189956780_6079562964947164593_n.jpg",
    ],
  },
  "phang-nga": {
    installation: [
      "/images/products/652320449_1326700969489299_5670640098706853679_n.jpg",
      "/images/products/653716266_1326701032822626_4200657426143021090_n.jpg",
      "/images/products/653839757_1325909172901812_6851414429459484925_n.jpg",
      "/images/products/657536838_1334306325395430_1402579082283666534_n.jpg",
    ],
    products: [
      "/images/products/657857154_1330971532395576_8136343634028400432_n.jpg",
      "/images/products/658028044_1336720938487302_7478923359449818325_n.jpg",
      "/images/products/658142471_1331824338976962_1583640452499622819_n.jpg",
    ],
  },
  "trang": {
    installation: [
      "/images/products/655012724_1326701062822623_7114424685328189895_n.jpg",
      "/images/products/656017573_1329272592565470_513478976908395589_n.jpg",
      "/images/products/656959813_1330064319152964_4514484620650011695_n.jpg",
      "/images/products/657350648_1336720898487306_5318407258991268187_n.jpg",
    ],
    products: [
      "/images/products/658416613_1336721021820627_3791989274417213626_n.jpg",
      "/images/products/659005002_1335893701903359_6175897359389643713_n.jpg",
      "/images/products/660308507_1336720881820641_839949113169364857_n.jpg",
    ],
  },
  "satun": {
    installation: [
      "/images/products/663255111_1341510071341722_3679425143221483642_n.jpg",
      "/images/products/663259197_1341510101341719_8037926028050811332_n.jpg",
      "/images/products/663342485_1342223691270360_6175117029909381468_n.jpg",
      "/images/products/665844395_1340162144809848_6993046331278821837_n.jpg",
    ],
    products: [
      "/images/products/666043465_1341510064675056_8357493482244581242_n.jpg",
      "/images/products/666351669_1340741398085256_6884761212882356086_n.jpg",
      "/images/products/666469412_1340162204809842_7037002523101396322_n.jpg",
    ],
  },
  "pattani": {
    installation: [
      "/images/products/668138084_1340741368085259_4838382229884132118_n.jpg",
      "/images/products/668291803_1340741404751922_7730343894183645000_n.jpg",
      "/images/products/668447947_1343753761117353_4816887290650354029_n.jpg",
      "/images/products/668523955_1343075731185156_1033976244790146187_n.jpg",
    ],
    products: [
      "/images/products/668776317_1340741361418593_5556019605326953196_n.jpg",
      "/images/products/669043970_1343075747851821_2734602861982744717_n.jpg",
      "/images/products/669303839_1341510111341718_3286144536448425734_n.jpg",
    ],
  },
  "yala": {
    installation: [
      "/images/products/669043970_1343075747851821_2734602861982744717_n.jpg",
      "/images/products/669303839_1341510111341718_3286144536448425734_n.jpg",
      "/images/products/688846358_1363606189132110_2712887141066737004_n.jpg",
      "/images/products/689707601_1365966032229459_4042542650368142057_n.jpg",
    ],
    products: [
      "/images/products/695398001_1369439638548765_502410126914098700_n.jpg",
      "/images/products/696262638_1369439688548760_7096633484510823609_n.jpg",
      "/images/products/697398973_1369439715215424_7415965992255178581_n.jpg",
    ],
  },
  "narathiwat": {
    installation: [
      "/images/products/694719190_1366909368801792_2569808972367764351_n.jpg",
      "/images/products/695398001_1369439638548765_502410126914098700_n.jpg",
      "/images/products/696262638_1369439688548760_7096633484510823609_n.jpg",
      "/images/products/697398973_1369439715215424_7415965992255178581_n.jpg",
    ],
    products: [
      "/images/products/698572896_1370314771794585_2980503794702984483_n.jpg",
      "/images/products/699097028_1369439618548767_7938112552218009017_n.jpg",
      "/images/products/726606443_1405968788229183_6337553449482275185_n.jpg",
    ],
  },
};

const defaultImages = {
  installation: [
    "/images/products/473722342_3859970144244733_1267727839239141879_n.jpg",
    "/images/products/473742288_3859970147578066_4753978466273187158_n.jpg",
    "/images/products/726606443_1405968788229183_6337553449482275185_n.jpg",
    "/images/products/769309563_1449583230534405_8478278305857454543_n.jpg",
  ],
  products: [
    "/images/products/124374999_2742818269293265_2851804580300417570_n.jpg",
    "/images/products/472772789_3852975844944163_5782975775520749990_n.jpg",
    "/images/products/650721761_1321150026711060_532668979833544120_n.jpg",
  ],
};

const testimonials = [
  { name: "โรงเรียนเทศบาลวัดใหม่", location: "นครศรีธรรมราช", text: "สนามเด็กเล่นคุณภาพมาก แข็งแรง ทนทาน เด็กๆ ชอบมากครับ ทีมงานติดตั้งเรียบร้อย บริการดีมาก", rating: 5 },
  { name: "อบต.เกาะสมุย", location: "สุราษฎร์ธานี", text: "สั่งชุดเครื่องเล่นรวม 3 ชุด คุณภาพดีมาก สีสันสดใส ได้มาตรฐานจริงๆ จัดส่งเร็วมากครับ", rating: 5 },
  { name: "โรงเรียนบ้านหาดใหญ่", location: "สงขลา", text: "ม้านั่งโรงเรียนแข็งแรงมาก ใช้มา 2 ปีแล้วยังเหมือนใหม่ ราคาคุ้มค่ามาก แนะนำเลยครับ", rating: 5 },
];

export async function generateStaticParams() {
  return provinces.map((province) => ({
    slug: province.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const province = getProvinceBySlug(slug);
  if (!province) return {};

  return {
    title: province.metaTitle,
    description: province.metaDescription,
    openGraph: {
      title: province.metaTitle,
      description: province.metaDescription,
      url: `https://www.thz.co.th/areas/${province.slug}`,
      siteName: "THaiCraftworkZ (THZ)",
      locale: "th_TH",
      type: "website",
    },
    alternates: {
      canonical: `https://www.thz.co.th/areas/${province.slug}`,
    },
    keywords: [
      `อุปกรณ์สนามเด็กเล่น ${province.name}`,
      `สนามเด็กเล่น ${province.name}`,
      `จำหน่ายอุปกรณ์สนามเด็กเล่น ${province.name}`,
      `ติดตั้งสนามเด็กเล่น ${province.name}`,
      `สไลเดอร์ ${province.name}`,
      `ชิงช้า ${province.name}`,
      `ม้านั่งโรงเรียน ${province.name}`,
      `สนามเด็กเล่นราคาถูก ${province.name}`,
      `สนามเด็กเล่นคุณภาพ ${province.name}`,
      `สนามเด็กเล่นมาตรฐาน ${province.name}`,
      `สนามเด็กเล่นปลอดภัย ${province.name}`,
      `ผลิตสนามเด็กเล่น ${province.name}`,
      `ขายสนามเด็กเล่น ${province.name}`,
      `ออกแบบสนามเด็กเล่น ${province.name}`,
      `สนามเด็กเล่นกลางแจ้ง ${province.name}`,
      `สนามเด็กเล่นพลาสติก ${province.name}`,
      `สนามเด็กเล่นเหล็ก ${province.name}`,
      `สนามเด็กเล่นเด็กอนุบาล ${province.name}`,
      `สนามเด็กเล่นโรงเรียน ${province.name}`,
      `สนามเด็กเล่นหมู่บ้าน ${province.name}`,
      `สนามเด็กเล่นคอนโด ${province.name}`,
      `สนามเด็กเล่นโรงแรม ${province.name}`,
      `สนามเด็กเล่นรีสอร์ท ${province.name}`,
      `สนามเด็กเล่นสวนสาธารณะ ${province.name}`,
      `สนามเด็กเล่นเทศบาล ${province.name}`,
      `สนามเด็กเล่น อบต. ${province.name}`,
      `สไลเดอร์ ${province.name}`,
      `ชิงช้าสนาม ${province.name}`,
      `ม้านั่งสนาม ${province.name}`,
      `เฟอร์นิเจอร์เหล็ก ${province.name}`,
      `เฟอร์นิเจอร์ Loft ${province.name}`,
      `โต๊ะเก้าอี้โรงเรียน ${province.name}`,
      `มอก.3000 ${province.name}`,
      `อุปกรณ์สนามเด็กเล่น ภาคใต้`,
      `สนามเด็กเล่น ภาคใต้`,
      `ผู้ผลิตสนามเด็กเล่น ${province.name}`,
      `โรงงานสนามเด็กเล่น ${province.name}`,
      `รับทำสนามเด็กเล่น ${province.name}`,
      `สนามเด็กเล่นรับประกัน ${province.name}`,
      `สนามเด็กเล่นจัดส่งฟรี ${province.name}`,
      `สนามเด็กเล่นติดตั้งฟรี ${province.name}`,
    ],
  };
}

export default async function ProvincePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const province = getProvinceBySlug(slug);

  if (!province) {
    notFound();
  }

  const images = provinceImages[slug] || defaultImages;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `หจก.โดมการช่าง THZ - อุปกรณ์สนามเด็กเล่น ${province.name}`,
    description: province.metaDescription,
    url: `https://www.thz.co.th/areas/${province.slug}`,
    telephone: "081-300-1932",
    email: "THZ@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "44 หมู่ 1 ถนนเทวบุรี",
      addressLocality: "ต.โพธิ์เสด็จ อ.เมือง",
      addressRegion: `จ.นครศรีธรรมราช`,
      postalCode: "80000",
      addressCountry: "TH",
    },
    areaServed: {
      "@type": "State",
      name: province.name,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.4328,
      longitude: 99.9464,
    },
    image: images.installation[0],
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/domekarnchang",
      "https://line.me/ti/p/@THZ",
    ],
  };

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
              บริการทั่วภาคใต้
            </span>
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              อุปกรณ์สนามเด็กเล่น {province.name}
            </h1>
            <p className="thai-text text-lg text-white/80 max-w-2xl mx-auto mb-4">
              {province.description}
            </p>
            <p className="thai-text text-sm text-white/60">
              จัดส่งฟรี บริการติดตั้งฟรี รับประกัน 5 ปี
            </p>
          </div>
        </div>
      </section>

      {/* Installation Gallery - ผลงานที่ผ่านมา */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block thai-text bg-secondary/10 text-secondary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              ผลงานจริงที่ผ่านมา
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-text-dark mb-4">
              ผลงานติดตั้งในจังหวัด{province.name}
            </h2>
            <p className="thai-text text-gray-500 max-w-2xl mx-auto">
              ชมผลงานจริงจากลูกค้าทั่วจังหวัด{province.name} ที่ไว้วางใจให้ THZ ดูแล
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {images.installation.map((img, index) => (
              <div
                key={index}
                className="gallery-card aspect-square cursor-pointer group"
              >
                <img
                  src={img}
                  alt={`ผลงานติดตั้ง ${province.name} โครงการที่ ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="overlay flex items-end p-4">
                  <div>
                    <span className="inline-block bg-secondary/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      ผลงานจริง
                    </span>
                    <h3 className="thai-text text-white font-semibold text-sm">
                      ติดตั้งจังหวัด{province.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50+", label: `โครงการใน${province.name}`, color: "text-primary" },
                { number: "100%", label: "ลูกค้าพอใจ", color: "text-secondary" },
                { number: "5 ปี", label: "รับประกันสินค้า", color: "text-accent-dark" },
                { number: "24 ชม.", label: "บริการลูกค้า", color: "text-[#06C755]" },
              ].map((stat, index) => (
                <div key={index}>
                  <p className={`font-montserrat text-3xl md:text-4xl font-extrabold ${stat.color} mb-2`}>
                    {stat.number}
                  </p>
                  <p className="thai-text text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block thai-text bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
              เสียงจากลูกค้า
            </span>
            <h2 className="font-montserrat text-3xl font-extrabold text-text-dark">
              ลูกค้าของเราในจังหวัด{province.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="thai-text text-gray-600 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-text-dark">{testimonial.name}</p>
                    <p className="thai-text text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="font-montserrat text-2xl md:text-3xl font-extrabold text-text-dark mb-6">
                อุปกรณ์สนามเด็กเล่นคุณภาพ ในจังหวัด{province.name}
              </h2>
              <div className="thai-text text-gray-600 space-y-4 leading-relaxed mb-8">
                <p>{province.content}</p>
                <p>
                  อุปกรณ์สนามเด็กเล่นของเราผลิตจากวัสดุคุณภาพสูง
                  โครงเหล็กชุบสังกะสี + พลาสติก LLDPE ได้มาตรฐาน มอก.3000
                  ปลอดภัยสำหรับเด็ก ทนทานแดดทนฝน ใช้งานได้ยาวนาน 5-10 ปี
                </p>
                <p>
                  เราพร้อมให้บริการจัดส่งและติดตั้งอุปกรณ์สนามเด็กเล่นทุกอำเภอในจังหวัด{province.name}
                  {province.nearbyAreas.length > 0 && (
                    <> รวมถึง {province.nearbyAreas.join(" ")}</>
                  )}
                </p>
                <p>
                  นอกจากอุปกรณ์สนามเด็กเล่น เรายังมีบริการอื่นๆ เช่น
                  ม้านั่งโรงเรียน เฟอร์นิเจอร์ลอฟ โต๊ะเก้าอี้โรงเรียน
                  รับสั่งทำตามแบบ ตามขนาด ตามงบประมาณ
                </p>
              </div>

              {/* Products in this province */}
              <h3 className="font-montserrat text-xl font-bold text-text-dark mb-6">
                สินค้าแนะนำสำหรับจังหวัด{province.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {images.products.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 card-hover"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={product}
                        alt={`สินค้า推荐 ${province.name}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 mb-8 sticky top-24">
                <h3 className="font-montserrat font-bold text-text-dark text-lg mb-4">
                  ติดต่อสั่งซื้อ
                </h3>
                <p className="thai-text text-sm text-gray-500 mb-6">
                  สนใจอุปกรณ์สนามเด็กเล่นในจังหวัด{province.name} ติดต่อเราได้เลย
                </p>
                <div className="space-y-4 mb-6">
                  <a
                    href="tel:0813001932"
                    className="flex items-center gap-3 btn-primary text-sm w-full justify-center"
                  >
                    <Phone size={18} />
                    โทร 081-300-1932
                  </a>
                  <a
                    href="https://line.me/ti/p/@THZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#06C755] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#05b34a] transition-all duration-300 w-full justify-center"
                  >
                    <MessageCircle size={18} />
                    แชท LINE
                  </a>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Shield, text: "ได้มาตรฐาน มอก.3000", color: "text-primary" },
                    { icon: Truck, text: "จัดส่งฟรีทั่วจังหวัด", color: "text-secondary" },
                    { icon: Award, text: "รับประกัน 5 ปี", color: "text-accent-dark" },
                    { icon: CheckCircle, text: "บริการติดตั้งฟรี", color: "text-[#06C755]" },
                    { icon: Clock, text: "ตอบกลับภายใน 24 ชม.", color: "text-[#FF9800]" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <item.icon size={18} className={item.color} />
                      <span className="thai-text text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby areas */}
              {province.nearbyAreas.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                  <h3 className="font-montserrat font-bold text-text-dark mb-4">
                    พื้นที่ให้บริการใกล้เคียง
                  </h3>
                  <ul className="space-y-2">
                    {province.nearbyAreas.map((area, index) => (
                      <li key={index} className="thai-text text-sm text-gray-600 flex items-center gap-2">
                        <MapPin size={14} className="text-secondary" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* All provinces */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-montserrat font-bold text-text-dark mb-4">
                  จังหวัดอื่นๆ ที่ให้บริการ
                </h3>
                <ul className="space-y-2">
                  {provinces
                    .filter((p) => p.slug !== province.slug)
                    .slice(0, 6)
                    .map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/areas/${p.slug}`}
                          className="thai-text text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                          อุปกรณ์สนามเด็กเล่น {p.name}
                          <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                </ul>
                <Link
                  href="/areas"
                  className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold hover:text-primary-dark transition-colors"
                >
                  ดูทุกจังหวัดที่ให้บริการ
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Products links */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mt-8">
                <h3 className="font-montserrat font-bold text-text-dark mb-4">
                  สินค้าที่ให้บริการ
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/products"
                      className="thai-text text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                      อุปกรณ์สนามเด็กเล่น THZ Play
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="thai-text text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                      ม้านั่งโรงเรียน THZ Bench
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="thai-text text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                      เฟอร์นิเจอร์ลอฟ THZ Furniture
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-2xl md:text-3xl font-extrabold text-white mb-4">
            พร้อมสร้างสนามเด็กเล่นในจังหวัด{province.name}?
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

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Footer />
    </main>
  );
}
