import PageRenderer from "@/components/PageRenderer";
import { getPageBySlug } from "@/lib/puck/fetchPages";
import ProductsPageClient from "./ProductsPageClient";

export const metadata = {
  title: "สินค้าของเรา | THaiCraftworkZ",
  description: "อุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน มอก.3000 — THZ Play, THZ Bench, THZ Furniture",
};

export default async function ProductsPage() {
  const page = await getPageBySlug("/products");
  const layout = (page as any)?.layout || null;
  return <PageRenderer slug="/products" layout={layout} fallback={<ProductsPageClient />} />;
}
