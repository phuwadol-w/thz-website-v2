import { getPageBySlug } from '@/lib/puck/fetchPages'
import PuckRenderer from '@/components/PuckRenderer'
import InlinePuckEditor from '@/components/InlinePuckEditor'
import GalleryPageClient from './GalleryPageClient'

export const metadata = {
  title: 'ผลงานของเรา | THaiCraftworkZ',
  description: 'ชมผลงานการผลิตและติดตั้งอุปกรณ์สนามเด็กเล่น สนามเด็กเล่นพลาสติกกันแดด ม้านั่งโรงเรียน ทั่วประเทศ',
}

export default async function GalleryPage() {
  const page = await getPageBySlug('/gallery')
  const layout = (page as any)?.layout

  if (layout && layout.content && layout.content.length > 0) {
    return (
      <InlinePuckEditor slug="/gallery" initialLayout={layout}>
        <PuckRenderer layout={layout} />
      </InlinePuckEditor>
    )
  }

  return (
    <InlinePuckEditor slug="/gallery" initialLayout={{ content: [], root: {}, zones: {} }}>
      <GalleryPageClient />
    </InlinePuckEditor>
  )
}
