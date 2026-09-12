"use client";

import { useEffect, useRef, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";

// ═══════════════════════════════════════════════════════
// GrapesJS Visual Page Builder for THZ Website
// Drag-and-Drop editor with pre-built THZ blocks
// ═══════════════════════════════════════════════════════

interface GrapesJSEditorProps {
  pageSlug: string;
  initialHtml?: string;
  initialCss?: string;
  onSave?: (html: string, css: string) => void;
}

// THZ Brand Colors
const COLORS = {
  primary: "#2196F3",
  secondary: "#4CAF50",
  accent: "#FFC107",
  cta: "#FF5722",
  play: "#FF9800",
  bench: "#2196F3",
  furniture: "#8BC34A",
  dark: "#1A1A2E",
  textDark: "#1A1A2E",
  textGray: "#6B7280",
  bgLight: "#F8FAFC",
  white: "#FFFFFF",
};

export default function GrapesJSEditor({
  pageSlug,
  initialHtml = "",
  initialCss = "",
  onSave,
}: GrapesJSEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!editorRef.current || editor) return;

    const gjsEditor = grapesjs.init({
      container: editorRef.current,
      height: "100vh",
      width: "100%",
      storageManager: false,
      plugins: [],
      canvas: {
        styles: [
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&family=Kanit:wght@300;400;500;600;700&display=swap",
        ],
      },
      deviceManager: {
        devices: [
          { name: "Desktop", width: "" },
          { name: "Tablet", width: "768px", widthMedia: "992px" },
          { name: "Mobile", width: "375px", widthMedia: "480px" },
        ],
      },
      panels: {
        defaults: [],
      },
      blockManager: {
        custom: true,
      },
    });

    // ─── Add Top Panel with Save Button ───
    gjsEditor.Panels.addPanel({
      id: "top-panel",
      style: {
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        background: "#1a1a2e",
        gap: "10px",
      },
    } as any);

    // ─── Register THZ Blocks ───
    const bm = gjsEditor.BlockManager;

    // 1. Hero Block
    bm.add("thz-hero", {
      label: "HERO",
      category: "THZ Sections",
      content: `
        <section style="padding: 100px 0 60px; background: linear-gradient(135deg, #2196F3 0%, #1565C0 50%, #4CAF50 100%); position: relative; overflow: hidden;">
          <div style="position: absolute; inset: 0; opacity: 0.1; background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 30px 30px;"></div>
          <div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 0 24px; text-align: center;">
            <span style="display: inline-block; background: rgba(255,255,255,0.2); color: white; padding: 8px 20px; border-radius: 9999px; font-size: 14px; font-weight: 600; margin-bottom: 24px; font-family: 'Kanit', sans-serif;">EST. 2560 — PLAYGROUND EQUIPMENT</span>
            <h1 style="font-family: 'Montserrat', sans-serif; font-size: 56px; font-weight: 900; color: white; margin: 0 0 10px; line-height: 1.1;">สนามเด็กเล่น</h1>
            <h1 style="font-family: 'Montserrat', sans-serif; font-size: 56px; font-weight: 900; color: #FFC107; margin: 0 0 10px; line-height: 1.1;">คุณภาพ</h1>
            <h1 style="font-family: 'Montserrat', sans-serif; font-size: 56px; font-weight: 900; color: white; margin: 0 0 24px; line-height: 1.1;">มาตรฐาน <span style="background: #FFC107; color: #1A1A2E; padding: 4px 16px; border-radius: 8px; font-size: 32px;">มอก.3000</span></h1>
            <p style="font-family: 'Kanit', sans-serif; font-size: 18px; color: rgba(255,255,255,0.8); max-width: 600px; margin: 0 auto 32px;">ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน จัดส่งทั่วประเทศ พร้อมทีมติดตั้งฟรี</p>
            <a href="/contact" style="display: inline-block; background: #FFC107; color: #1A1A2E; padding: 16px 32px; border-radius: 9999px; font-weight: 700; font-size: 16px; text-decoration: none; font-family: 'Montserrat', sans-serif;">ขอใบเสนอราคาฟรี</a>
          </div>
        </section>
      `,
      attributes: { class: "gjs-block-hero" },
    });

    // 2. Stats Block
    bm.add("thz-stats", {
      label: "STATS",
      category: "THZ Sections",
      content: `
        <section style="padding: 40px 0; background: white;">
          <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px;">
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; text-align: center;">
              <div style="padding: 20px;">
                <p style="font-family: 'Montserrat', sans-serif; font-size: 36px; font-weight: 900; color: #2196F3; margin: 0 0 8px;">8+</p>
                <p style="font-family: 'Kanit', sans-serif; font-size: 14px; color: #6B7280; margin: 0;">ปีประสบการณ์</p>
              </div>
              <div style="padding: 20px;">
                <p style="font-family: 'Montserrat', sans-serif; font-size: 36px; font-weight: 900; color: #4CAF50; margin: 0 0 8px;">500+</p>
                <p style="font-family: 'Kanit', sans-serif; font-size: 14px; color: #6B7280; margin: 0;">โครงการทั่วประเทศ</p>
              </div>
              <div style="padding: 20px;">
                <p style="font-family: 'Montserrat', sans-serif; font-size: 36px; font-weight: 900; color: #FFC107; margin: 0 0 8px;">100%</p>
                <p style="font-family: 'Kanit', sans-serif; font-size: 14px; color: #6B7280; margin: 0;">ได้มาตรฐาน มอก.</p>
              </div>
              <div style="padding: 20px;">
                <p style="font-family: 'Montserrat', sans-serif; font-size: 36px; font-weight: 900; color: #FF5722; margin: 0 0 8px;">5 ปี</p>
                <p style="font-family: 'Kanit', sans-serif; font-size: 14px; color: #6B7280; margin: 0;">รับประกันสินค้า</p>
              </div>
            </div>
          </div>
        </section>
      `,
      attributes: { class: "gjs-block-stats" },
    });

    // 3. Brands Block
    bm.add("thz-brands", {
      label: "BRANDS",
      category: "THZ Sections",
      content: `
        <section style="padding: 80px 0; background: #F8FAFC;">
          <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px;">
            <div style="text-align: center; margin-bottom: 56px;">
              <span style="display: inline-block; background: rgba(33,150,243,0.1); color: #2196F3; padding: 8px 20px; border-radius: 9999px; font-size: 14px; font-weight: 600; margin-bottom: 16px; font-family: 'Kanit', sans-serif;">แบรนด์สินค้า</span>
              <h2 style="font-family: 'Montserrat', sans-serif; font-size: 36px; font-weight: 900; color: #1A1A2E; margin: 0;">3 แบรนด์คุณภาพ ครบวงจร</h2>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
              <div style="background: white; border-radius: 16px; padding: 32px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 4px solid #FF9800;">
                <div style="width: 64px; height: 64px; background: rgba(255,152,0,0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 32px;">🛝</div>
                <h3 style="font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 20px; color: #1A1A2E; margin: 0 0 8px;">THZ Play</h3>
                <p style="font-family: 'Kanit', sans-serif; font-size: 14px; color: #6B7280; margin: 0;">สไลเดอร์ ชิงช้า ปีนป่าย เครื่องเล่นเสริมพัฒนาการเด็ก</p>
              </div>
              <div style="background: white; border-radius: 16px; padding: 32px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 4px solid #2196F3;">
                <div style="width: 64px; height: 64px; background: rgba(33,150,243,0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 32px;">🪑</div>
                <h3 style="font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 20px; color: #1A1A2E; margin: 0 0 8px;">THZ Bench</h3>
                <p style="font-family: 'Kanit', sans-serif; font-size: 14px; color: #6B7280; margin: 0;">ม้านั่งโรงเรียน ม้านั่งสนาม โต๊ะโรงอาหาร</p>
              </div>
              <div style="background: white; border-radius: 16px; padding: 32px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border-top: 4px solid #8BC34A;">
                <div style="width: 64px; height: 64px; background: rgba(139,195,74,0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 32px;">🏠</div>
                <h3 style="font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 20px; color: #1A1A2E; margin: 0 0 8px;">THZ Furniture</h3>
                <p style="font-family: 'Kanit', sans-serif; font-size: 14px; color: #6B7280; margin: 0;">เฟอร์นิเจอร์สไตล์ Loft โต๊ะ เก้าอี้ ชั้นวาง ผลิตตามสั่ง</p>
              </div>
            </div>
          </div>
        </section>
      `,
      attributes: { class: "gjs-block-brands" },
    });

    // 4. Product Card Block
    bm.add("thz-product-card", {
      label: "PRODUCT CARD",
      category: "THZ Sections",
      content: `
        <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); transition: transform 0.3s;">
          <div style="position: relative; height: 220px; overflow: hidden;">
            <img src="/images/products/726606443_1405968788229183_6337553449482275185_n.jpg" alt="สินค้า THZ" style="width: 100%; height: 100%; object-fit: cover;" />
            <span style="position: absolute; top: 12px; left: 12px; background: #FF9800; color: white; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; font-family: 'Montserrat', sans-serif;">THZ Play</span>
          </div>
          <div style="padding: 20px;">
            <h3 style="font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 16px; color: #1A1A2E; margin: 0 0 8px;">สนามเด็กเล่นพลาสติกกันแดด ชุดใหญ่</h3>
            <p style="font-family: 'Kanit', sans-serif; font-size: 13px; color: #6B7280; margin: 0 0 16px; line-height: 1.5;">สนามเด็กเล่นรวม โครงเหล็กชุบสังกะสี + พลาสติก LLDPE มีสไลเดอร์ ชิงช้า บันไดปีน</p>
            <a href="/contact" style="display: inline-block; background: #2196F3; color: white; padding: 8px 20px; border-radius: 9999px; font-size: 13px; font-weight: 600; text-decoration: none; font-family: 'Montserrat', sans-serif;">ดูรายละเอียด</a>
          </div>
        </div>
      `,
      attributes: { class: "gjs-block-product" },
    });

    // 5. Gallery Image Block
    bm.add("thz-gallery", {
      label: "GALLERY IMAGE",
      category: "THZ Sections",
      content: `
        <div style="position: relative; border-radius: 12px; overflow: hidden; aspect-ratio: 1; cursor: pointer;">
          <img src="/images/products/473722342_3859970144244733_1267727839239141879_n.jpg" alt="ผลงานติดตั้ง" style="width: 100%; height: 100%; object-fit: cover;" />
          <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.7)); padding: 16px;">
            <span style="display: inline-block; background: rgba(76,175,80,0.9); color: white; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; margin-bottom: 6px; font-family: 'Montserrat', sans-serif;">สนามเด็กเล่น</span>
            <h4 style="color: white; font-family: 'Kanit', sans-serif; font-size: 13px; font-weight: 600; margin: 0;">สนามเด็กเล่นโรงเรียนเทศบาล</h4>
          </div>
        </div>
      `,
      attributes: { class: "gjs-block-gallery" },
    });

    // 6. WhyChooseUs Block
    bm.add("thz-why", {
      label: "WHY CHOOSE US",
      category: "THZ Sections",
      content: `
        <section style="padding: 80px 0; background: #F8FAFC;">
          <div style="max-width: 1200px; margin: 0 auto; padding: 0 24px;">
            <div style="text-align: center; margin-bottom: 56px;">
              <span style="display: inline-block; background: rgba(255,193,7,0.1); color: #FFC107; padding: 8px 20px; border-radius: 9999px; font-size: 14px; font-weight: 600; margin-bottom: 16px; font-family: 'Kanit', sans-serif;">ทำไมต้อง THZ</span>
              <h2 style="font-family: 'Montserrat', sans-serif; font-size: 36px; font-weight: 900; color: #1A1A2E; margin: 0;">คุณภาพระดับโลก ราคาที่เข้าถึงได้</h2>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
              <div style="background: white; border-radius: 16px; padding: 28px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
                <div style="width: 48px; height: 48px; background: rgba(33,150,243,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; font-size: 24px;">🛡️</div>
                <h3 style="font-family: 'Montserrat', sans-serif; font-weight: 700; color: #1A1A2E; margin: 0 0 8px; font-size: 16px;">ได้มาตรฐาน มอก.3000</h3>
                <p style="font-family: 'Kanit', sans-serif; font-size: 14px; color: #6B7280; margin: 0; line-height: 1.5;">อุปกรณ์ทุกชิ้นผ่านมาตรฐานความปลอดภัย มอก.3000</p>
              </div>
              <div style="background: white; border-radius: 16px; padding: 28px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
                <div style="width: 48px; height: 48px; background: rgba(76,175,80,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; font-size: 24px;">🚚</div>
                <h3 style="font-family: 'Montserrat', sans-serif; font-weight: 700; color: #1A1A2E; margin: 0 0 8px; font-size: 16px;">จัดส่งทั่วประเทศ</h3>
                <p style="font-family: 'Kanit', sans-serif; font-size: 14px; color: #6B7280; margin: 0; line-height: 1.5;">บริการจัดส่งฟรีทั่วประเทศไทย พร้อมทีมติดตั้ง</p>
              </div>
              <div style="background: white; border-radius: 16px; padding: 28px; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
                <div style="width: 48px; height: 48px; background: rgba(255,193,7,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; font-size: 24px;">🏆</div>
                <h3 style="font-family: 'Montserrat', sans-serif; font-weight: 700; color: #1A1A2E; margin: 0 0 8px; font-size: 16px;">รับประกัน 5 ปี</h3>
                <p style="font-family: 'Kanit', sans-serif; font-size: 14px; color: #6B7280; margin: 0; line-height: 1.5;">รับประกันสินค้าทุกชิ้นนาน 5 ปี พร้อมอะไหล่สำรอง</p>
              </div>
            </div>
          </div>
        </section>
      `,
      attributes: { class: "gjs-block-why" },
    });

    // 7. Testimonial Block
    bm.add("thz-testimonial", {
      label: "TESTIMONIAL",
      category: "THZ Sections",
      content: `
        <div style="background: white; border-radius: 16px; padding: 28px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); border-left: 4px solid #2196F3;">
          <p style="font-family: 'Kanit', sans-serif; font-size: 14px; color: #374151; line-height: 1.6; margin: 0 0 16px; font-style: italic;">"อุปกรณ์สนามเด็กเล่นคุณภาพมาก ติดตั้งเรียบร้อย เด็กๆ ชอบมาก ทีมงานบริการดีเยี่ยม"</p>
          <div>
            <p style="font-family: 'Montserrat', sans-serif; font-weight: 700; color: #1A1A2E; margin: 0; font-size: 14px;">โรงเรียนเทศบาลวัดเพชร</p>
            <p style="font-family: 'Kanit', sans-serif; font-size: 12px; color: #6B7280; margin: 0;">จ.นครศรีธรรมราช</p>
          </div>
        </div>
      `,
      attributes: { class: "gjs-block-testimonial" },
    });

    // 8. CTA Block
    bm.add("thz-cta", {
      label: "CTA",
      category: "THZ Sections",
      content: `
        <section style="padding: 80px 0; background: linear-gradient(135deg, #2196F3, #1565C0); position: relative; overflow: hidden;">
          <div style="position: absolute; inset: 0; opacity: 0.1;">
            <div style="position: absolute; top: 40px; left: 40px; width: 256px; height: 256px; background: #FFC107; border-radius: 50%; filter: blur(80px);"></div>
            <div style="position: absolute; bottom: 40px; right: 40px; width: 320px; height: 320px; background: white; border-radius: 50%; filter: blur(80px);"></div>
          </div>
          <div style="position: relative; max-width: 800px; margin: 0 auto; padding: 0 24px; text-align: center;">
            <h2 style="font-family: 'Montserrat', sans-serif; font-size: 36px; font-weight: 900; color: white; margin: 0 0 8px;">พร้อมสร้างสนามเด็กเล่น</h2>
            <h2 style="font-family: 'Montserrat', sans-serif; font-size: 36px; font-weight: 900; color: #FFC107; margin: 0 0 24px;">ในฝัน ของคุณ?</h2>
            <p style="font-family: 'Kanit', sans-serif; font-size: 18px; color: rgba(255,255,255,0.8); margin: 0 0 32px;">ติดต่อเราวันนี้เพื่อรับใบเสนอราคาฟรี ออกแบบและติดตั้งอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน จัดส่งทั่วประเทศ</p>
            <a href="tel:0813001932" style="display: inline-block; background: #FFC107; color: #1A1A2E; padding: 16px 32px; border-radius: 9999px; font-weight: 700; font-size: 16px; text-decoration: none; font-family: 'Montserrat', sans-serif;">โทรเลย 081-300-1932</a>
          </div>
        </section>
      `,
      attributes: { class: "gjs-block-cta" },
    });

    // 9. Contact Info Block
    bm.add("thz-contact", {
      label: "CONTACT INFO",
      category: "THZ Sections",
      content: `
        <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px;">
          <div style="width: 56px; height: 56px; background: rgba(33,150,243,0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 24px;">📞</div>
          <div>
            <h3 style="font-family: 'Montserrat', sans-serif; font-weight: 700; color: #1A1A2E; margin: 0 0 4px;">โทรศัพท์</h3>
            <a href="tel:0813001932" style="font-family: 'Kanit', sans-serif; color: #2196F3; text-decoration: none; font-weight: 500;">081-300-1932</a>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px;">
          <div style="width: 56px; height: 56px; background: rgba(6,199,85,0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 24px;">💬</div>
          <div>
            <h3 style="font-family: 'Montserrat', sans-serif; font-weight: 700; color: #1A1A2E; margin: 0 0 4px;">LINE</h3>
            <a href="https://line.me/ti/p/@THZ" style="font-family: 'Kanit', sans-serif; color: #2196F3; text-decoration: none; font-weight: 500;">@THZ</a>
          </div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px;">
          <div style="width: 56px; height: 56px; background: rgba(255,193,7,0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 24px;">✉️</div>
          <div>
            <h3 style="font-family: 'Montserrat', sans-serif; font-weight: 700; color: #1A1A2E; margin: 0 0 4px;">อีเมล</h3>
            <a href="mailto:THZ@gmail.com" style="font-family: 'Kanit', sans-serif; color: #2196F3; text-decoration: none; font-weight: 500;">THZ@gmail.com</a>
          </div>
        </div>
      `,
      attributes: { class: "gjs-block-contact" },
    });

    // 10. Contact Form Block
    bm.add("thz-form", {
      label: "CONTACT FORM",
      category: "THZ Sections",
      content: `
        <form style="background: white; border-radius: 24px; padding: 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);" onsubmit="return false;">
          <h2 style="font-family: 'Montserrat', sans-serif; font-size: 28px; font-weight: 900; color: #1A1A2E; margin: 0 0 8px;">แบบฟอร์มติดต่อ</h2>
          <p style="font-family: 'Kanit', sans-serif; font-size: 14px; color: #6B7280; margin: 0 0 24px;">กรอกข้อมูลด้านล่าง เราจะติดต่อกลับโดยเร็วที่สุด</p>
          <div style="margin-bottom: 16px;">
            <label style="display: block; font-family: 'Kanit', sans-serif; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 6px;">ชื่อ-นามสกุล *</label>
            <input type="text" placeholder="กรอกชื่อ-นามสกุล" style="width: 100%; padding: 12px 16px; border: 2px solid #E5E7EB; border-radius: 12px; font-family: 'Kanit', sans-serif; font-size: 14px; box-sizing: border-box;" />
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div>
              <label style="display: block; font-family: 'Kanit', sans-serif; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 6px;">อีเมล</label>
              <input type="email" placeholder="example@email.com" style="width: 100%; padding: 12px 16px; border: 2px solid #E5E7EB; border-radius: 12px; font-family: 'Kanit', sans-serif; font-size: 14px; box-sizing: border-box;" />
            </div>
            <div>
              <label style="display: block; font-family: 'Kanit', sans-serif; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 6px;">เบอร์โทรศัพท์ *</label>
              <input type="tel" placeholder="081-XXX-XXXX" style="width: 100%; padding: 12px 16px; border: 2px solid #E5E7EB; border-radius: 12px; font-family: 'Kanit', sans-serif; font-size: 14px; box-sizing: border-box;" />
            </div>
          </div>
          <div style="margin-bottom: 16px;">
            <label style="display: block; font-family: 'Kanit', sans-serif; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 6px;">รายละเอียด *</label>
            <textarea rows="4" placeholder="กรอกรายละเอียด เช่น ขนาดพื้นที่ จำนวนที่ต้องการ งบประมาณ..." style="width: 100%; padding: 12px 16px; border: 2px solid #E5E7EB; border-radius: 12px; font-family: 'Kanit', sans-serif; font-size: 14px; resize: vertical; box-sizing: border-box;"></textarea>
          </div>
          <button type="submit" style="width: 100%; background: #FFC107; color: #1A1A2E; padding: 14px; border: none; border-radius: 12px; font-weight: 700; font-size: 16px; cursor: pointer; font-family: 'Montserrat', sans-serif;">ส่งข้อความ</button>
        </form>
      `,
      attributes: { class: "gjs-block-form" },
    });

    // 11. Section Divider Block
    bm.add("thz-divider", {
      label: "DIVIDER",
      category: "THZ Sections",
      content: `
        <div style="padding: 40px 0; text-align: center;">
          <div style="width: 80px; height: 4px; background: linear-gradient(90deg, #2196F3, #4CAF50); margin: 0 auto; border-radius: 2px;"></div>
        </div>
      `,
      attributes: { class: "gjs-block-divider" },
    });

    // 12. Spacer Block
    bm.add("thz-spacer", {
      label: "SPACER",
      category: "THZ Sections",
      content: `<div style="height: 60px;"></div>`,
      attributes: { class: "gjs-block-spacer" },
    });

    // ─── Load initial content ───
    if (initialHtml) {
      const wrapper = gjsEditor.DomComponents.getWrapper();
      if (wrapper) wrapper.set("content", initialHtml);
    }
    if (initialCss) {
      gjsEditor.CssComposer.addRules(initialCss);
    }

    // ─── Custom Styles for blocks ───
    gjsEditor.CssComposer.addRules(`
      * { box-sizing: border-box; }
      body { margin: 0; font-family: 'Kanit', sans-serif; }
      .gjs-block { min-height: 60px !important; }
      .gjs-block-label { font-family: 'Montserrat', sans-serif !important; font-size: 11px !important; }
      .gjs-category-title { font-family: 'Montserrat', sans-serif !important; }
    `);

    setEditor(gjsEditor);

    return () => {
      gjsEditor.destroy();
    };
  }, []);

  // ─── Save Handler ───
  const handleSave = async () => {
    if (!editor) return;
    setSaving(true);
    try {
      const html = editor.DomComponents.getWrapper().get("content") || editor.getHtml();
      const css = editor.CssComposer.getRules().map((r: any) => r.get("selectors").map((s: any) => s.get("name")).join(",") + "{" + r.get("properties").map((p: any) => `${p.get("name")}:${p.get("value")}`).join(";") + "}").join("\n");

      const savedHtml = editor.getHtml();
      const savedCss = editor.getCss();

      if (onSave) {
        await onSave(savedHtml, savedCss);
      }

      // Save via API
      const listRes = await fetch(`/api/puck/pages?where[slug][equals]=${encodeURIComponent(pageSlug)}`);
      const listData = await listRes.json();
      const existing = listData.docs?.[0];

      const payload = {
        html: savedHtml,
        css: savedCss,
        slug: pageSlug,
        title: pageSlug === "/" ? "หน้าแรก" : pageSlug.replace("/", "").replace(/-/g, " "),
        published: true,
      };

      if (existing) {
        await fetch(`/api/puck/pages/${existing.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ layout: { html: savedHtml, css: savedCss } }),
        });
      } else {
        await fetch("/api/puck/pages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      console.error("Save error:", err);
      alert("เกิดข้อผิดพลาดในการบันทึก");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Custom Top Bar */}
      <div style={{
        background: "#1a1a2e",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "'Montserrat', sans-serif",
        zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontWeight: 800, fontSize: "16px" }}>✏️ THZ Page Builder</span>
          <span style={{ fontSize: "12px", color: "#9CA3AF" }}>หน้า: {pageSlug}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {saved && (
            <span style={{ color: "#4CAF50", fontSize: "13px" }}>✅ บันทึกแล้ว</span>
          )}
          <a
            href={pageSlug}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#374151",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            👁️ ดูหน้าเว็บ
          </a>
          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              background: saving ? "#6B7280" : "#2196F3",
              color: "white",
              padding: "8px 20px",
              borderRadius: "8px",
              border: "none",
              fontSize: "13px",
              fontWeight: 700,
              cursor: saving ? "not-allowed" : "pointer",
            }}
          >
            {saving ? "⏳ กำลังบันทึก..." : "💾 บันทึก / เผยแพร่"}
          </button>
        </div>
      </div>
      {/* GrapesJS Canvas */}
      <div ref={editorRef} style={{ flex: 1 }} />
    </div>
  );
}
