import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET() {
  return POST()
}

export async function POST() {
  try {
    const payload = await getPayload({ config })

    // Check if admin already exists
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length > 0) {
      return NextResponse.json({
        message: 'Admin user already exists',
        admin: { email: existingUsers.docs[0].email }
      })
    }

    // Create admin user
    const admin = await payload.create({
      collection: 'users',
      data: {
        email: 'admin@thz.co.th',
        password: 'THZ-admin-2026',
        name: 'Admin THZ',
        role: 'admin',
      },
    })

    // Seed default navigation
    await payload.updateGlobal({
      slug: 'navigation',
      data: {
        navLinks: [
          { label: 'หน้าแรก', href: '/' },
          {
            label: 'สินค้า',
            href: '/products',
            children: [
              { label: 'THZ Play — สนามเด็กเล่น', href: '/products?cat=play' },
              { label: 'THZ Bench — ม้านั่ง', href: '/products?cat=bench' },
              { label: 'THZ Furniture — เฟอร์นิเจอร์', href: '/products?cat=furniture' },
            ],
          },
          { label: 'ผลงาน', href: '/gallery' },
          { label: 'เกี่ยวกับเรา', href: '/about' },
          { label: 'ติดต่อเรา', href: '/contact' },
        ],
        ctaPhone: '081-300-1932',
        ctaFacebook: 'https://www.facebook.com/domekarnchang/',
      },
    })

    // Seed default footer
    await payload.updateGlobal({
      slug: 'footer-config',
      data: {
        productLinks: [
          { label: 'THZ Play — สนามเด็กเล่น', href: '/products?cat=play' },
          { label: 'THZ Bench — ม้านั่งโรงเรียน', href: '/products?cat=bench' },
          { label: 'THZ Furniture — เฟอร์นิเจอร์ Loft', href: '/products?cat=furniture' },
          { label: 'ผลงานติดตั้ง', href: '/gallery' },
        ],
        serviceLinks: [
          { label: 'ออกแบบสนามเด็กเล่น' },
          { label: 'ติดตั้งอุปกรณ์' },
          { label: 'ซ่อมบำรุงและบริการหลังขาย' },
          { label: 'ให้คำปรึกษาฟรี' },
        ],
      },
    })

    // Seed default homepage
    await payload.updateGlobal({
      slug: 'homepage',
      data: {
        heroBadge: 'EST. 2560 — PLAYGROUND EQUIPMENT',
        heroHeadline1: 'สนามเด็กเล่น',
        heroHeadline2: 'คุณภาพ',
        heroHeadline3: 'มาตรฐาน',
        heroStandard: 'มอก.3000',
        heroCtaText: 'ขอใบเสนอราคาฟรี',
        heroCtaLink: '/contact',
        stats: [
          { number: '8+', label: 'ปีประสบการณ์', icon: 'Award' },
          { number: '500+', label: 'โครงการทั่วประเทศ', icon: 'CheckCircle' },
          { number: '100%', label: 'ได้มาตรฐาน มอก.', icon: 'Shield' },
          { number: '5 ปี', label: 'รับประกันสินค้า', icon: 'Star' },
        ],
        brandsTitle: '3 แบรนด์คุณภาพ ครบวงจร',
        brands: [
          { name: 'THZ Play', slug: 'play', description: 'สไลเดอร์ ชิงช้า ปีนป่าย เครื่องเล่นเสริมพัฒนาการเด็ก', color: '#FF9800', link: '/products?cat=play' },
          { name: 'THZ Bench', slug: 'bench', description: 'ม้านั่งโรงเรียน ม้านั่งสนาม โต๊ะโรงอาหาร', color: '#2196F3', link: '/products?cat=bench' },
          { name: 'THZ Furniture', slug: 'furniture', description: 'เฟอร์นิเจอร์สไตล์ Loft โต๊ะ เก้าอี้ ชั้นวาง ผลิตตามสั่ง', color: '#8BC34A', link: '/products?cat=furniture' },
        ],
        productsTitle: 'สินค้าขายดีของเรา',
        productsSubtitle: 'สินค้าแนะนำ',
        galleryTitle: 'ผลงานติดตั้งทั่วประเทศ',
        gallerySubtitle: 'ผลงานของเรา',
        whyTitle: 'คุณภาพระดับโลก ราคาที่เข้าถึงได้',
        whySubtitle: 'ทำไมต้อง THZ',
        whyItems: [
          { title: 'ได้มาตรฐาน มอก.3000', description: 'อุปกรณ์ทุกชิ้นผ่านมาตรฐานความปลอดภัย มอก.3000', icon: 'Shield' },
          { title: 'จัดส่งทั่วประเทศ', description: 'บริการจัดส่งฟรีทั่วประเทศไทย พร้อมทีมติดตั้ง', icon: 'Truck' },
          { title: 'รับประกัน 5 ปี', description: 'รับประกันสินค้าทุกชิ้นนาน 5 ปี พร้อมอะไหล่สำรอง', icon: 'Award' },
          { title: 'วัสดุคุณภาพสูง', description: 'โครงเหล็กชุบสังกะสี + พลาสติก LLDPE ทนทาน', icon: 'Heart' },
          { title: 'บริการติดตั้งฟรี', description: 'ทีมช่างผู้เชี่ยวชาญ ติดตั้งฟรีไม่มีค่าใช้จ่าย', icon: 'Users' },
          { title: 'บริการหลังขาย', description: 'ดูแลซ่อมบำรุงตลอดอายุการใช้งาน พร้อมอะไหล่สำรอง', icon: 'Wrench' },
        ],
        testimonialsTitle: 'ลูกค้าของเราไว้วางใจ',
        testimonials: [
          { name: 'โรงเรียนเทศบาลวัดเพชร', role: 'จ.นครศรีธรรมราช', text: 'อุปกรณ์สนามเด็กเล่นคุณภาพมาก ติดตั้งเรียบร้อย เด็กๆ ชอบมาก ทีมงานบริการดีเยี่ยม', rating: 5 },
          { name: 'เทศบาลตำบลโพธิ์เสด็จ', role: 'จ.นครศรีธรรมราช', text: 'สั่งม้านั่งโรงเรียน 20 ชุด คุณภาพดี ราคาโรงงาน ส่งเร็ว ติดตั้งให้ฟรี ประทับใจมาก', rating: 5 },
          { name: 'โรงเรียนวัดพระธาตุ', role: 'จ.นครศรีธรรมราช', text: 'สนามเด็กเล่นพลาสติกกันแดด สวยมาก ทนทาน ได้มาตรฐาน มอก. จะสั่งเพิ่มอีก', rating: 5 },
        ],
        ctaTitle: 'พร้อมสร้างสนามเด็กเล่น',
        ctaSubtitle: 'ในฝัน ของคุณ?',
        ctaDescription: 'ติดต่อเราวันนี้เพื่อรับใบเสนอราคาฟรี ออกแบบและติดตั้งอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน จัดส่งทั่วประเทศ',
        ctaPhoneText: 'โทรเลย 081-300-1932',
        ctaFacebookText: 'แชท Facebook',
      },
    })

    // Seed default settings
    await payload.updateGlobal({
      slug: 'settings',
      data: {
        siteName: 'THaiCraftworkZ (THZ)',
        siteDescription: 'ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน มอก.3000',
        phone: '081-300-1932',
        email: 'THZ@gmail.com',
        address: '44 หมู่ 1 ถนนเทวบุรี ต.โพธิ์เสด็จ อ.เมือง จ.นครศรีธรรมราช 80000',
        facebook: 'https://www.facebook.com/domekarnchang/',
        website: 'www.thz.co.th',
        metaTitle: 'THaiCraftworkZ - อุปกรณ์สนามเด็กเล่นคุณภาพ มอก.3000',
        metaDescription: 'ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่น โครงเหล็กชุบสังกะสี + พลาสติก LLDPE จัดส่งทั่วประเทศ บริการติดตั้งฟรี',
      },
    })

    return NextResponse.json({
      message: 'Seed completed successfully!',
      admin: {
        email: 'admin@thz.co.th',
        password: 'THZ-admin-2026',
      }
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
