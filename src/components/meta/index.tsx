import { NextSeo, NextSeoProps, ProductJsonLd } from 'next-seo'
import { MetaQuery, Product } from '@generated/graphql'

interface Props extends NextSeoProps {
  meta?: MetaQuery
  product?: Partial<Product>
}

const Meta: React.FC<Props> = (props) => {
  const { meta, product, ...rest } = props

  const metaValues = meta?.values

  const seoImage = product?.images?.[0] || metaValues?.seoImage

  const title = product?.name || metaValues?.seoTitle

  return (
    <>
      <NextSeo
        title={title}
        description={meta?.values?.seoDescription}
        openGraph={{
          type: 'website',
          locale: 'es_LA',
          site_name: meta?.values?.siteName,
          images: [
            {
              url: seoImage?.url || '',
              width: seoImage?.width,
              height: seoImage?.height,
              alt: seoImage?.fileName,
            },
          ],
        }}
        {...rest}
      />
      {product && (
        <ProductJsonLd
          productName={product.name || ''}
          images={[product.images?.[0].url || '']}
          description={product.description?.text || ''}
          brand={meta?.values?.siteName}
        />
      )}
    </>
  )
}

export default Meta
