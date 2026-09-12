import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

// ═══════════════════════════════════════════════════════
// POST /api/puck/seed — Seed initial pages with default Puck layout
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

    // Check if page already exists
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
    });

    if (existing.docs.length > 0) {
      // Update existing page
      const page = await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data: {
          layout: slug === '/' ? homepageLayout : { content: [], root: {}, zones: {} },
        } as any,
      });
      return NextResponse.json({ doc: page, action: 'updated' });
    }

    // Create new page
    const page = await payload.create({
      collection: 'pages',
      data: {
        title: slug === '/' ? 'หน้าแรก' : slug.replace('/', '').replace(/-/g, ' '),
        slug,
        layout: slug === '/' ? homepageLayout : { content: [], root: {}, zones: {} },
        published: true,
      } as any,
    });

    return NextResponse.json({ doc: page, action: 'created' });
  } catch (error: any) {
    console.error('Seed error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
