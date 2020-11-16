import { Typography, Icon } from '@components'
import { Product } from '@generated/graphql'
import { getWhatsappUrl } from '@utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import Button from 'src/components/button'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

interface Props {
  product: Partial<Product>
}

const ProductScreen: React.FC<Props> = (props) => {
  const { product } = props

  const productName = product.name!.toLowerCase()

  return (
    <Container
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Content>
        <ImageSection>
          <ImageContainer>
            <Image
              src={product.images?.[0].url || '/product-image-fallback.jpg'}
              height="auto"
              width="auto"
            />
          </ImageContainer>
        </ImageSection>
        <Info>
          <ProductName variant="h2" tag="h1" gutterBottom={2}>
            {productName}
          </ProductName>
          <Description
            dangerouslySetInnerHTML={{
              __html: product.description?.html as string,
            }}
          />
          <a
            href={getWhatsappUrl({
              phone: '546',
              message: `Hola, estoy interesado en el producto "${productName}"`,
            })}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button
              width={33}
              variant="whatsapp"
              icon={<Icon name="whatsapp" fill="white" />}
            >
              Consulta por este producto
            </Button>
          </a>
        </Info>
      </Content>
    </Container>
  )
}

const ImageSection = styled.div`
  text-transform: capitalize;
  padding-right: ${(props) => props.theme.spacing(6)};
  height: ${(props) => props.theme.spacing(64)};
  width: 40%;

  ${down('sm')} {
    width: 100%;
    height: ${(props) => props.theme.spacing(48)};
    padding-right: 0;
  }
`

const ProductName = styled(Typography)`
  text-transform: capitalize;
`

const Description = styled.div`
  p {
    ${(props) => ({ ...props.theme.variants.body1 })}
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;

  ${ProductName} {
    margin-top: ${(props) => props.theme.spacing(2)};
  }

  ${Description} {
    margin-bottom: ${(props) => props.theme.spacing(3)};
  }
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background.main};

  > div {
    width: 100%;
  }

  img {
    object-fit: contain;
  }
`

const Content = styled.div`
  display: flex;

  ${down('sm')} {
    flex-direction: column;
  }
`

const Container = styled(motion.div)`
  min-height: 60vh;
`

export default ProductScreen
