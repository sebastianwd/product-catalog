import { gql } from '@apollo/client'
import graphcmsAssetFragment from './graphcms-asset'

const productFragment = gql`
  fragment product on Product {
    id
    name
    price
    slug
    category {
      entryId: id
      name
    }
    images {
      ...asset
    }
  }
  ${graphcmsAssetFragment}
`

export default productFragment
