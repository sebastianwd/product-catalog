import React from 'react'
import App, { AppContext, AppProps } from 'next/app'
import { AppProvider } from '@providers'
import { MainLayout } from 'src/layouts'
import 'ress/dist/ress.min.css'
import 'bootstrap-4-grid/css/grid.css'
import { initializeApollo } from '@gql/apollo'
import { metaQuery } from '@gql/queries'
import { MetaQuery } from '@generated/graphql'

function MyApp(props: AppProps & { meta: MetaQuery }) {
  const { Component, pageProps, meta } = props

  return (
    <AppProvider {...props}>
      <MainLayout meta={meta}>
        <Component {...pageProps} />
      </MainLayout>
    </AppProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  const apolloClient = initializeApollo(appProps.pageProps?.initialApolloState)

  const meta = await apolloClient.query<MetaQuery>({
    query: metaQuery,
    variables: { id: process.env.NEXT_PUBLIC_GRAPHCMS_META_ID },
  })

  return { ...appProps, meta: meta.data }
}

export default MyApp
