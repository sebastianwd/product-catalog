import { gql } from '@apollo/client'
import { graphcmsAssetFragment } from '@gql/fragments'

const metaQuery = gql`
  query meta($id: ID!) {
    values: meta(where: { id: $id }, stage: PUBLISHED) {
      id
      siteName
      seoTitle
      seoDescription
      logo {
        ...asset
      }
      seoImage {
        ...asset
      }
    }
  }
  ${graphcmsAssetFragment}
`

export default metaQuery
