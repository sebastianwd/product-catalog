import { gql } from '@apollo/client'
import { productFragment } from '@gql/fragments'

const productsQuery = gql`
  query products(
    $first: Int
    $skip: Int
    $where: ProductWhereInput
    $orderBy: ProductOrderByInput
    $locales: [Locale!]!
  ) {
    page: productsConnection(
      first: $first
      skip: $skip
      stage: PUBLISHED
      where: $where
      orderBy: $orderBy
      locales: $locales
    ) {
      edges {
        node {
          ...product
        }
      }
      aggregate {
        count
      }
    }
  }
  ${productFragment}
`

export default productsQuery
