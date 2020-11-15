import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { initializeApollo } from '@gql/apollo'
import { useSSRQuery } from '@hooks'
import { Product, useProductQuery } from '@generated/graphql'
import { ProductScreen } from '@screens'
import { productQuery } from '@gql/queries'

const productQueryVariables = (slug: string) => ({
  locales: ['es'],
  where: { slug: decodeURIComponent(slug) },
  first: 1,
})

const ProductPage: NextPage = () => {
  const route = useRouter()

  const { data, loading } = useSSRQuery(useProductQuery, {
    variables: productQueryVariables(route.query.slug as string) as any,
  })

  if (loading) {
    return null
  }

  return <ProductScreen product={data?.page.edges[0].node as Product} />
}

ProductPage.getInitialProps = async (ctx) => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: productQuery,
    variables: productQueryVariables(ctx.query.slug as string),
  })

  return {
    initialApolloState: apolloClient.cache.extract(),
  }
}

export default ProductPage
