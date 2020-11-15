/* eslint-disable no-underscore-dangle */
import { useMemo } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const isBrowser = typeof window !== 'undefined'

function createApolloClient() {
  return new ApolloClient({
    ssrMode: !isBrowser,
    connectToDevTools: isBrowser,
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHCMS_URL,
      // credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(
  initialState: NormalizedCacheObject | null = null
): ApolloClient<NormalizedCacheObject> {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps

    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (!isBrowser) return _apolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(
  initialState: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
