import { gql } from '@apollo/client'
import { productFragment } from '@gql/fragments'

const productQuery = gql`
  query product($where: ProductWhereInput, $locales: [Locale!]!) {
    page: productsConnection(
      first: 1
      stage: PUBLISHED
      where: $where
      locales: $locales
    ) {
      edges {
        node {
          ...product
          description {
            html
          }
        }
      }
      aggregate {
        count
      }
    }
  }
  ${productFragment}
`

export default productQuery
