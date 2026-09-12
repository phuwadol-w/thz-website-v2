import PageRenderer from "@/components/PageRenderer";
import { getPageBySlug } from "@/lib/puck/fetchPages";
import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: "ติดต่อเรา | THaiCraftworkZ",
  description: "ติดต่อ หจก.โดมการช่าง ผู้ผลิตอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน มอก.3000",
};

export default async function ContactPage() {
  const page = await getPageBySlug("/contact");
  const layout = (page as any)?.layout || null;
  return <PageRenderer slug="/contact" layout={layout} fallback={<ContactPageClient />} />;
}
