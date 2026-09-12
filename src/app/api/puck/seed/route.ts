import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

// ═══════════════════════════════════════════════════════
// POST /api/puck/seed — Seed pages with Puck layouts
// Body: { slug: "/" } for single page, or { bulk: true } for all pages
// ═══════════════════════════════════════════════════════
export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const body = await request.json()
    const slug = body.slug || '/'

    // Default homepage layout
    const homepageLayout = {
      content: [
        {
          type: "Hero",
          props: {
            badge: "EST. 2560 — PLAYGROUND EQUIPMENT",
            headline1: "สนามเด็กเล่น",
            headline2: "คุณภาพ",
            headline3: "มาตรฐาน",
            standard: "มอก.3000",
            subtext: "ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน จัดส่งทั่วประเทศ พร้อมทีมติดตั้งฟรี",
            ctaText: "ขอใบเสนอราคาฟรี",
            ctaLink: "/contact",
            imageUrl: "",
          },
        },
        {
          type: "Stats",
          props: {
            items: [
              { number: "8+", label: "ปีประสบการณ์", icon: "Award" },
              { number: "500+", label: "โครงการทั่วประเทศ", icon: "CheckCircle" },
              { number: "100%", label: "ได้มาตรฐาน มอก.", icon: "Shield" },
              { number: "5 ปี", label: "รับประกันสินค้า", icon: "Star" },
            ],
          },
        },
        {
          type: "Brands",
          props: {
            title: "3 แบรนด์คุณภาพ ครบวงจร",
            items: [
              { name: "THZ Play", slug: "play", description: "สไลเดอร์ ชิงช้า ปีนป่าย เครื่องเล่นเสริมพัฒนาการเด็ก", color: "#2196F3", badge: "PLAYGROUND", link: "/products?cat=play", imageUrl: "" },
              { name: "THZ Bench", slug: "bench", description: "ม้านั่งโรงเรียน ม้านั่งสนาม โต๊ะโรงอาหาร", color: "#4CAF50", badge: "BENCH", link: "/products?cat=bench", imageUrl: "" },
              { name: "THZ Furniture", slug: "furniture", description: "เฟอร์นิเจอร์สไตล์ Loft โต๊ะ เก้าอี้ ชั้นวาง ผลิตตามสั่ง", color: "#FF9800", badge: "FURNITURE", link: "/products?cat=furniture", imageUrl: "" },
            ],
          },
        },
        {
          type: "WhyChooseUs",
          props: {
            title: "คุณภาพระดับโลก ราคาที่เข้าถึงได้",
            subtitle: "ทำไมต้อง THZ",
            items: [
              { title: "ได้มาตรฐาน มอก.3000", description: "อุปกรณ์ทุกชิ้นผ่านมาตรฐานความปลอดภัย มอก.3000", icon: "Shield" },
              { title: "จัดส่งทั่วประเทศ", description: "บริการจัดส่งฟรีทั่วประเทศไทย พร้อมทีมติดตั้ง", icon: "Truck" },
              { title: "รับประกัน 5 ปี", description: "รับประกันสินค้าทุกชิ้นนาน 5 ปี พร้อมอะไหล่สำรอง", icon: "Award" },
              { title: "วัสดุคุณภาพสูง", description: "โครงเหล็กชุบสังกะสี + พลาสติก LLDPE ทนทาน", icon: "Heart" },
              { title: "บริการติดตั้งฟรี", description: "ทีมช่างผู้เชี่ยวชาญ ติดตั้งฟรีไม่มีค่าใช้จ่าย", icon: "Users" },
              { title: "บริการหลังขาย", description: "ดูแลซ่อมบำรุงตลอดอายุการใช้งาน พร้อมอะไหล่สำรอง", icon: "Wrench" },
            ],
          },
        },
        {
          type: "Testimonials",
          props: {
            title: "ลูกค้าของเราไว้วางใจ",
            items: [
              { name: "โรงเรียนเทศบาลวัดเพชร", role: "จ.นครศรีธรรมราช", text: "อุปกรณ์สนามเด็กเล่นคุณภาพมาก ติดตั้งเรียบร้อย เด็กๆ ชอบมาก ทีมงานบริการดีเยี่ยม", rating: 5 },
              { name: "เทศบาลตำบลโพธิ์เสด็จ", role: "จ.นครศรีธรรมราช", text: "สั่งม้านั่งโรงเรียน 20 ชุด คุณภาพดี ราคาโรงงาน ส่งเร็ว ติดตั้งให้ฟรี ประทับใจมาก", rating: 5 },
              { name: "โรงเรียนวัดพระธาตุ", role: "จ.นครศรีธรรมราช", text: "สนามเด็กเล่นพลาสติกกันแดด สวยมาก ทนทาน ได้มาตรฐาน มอก. จะสั่งเพิ่มอีก", rating: 5 },
            ],
          },
        },
        {
          type: "CTA",
          props: {
            title: "พร้อมสร้างสนามเด็กเล่น",
            subtitle: "ในฝัน ของคุณ?",
            description: "ติดต่อเราวันนี้เพื่อรับใบเสนอราคาฟรี ออกแบบและติดตั้งอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน จัดส่งทั่วประเทศ",
            phoneText: "โทรเลย 081-300-1932",
          },
        },
      ],
      root: {},
      zones: {},
    };

    // Page layouts by slug
    const pageLayouts: Record<string, any> = {
      '/': homepageLayout,
      '/products': {
        content: [
          {
            type: "Hero",
            props: {
              badge: "สินค้าคุณภาพมาตรฐาน มอก.3000",
              headline1: "สินค้า",
              headline2: "ของเรา",
              headline3: "",
              standard: "",
              subtext: "อุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน มอก.3000 ผลิตจากวัสดุคุณภาพสูง ทนทาน ปลอดภัย จัดส่งทั่วประเทศ",
              ctaText: "ขอใบเสนอราคา",
              ctaLink: "/contact",
              imageUrl: "",
            },
          },
          {
            type: "Products",
            props: {
              title: "สินค้าทั้งหมดของเรา",
              subtitle: "3 แบรนด์คุณภาพ",
              description: "อุปกรณ์สนามเด็กเล่น ม้านั่ง เฟอร์นิเจอร์ คุณภาพมาตรฐาน มอก.3000",
              items: [
                { title: "สนามเด็กเล่นพลาสติกกันแดด ชุดใหญ่", description: "สนามเด็กเล่นรวม โครงเหล็กชุบสังกะสี + พลาสติก LLDPE มีสไลเดอร์ ชิงช้า บันไดปีน", imageUrl: "/images/products/726606443_1405968788229183_6337553449482275185_n.jpg", badge: "ยอดนิยม", category: "THZ Play", accentColor: "#FF9800" },
                { title: "สไลเดอร์พลาสติกพร้อมบันได", description: "สไลเดอร์พลาสติก LLDPE คุณภาพสูง พร้อมบันไดปีน ฐานมั่นคง ปลอดภัยสำหรับเด็ก 2-12 ปี", imageUrl: "/images/products/124374999_2742818269293265_2851804580300417570_n.jpg", badge: "", category: "THZ Play", accentColor: "#2196F3" },
                { title: "ชิงช้าสนามพลาสติก", description: "ชิงช้าสนามโครงเหล็ก แข็งแรง ทนทาน ขนาด 2-4 ที่นั่ง ปลอดภัยได้มาตรฐาน", imageUrl: "/images/products/472772789_3852975844944163_5782975775520749990_n.jpg", badge: "", category: "THZ Play", accentColor: "#4CAF50" },
                { title: "เครื่องเล่นรวมเสริมพัฒนาการ", description: "ชุดเครื่องเล่นรวม ปีนป่าย สไลเดอร์ ชิงช้า เสริมพัฒนาการเด็กทุกวัย", imageUrl: "/images/products/481072543_1171214081676927_1346842185356984644_n.jpg", badge: "ใหม่", category: "THZ Play", accentColor: "#FF5722" },
                { title: "ม้านั่งโรงเรียน โครงเหล็ก", description: "ม้านั่งสนาม โครงเหล็กแข็งแรง ทนทาน ขนาดมาตรฐาน 2-4 ที่นั่ง", imageUrl: "/images/products/650721761_1321150026711060_532668979833544120_n.jpg", badge: "", category: "THZ Bench", accentColor: "#2196F3" },
                { title: "โต๊ะโรงอาหารพร้อมม้านั่ง", description: "โต๊ะรับประทานอาหารพร้อมม้านั่งติด โครงเหล็ก + วัสดุสังเคราะห์ นั่ง 4-6 คน", imageUrl: "/images/products/486169413_1040308148128584_3212787970872577123_n.jpg", badge: "", category: "THZ Bench", accentColor: "#4CAF50" },
                { title: "เฟอร์นิเจอร์ Loft โต๊ะทำงาน", description: "โต๊ะทำงานสไตล์ Loft โครงเหล็กสีดำ + ไม้ ดีไซน์ทันสมัย ผลิตตามสั่ง", imageUrl: "/images/products/480810171_1020124503480282_8951267677983846832_n.jpg", badge: "", category: "THZ Furniture", accentColor: "#8BC34A" },
                { title: "ชั้นวางของสไตล์ Loft", description: "ชั้นวางของโครงเหล็กสีดำ + ชั้นไม้ สไตล์ Loft ดีไซน์ทันสมัย ทนทาน", imageUrl: "/images/products/481195895_1021032890056110_1148219317793916146_n.jpg", badge: "", category: "THZ Furniture", accentColor: "#4CAF50" },
                { title: "เก้าอี้ Loft โครงเหล็ก", description: "เก้าอี้สไตล์ Loft โครงเหล็กสีดำ + เบาะหนัง ดีไซน์ทันสมัย", imageUrl: "/images/products/481208015_1021032613389471_8358362979348232040_n.jpg", badge: "", category: "THZ Furniture", accentColor: "#FFC107" },
              ],
            },
          },
          {
            type: "CTA",
            props: {
              title: "ไม่พบสินค้าที่ต้องการ?",
              subtitle: "สั่งผลิตพิเศษได้",
              description: "เรายินดีออกแบบและผลิตอุปกรณ์สนามเด็กเล่นตามสั่ง ติดต่อเราได้เลย",
              phoneText: "โทรปรึกษา 081-300-1932",
            },
          },
        ],
        root: {},
        zones: {},
      },
      '/gallery': {
        content: [
          {
            type: "Hero",
            props: {
              badge: "ผลงานกว่า 500 โครงการทั่วประเทศ",
              headline1: "ผลงาน",
              headline2: "ของเรา",
              headline3: "",
              standard: "",
              subtext: "ชมผลงานการผลิตและติดตั้งอุปกรณ์สนามเด็กเล่น สนามเด็กเล่นพลาสติกกันแดด ม้านั่งโรงเรียน เฟอร์นิเจอร์ Loft ทั่วประเทศไทย",
              ctaText: "ติดต่อเรา",
              ctaLink: "/contact",
              imageUrl: "",
            },
          },
          {
            type: "Gallery",
            props: {
              title: "ผลงานติดตั้งทั่วประเทศ",
              subtitle: "500+ โครงการ",
              items: [
                { imageUrl: "/images/products/473722342_3859970144244733_1267727839239141879_n.jpg", location: "สนามเด็กเล่นโรงเรียนเทศบาล", category: "สนามเด็กเล่น" },
                { imageUrl: "/images/products/473742288_3859970147578066_4753978466273187158_n.jpg", location: "เครื่องเล่นรวมชุดใหญ่", category: "สนามเด็กเล่น" },
                { imageUrl: "/images/products/124411819_2741704822737943_1029391881544600295_n.jpg", location: "สไลเดอร์พลาสติกสีเขียว", category: "สไลเดอร์" },
                { imageUrl: "/images/products/124782093_2741704996071259_58094902225414694_n.jpg", location: "ชุดปีนป่ายลูกกรงสีเขียว", category: "ปีนป่าย" },
                { imageUrl: "/images/products/124838954_2741704876071271_4716111895763280532_n.jpg", location: "ชิงช้าสนามโครงเหล็ก", category: "ชิงช้า" },
                { imageUrl: "/images/products/124839113_2741704969404595_3048744863636296996_n.jpg", location: "สไลเดอร์พร้อมบันไดปีน", category: "สไลเดอร์" },
                { imageUrl: "/images/products/125030763_2741705106071248_6169510735474174283_n.jpg", location: "สนามเด็กเล่นรวมชุดเล็ก", category: "สนามเด็กเล่น" },
                { imageUrl: "/images/products/125185838_2742818289293263_7180592319727997288_n.jpg", location: "ชุดปีนป่ายลอดเชือก", category: "ปีนป่าย" },
                { imageUrl: "/images/products/125223894_2742818295959929_7338954461890207654_n.jpg", location: "เครื่องเล่นสนามสีสันสดใส", category: "สนามเด็กเล่น" },
                { imageUrl: "/images/products/650721761_1321150026711060_532668979833544120_n.jpg", location: "ม้านั่งโรงเรียนโครงเหล็ก", category: "ม้านั่ง" },
                { imageUrl: "/images/products/486169413_1040308148128584_3212787970872577123_n.jpg", location: "โต๊ะโรงอาหารพร้อมม้านั่ง", category: "ม้านั่ง" },
                { imageUrl: "/images/products/726606443_1405968788229183_6337553449482275185_n.jpg", location: "สนามเด็กเล่นพลาสติกกันแดด ชุดใหญ่", category: "สนามเด็กเล่น" },
              ],
            },
          },
          {
            type: "Stats",
            props: {
              items: [
                { number: "500+", label: "โครงการทั่วประเทศ", icon: "CheckCircle" },
                { number: "8+", label: "ปีประสบการณ์", icon: "Award" },
                { number: "100%", label: "ลูกค้าพอใจ", icon: "Shield" },
                { number: "24 ชม.", label: "บริการลูกค้า", icon: "Star" },
              ],
            },
          },
          {
            type: "CTA",
            props: {
              title: "อยากให้เราเป็นผู้ออกแบบสนามเด็กเล่น?",
              subtitle: "ติดต่อวันนี้",
              description: "ติดต่อเราวันนี้เพื่อรับใบเสนอราคาฟรี ออกแบบตามงบประมาณของคุณ",
              phoneText: "โทรเลย 081-300-1932",
            },
          },
        ],
        root: {},
        zones: {},
      },
    };

    const layout = pageLayouts[slug] || { content: [], root: {}, zones: {} };
    const pageTitle = slug === '/' ? 'หน้าแรก' : slug.replace('/', '').replace(/-/g, ' ');

    // Check if page already exists
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
    });

    if (existing.docs.length > 0) {
      const page = await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: { layout } as any,
      });
      return NextResponse.json({ doc: page, action: 'updated' });
    }

    const page = await payload.create({
      collection: 'pages',
      data: {
        title: pageTitle,
        slug,
        layout,
        published: true,
      } as any,
    });

    return NextResponse.json({ doc: page, action: 'created' });
  } catch (error: any) {
    console.error('Seed error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
