import { getPageBySlug } from '@/lib/puck/fetchPages'
import PuckRenderer from '@/components/PuckRenderer'
import InlinePuckEditor from '@/components/InlinePuckEditor'
import ContactPageClient from './ContactPageClient'

export const metadata = {
  title: 'ติดต่อเรา | THaiCraftworkZ',
  description: 'ติดต่อ หจก.โดมการช่าง ผู้ผลิตอุปกรณ์สนามเด็กเล่นคุณภาพมาตรฐาน มอก.3000',
}

export default async function ContactPage() {
  const page = await getPageBySlug('/contact')
  const layout = (page as any)?.layout

  if (layout && layout.content && layout.content.length > 0) {
    return (
      <InlinePuckEditor slug="/contact" initialLayout={layout}>
        <PuckRenderer layout={layout} />
      </InlinePuckEditor>
    )
  }

  return (
    <InlinePuckEditor slug="/contact" initialLayout={{ content: [], root: {}, zones: {} }}>
      <ContactPageClient />
    </InlinePuckEditor>
  )
}
