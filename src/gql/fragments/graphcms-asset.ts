import { gql } from '@apollo/client'

const graphcmsAssetFragment = gql`
  fragment asset on Asset {
    id
    fileName
    mimeType
    width
    height
    url
  }
`

export default graphcmsAssetFragment
