import { getPageBySlug } from '@/lib/puck/fetchPages'
import PuckRenderer from '@/components/PuckRenderer'
import ProductsPageClient from './ProductsPageClient'

export const metadata = {
  title: 'สินค้าของเรา | THaiCraftworkZ',
  description: 'อุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน มอก.3000 — THZ Play, THZ Bench, THZ Furniture',
}

export default async function ProductsPage() {
  const page = await getPageBySlug('/products')
  const layout = (page as any)?.layout

  if (layout && layout.content && layout.content.length > 0) {
    return <PuckRenderer layout={layout} />
  }

  return <ProductsPageClient />
}
