import { getPageBySlug } from '@/lib/puck/fetchPages'
import PuckRenderer from '@/components/PuckRenderer'
import InlinePuckEditor from '@/components/InlinePuckEditor'
import AboutPageClient from './AboutPageClient'

export const metadata = {
  title: 'เกี่ยวกับเรา | THaiCraftworkZ',
  description: 'หจก.โดมการช่าง ผู้ผลิตและจำหน่ายอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน มอก.3000',
}

export default async function AboutPage() {
  const page = await getPageBySlug('/about')
  const layout = (page as any)?.layout

  if (layout && layout.content && layout.content.length > 0) {
    return (
      <InlinePuckEditor slug="/about" initialLayout={layout}>
        <PuckRenderer layout={layout} />
      </InlinePuckEditor>
    )
  }

  return (
    <InlinePuckEditor slug="/about" initialLayout={{ content: [], root: {}, zones: {} }}>
      <AboutPageClient />
    </InlinePuckEditor>
  )
}
