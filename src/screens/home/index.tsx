import { ProductConnection, useProductsQuery } from '@generated/graphql'
import { useSSRQuery } from '@hooks'
import React from 'react'
import Catalog from 'src/components/catalog'
import styled from 'styled-components'

const HomeScreen: React.FC = () => {
  const { data } = useSSRQuery(useProductsQuery, {
    variables: { locales: ['es'] } as any,
  })

  return (
    <Container>
      <Catalog products={data?.page as ProductConnection} />
    </Container>
  )
}

const Container = styled.div`
  min-height: 60vh;
`

export default HomeScreen
