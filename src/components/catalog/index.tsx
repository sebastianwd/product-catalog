import Link from 'next/link'
import styled from 'styled-components'
import { ProductConnection } from '@generated/graphql'
import Product from '../product'

interface Props {
  products?: ProductConnection
}

const Catalog: React.FC<Props> = (props) => {
  const { products } = props

  return (
    <Row className="row">
      {products?.edges.map((product) => {
        return (
          <article key={product.node.id} className="col-6 col-xl-4">
            <Link
              href={{
                pathname: '/p/[slug]',
                query: { slug: product.node.slug },
              }}
            >
              <a>
                <Product
                  name={product.node.name}
                  image={product.node.images[0].url}
                />
              </a>
            </Link>
          </article>
        )
      })}
    </Row>
  )
}

const Row = styled.div`
  > :not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing(2)};
  }
`

export default Catalog
