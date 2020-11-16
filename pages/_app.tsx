import React from 'react'
import App, { AppContext, AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { AppProvider } from '@providers'
import { MainLayout } from 'src/layouts'
import 'ress/dist/ress.min.css'
import 'bootstrap-4-grid/css/grid.css'
import { initializeApollo } from '@gql/apollo'
import { metaQuery } from '@gql/queries'
import { MetaQuery } from '@generated/graphql'
import { assign } from 'lodash'

function MyApp(props: AppProps & { meta: MetaQuery }) {
  const { Component, pageProps, meta, router } = props

  return (
    <AppProvider {...props}>
      <MainLayout meta={meta}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </AppProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const apolloClient = initializeApollo()

  const meta = await apolloClient.query<MetaQuery>({
    query: metaQuery,
    variables: { id: process.env.NEXT_PUBLIC_GRAPHCMS_META_ID },
  })

  assign(appContext.ctx, { meta: meta.data })

  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps, meta: meta.data }
}

export default MyApp
