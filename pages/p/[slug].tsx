import React from 'react'
import { NextPage } from 'next'
import { initializeApollo } from '@gql/apollo'
import { ProductScreen } from '@screens'
import { productQuery } from '@gql/queries'
import { MetaQuery, Product } from '@generated/graphql'
import { Meta } from '@components'

interface Props {
  product: Partial<Product>
  meta?: MetaQuery
}

const ProductPage: NextPage<Props> = (props) => {
  const { product, meta } = props

  return (
    <>
      <Meta product={product} meta={meta} />
      <ProductScreen product={product} />
    </>
  )
}

ProductPage.getInitialProps = async (ctx) => {
  try {
    const apolloClient = initializeApollo()

    const { data } = await apolloClient.query({
      query: productQuery,
      variables: {
        locales: ['es'],
        where: { slug: decodeURIComponent(ctx.query.slug as string) },
        first: 1,
      },
    })

    const product = data?.page.edges[0]?.node

    if (!product && ctx.res) {
      ctx.res.statusCode = 404
    }

    return {
      product,
      meta: ctx.meta,
    }
  } catch (error) {
    throw new Error(error)
  }
}

export default ProductPage
