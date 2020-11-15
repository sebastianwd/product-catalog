import React from 'react'
import { initializeApollo } from '@gql/apollo'
import { HomeScreen } from '@screens'
import productsQuery from '@gql/queries/products'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return <HomeScreen />
}

IndexPage.getInitialProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: productsQuery,
    variables: { locales: ['es'] },
  })

  return {
    initialApolloState: apolloClient.cache.extract(),
  }
}

export default IndexPage
