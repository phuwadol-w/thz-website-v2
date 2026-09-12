import PageRenderer from "@/components/PageRenderer";
import { getPageBySlug } from "@/lib/puck/fetchPages";
import AboutPageClient from "./AboutPageClient";

export const metadata = {
  title: "เกี่ยวกับเรา | THaiCraftworkZ",
  description: "หจก.โดมการช่าง ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน มอก.3000",
};

export default async function AboutPage() {
  const page = await getPageBySlug("/about");
  const layout = (page as any)?.layout || null;
  return <PageRenderer slug="/about" layout={layout} fallback={<AboutPageClient />} />;
}
