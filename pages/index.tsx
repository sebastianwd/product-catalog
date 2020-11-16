import React from 'react'
import { initializeApollo } from '@gql/apollo'
import { HomeScreen } from '@screens'
import productsQuery from '@gql/queries/products'
import { NextPage } from 'next'
import { MetaQuery } from '@generated/graphql'
import { Meta } from '@components'

interface Props {
  meta?: MetaQuery
}

const IndexPage: NextPage<Props> = (props) => {
  const { meta } = props

  return (
    <>
      <Meta meta={meta} />
      <HomeScreen />
    </>
  )
}

IndexPage.getInitialProps = async (ctx) => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: productsQuery,
    variables: { locales: ['es'] },
  })

  return {
    initialApolloState: apolloClient.cache.extract(),
    meta: ctx.meta,
  }
}

export default IndexPage
