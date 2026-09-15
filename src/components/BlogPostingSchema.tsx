interface BlogPostingSchemaProps {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
  author?: string
}

export default function BlogPostingSchema({
  title,
  description,
  datePublished,
  dateModified,
  image = '/images/products/726606443_1405968788229183_6337553449482275185_n.jpg',
  url,
  author = 'หจก.โดมการช่าง THZ',
}: BlogPostingSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://thz-website-v2.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'หจก.โดมการช่าง THaiCraftworkZ (THZ)',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thz-website-v2.vercel.app/images/products/726606443_1405968788229183_6337553449482275185_n.jpg',
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
