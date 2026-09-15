interface ProductSchemaProps {
  name: string
  description: string
  image?: string
  price: string
  brand?: string
  url?: string
}

export default function ProductSchema({
  name,
  description,
  image = '/images/products/726606443_1405968788229183_6337553449482275185_n.jpg',
  price,
  brand = 'THZ',
  url,
}: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'THB',
      price: price.replace(/[^0-9.]/g, ''),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'หจก.โดมการช่าง THaiCraftworkZ (THZ)',
      },
    },
    ...(url && { url }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
