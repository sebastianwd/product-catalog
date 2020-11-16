import { ProductConnection, useProductsQuery } from '@generated/graphql'
import { useSSRQuery } from '@hooks'
import React from 'react'
import Catalog from 'src/components/catalog'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HomeScreen: React.FC = () => {
  const { data } = useSSRQuery(useProductsQuery, {
    variables: { locales: ['es'] } as any,
  })

  return (
    <Container
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Catalog products={data?.page as ProductConnection} />
    </Container>
  )
}

const Container = styled(motion.div)`
  min-height: 60vh;
`

export default HomeScreen
