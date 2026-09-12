"use client";

import { Config } from "@puckeditor/core";
import HeroComponent from "./components/Hero";
import StatsComponent from "./components/Stats";
import BrandsComponent from "./components/Brands";
import ProductsComponent from "./components/Products";
import GalleryComponent from "./components/Gallery";
import WhyChooseUsComponent from "./components/WhyChooseUs";
import TestimonialsComponent from "./components/Testimonials";
import CTAComponent from "./components/CTA";
import NavbarComponent from "./components/NavbarBlock";
import FooterComponent from "./components/FooterBlock";

// ═══════════════════════════════════════════════════════
// Puck Config for THZ Website
// ═══════════════════════════════════════════════════════

// Helper: extract only the component props (ignore Puck internal props)
function extractProps<T>(props: any): T {
  const { puck, editMode, id, ...rest } = props;
  return rest as T;
}

export const puckConfig: Config = {
  components: {
    Hero: {
      fields: {
        badge: { type: "text", label: "Badge Text" },
        headline1: { type: "text", label: "Headline 1" },
        headline2: { type: "text", label: "Headline 2 (Gold)" },
        headline3: { type: "text", label: "Headline 3" },
        standard: { type: "text", label: "Standard Badge" },
        subtext: { type: "textarea", label: "Subtext" },
        ctaText: { type: "text", label: "CTA Button Text" },
        ctaLink: { type: "text", label: "CTA Button Link" },
        imageUrl: { type: "text", label: "Image URL" },
      },
      defaultProps: {
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
      render: (props) => <HeroComponent {...extractProps<any>(props)} />,
    },
    Stats: {
      fields: {
        items: {
          type: "array",
          label: "Stat Items",
          arrayFields: {
            number: { type: "text", label: "Number" },
            label: { type: "text", label: "Label" },
            icon: {
              type: "select",
              label: "Icon",
              options: [
                { label: "Award", value: "Award" },
                { label: "CheckCircle", value: "CheckCircle" },
                { label: "Shield", value: "Shield" },
                { label: "Star", value: "Star" },
              ],
            },
          },
          defaultItemProps: { number: "8+", label: "ปีประสบการณ์", icon: "Award" },
        },
      },
      defaultProps: {
        items: [
          { number: "8+", label: "ปีประสบการณ์", icon: "Award" },
          { number: "500+", label: "โครงการทั่วประเทศ", icon: "CheckCircle" },
          { number: "100%", label: "ได้มาตรฐาน มอก.", icon: "Shield" },
          { number: "5 ปี", label: "รับประกันสินค้า", icon: "Star" },
        ],
      },
      render: (props) => <StatsComponent {...extractProps<any>(props)} />,
    },
    Brands: {
      fields: {
        title: { type: "text", label: "Section Title" },
        items: {
          type: "array",
          label: "Brand Items",
          arrayFields: {
            name: { type: "text", label: "Brand Name" },
            slug: { type: "text", label: "Slug" },
            description: { type: "text", label: "Description" },
            color: { type: "text", label: "Color (hex)" },
            badge: { type: "text", label: "Badge Text" },
            link: { type: "text", label: "Link" },
            imageUrl: { type: "text", label: "Image URL" },
          },
          defaultItemProps: { name: "THZ Play", slug: "play", description: "", color: "#2196F3", badge: "PLAY", link: "/products?cat=play", imageUrl: "" },
        },
      },
      defaultProps: {
        title: "3 แบรนด์คุณภาพ ครบวงจร",
        items: [
          { name: "THZ Play", slug: "play", description: "สไลเดอร์ ชิงช้า ปีนป่าย เครื่องเล่นเสริมพัฒนาการเด็ก", color: "#2196F3", badge: "PLAYGROUND", link: "/products?cat=play", imageUrl: "" },
          { name: "THZ Bench", slug: "bench", description: "ม้านั่งโรงเรียน ม้านั่งสนาม โต๊ะโรงอาหาร", color: "#4CAF50", badge: "BENCH", link: "/products?cat=bench", imageUrl: "" },
          { name: "THZ Furniture", slug: "furniture", description: "เฟอร์นิเจอร์สไตล์ Loft โต๊ะ เก้าอี้ ชั้นวาง ผลิตตามสั่ง", color: "#FF9800", badge: "FURNITURE", link: "/products?cat=furniture", imageUrl: "" },
        ],
      },
      render: (props) => <BrandsComponent {...extractProps<any>(props)} />,
    },
    Products: {
      fields: {
        title: { type: "text", label: "Section Title" },
        subtitle: { type: "text", label: "Subtitle Badge" },
        description: { type: "textarea", label: "Description" },
        items: {
          type: "array",
          label: "Product Items",
          arrayFields: {
            title: { type: "text", label: "Product Name" },
            description: { type: "text", label: "Description" },
            imageUrl: { type: "text", label: "Image URL" },
            badge: { type: "text", label: "Badge" },
            category: { type: "text", label: "Category" },
            accentColor: { type: "text", label: "Accent Color" },
          },
          defaultItemProps: { title: "สินค้า", description: "", imageUrl: "", badge: "", category: "THZ", accentColor: "#2196F3" },
        },
      },
      defaultProps: { title: "สินค้าขายดีของเรา", subtitle: "สินค้าแนะนำ", description: "", items: [] },
      render: (props) => <ProductsComponent {...extractProps<any>(props)} />,
    },
    Gallery: {
      fields: {
        title: { type: "text", label: "Section Title" },
        subtitle: { type: "text", label: "Subtitle Badge" },
        items: {
          type: "array",
          label: "Gallery Items",
          arrayFields: {
            imageUrl: { type: "text", label: "Image URL" },
            location: { type: "text", label: "Caption" },
            category: { type: "text", label: "Category" },
          },
          defaultItemProps: { imageUrl: "", location: "ผลงาน", category: "สนามเด็กเล่น" },
        },
      },
      defaultProps: { title: "ผลงานติดตั้งทั่วประเทศ", subtitle: "ผลงานของเรา", items: [] },
      render: (props) => <GalleryComponent {...extractProps<any>(props)} />,
    },
    WhyChooseUs: {
      fields: {
        title: { type: "text", label: "Section Title" },
        subtitle: { type: "text", label: "Subtitle Badge" },
        items: {
          type: "array",
          label: "Feature Items",
          arrayFields: {
            title: { type: "text", label: "Title" },
            description: { type: "text", label: "Description" },
            icon: {
              type: "select",
              label: "Icon",
              options: [
                { label: "Shield", value: "Shield" },
                { label: "Truck", value: "Truck" },
                { label: "Award", value: "Award" },
                { label: "Heart", value: "Heart" },
                { label: "Users", value: "Users" },
                { label: "Wrench", value: "Wrench" },
              ],
            },
          },
          defaultItemProps: { title: "", description: "", icon: "Shield" },
        },
      },
      defaultProps: {
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
      render: (props) => <WhyChooseUsComponent {...extractProps<any>(props)} />,
    },
    Testimonials: {
      fields: {
        title: { type: "text", label: "Section Title" },
        items: {
          type: "array",
          label: "Testimonials",
          arrayFields: {
            name: { type: "text", label: "Customer Name" },
            role: { type: "text", label: "Location" },
            text: { type: "textarea", label: "Text" },
            rating: { type: "number", label: "Rating", min: 1, max: 5 },
          },
          defaultItemProps: { name: "ลูกค้า", role: "", text: "", rating: 5 },
        },
      },
      defaultProps: {
        title: "ลูกค้าของเราไว้วางใจ",
        items: [
          { name: "โรงเรียนเทศบาลวัดเพชร", role: "จ.นครศรีธรรมราช", text: "อุปกรณ์สนามเด็กเล่นคุณภาพมาก ติดตั้งเรียบร้อย เด็กๆ ชอบมาก", rating: 5 },
          { name: "เทศบาลตำบลโพธิ์เสด็จ", role: "จ.นครศรีธรรมราช", text: "สั่งม้านั่งโรงเรียน 20 ชุด คุณภาพดี ราคาโรงงาน", rating: 5 },
          { name: "โรงเรียนวัดพระธาตุ", role: "จ.นครศรีธรรมราช", text: "สนามเด็กเล่นพลาสติกกันแดด สวยมาก ทนทาน", rating: 5 },
        ],
      },
      render: (props) => <TestimonialsComponent {...extractProps<any>(props)} />,
    },
    CTA: {
      fields: {
        title: { type: "text", label: "Title" },
        subtitle: { type: "text", label: "Subtitle (Gold)" },
        description: { type: "textarea", label: "Description" },
        phoneText: { type: "text", label: "Phone Button Text" },
      },
      defaultProps: { title: "พร้อมสร้างสนามเด็กเล่น", subtitle: "ในฝัน ของคุณ?", description: "", phoneText: "โทรเลย 081-300-1932" },
      render: (props) => <CTAComponent {...extractProps<any>(props)} />,
    },
    NavbarBlock: {
      fields: {
        brandName: { type: "text", label: "Brand Name" },
      },
      defaultProps: { brandName: "THaiCraftworkZ" },
      render: (props) => <NavbarComponent {...extractProps<any>(props)} />,
    },
    FooterBlock: {
      fields: {
        description: { type: "textarea", label: "Description" },
        copyright: { type: "text", label: "Copyright" },
      },
      defaultProps: { description: "หจก.โดมการช่าง", copyright: "สงวนลิขสิทธิ์" },
      render: (props) => <FooterComponent {...extractProps<any>(props)} />,
    },
  },
};
