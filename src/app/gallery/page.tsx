import PageRenderer from "@/components/PageRenderer";
import { getPageBySlug } from "@/lib/puck/fetchPages";
import GalleryPageClient from "./GalleryPageClient";

export const metadata = {
  title: "ผลงานของเรา | THaiCraftworkZ",
  description: "ชมผลงานการผลิตและติดตั้งอุปกรณ์สนามเด็กเล่น สนามเด็กเล่นพลาสติกกันแดด ม้านั่งโรงเรียน ทั่วประเทศ",
};

export default async function GalleryPage() {
  const page = await getPageBySlug("/gallery");
  const layout = (page as any)?.layout || null;
  return <PageRenderer slug="/gallery" layout={layout} fallback={<GalleryPageClient />} />;
}
