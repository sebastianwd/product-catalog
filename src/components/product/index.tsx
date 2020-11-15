import styled, { useTheme } from 'styled-components'
import { down } from 'styled-breakpoints'
import Image from 'next/image'
import Typography from '../typography'

interface Props {
  name?: string
  image?: string
}

const Product: React.FC<Props> = (props) => {
  const { name, image } = props

  const theme = useTheme()

  return (
    <Container>
      <ImageContainer>
        <Image src={image!} alt={name} height="auto" width="auto" />
      </ImageContainer>
      <div>
        <ProductName variant="subtitle2" align="center">
          {name?.toLowerCase()}
        </ProductName>
      </div>
    </Container>
  )
}

const ProductName = styled(Typography)`
  text-transform: capitalize;
`

const Container = styled.div`
  border-radius: ${(props) => props.theme.spacing(1)};
  background-color: ${(props) => props.theme.colors.background.main};
  margin: 0 auto;
  height: ${(props) => props.theme.spacing(44)};

  padding: ${(props) => props.theme.spacing(1)};

  ${down('sm')} {
    height: ${(props) => props.theme.spacing(33)};
    max-width: 100%;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: ${(props) => props.theme.spacing(36)};

  ${down('sm')} {
    height: ${(props) => props.theme.spacing(26)};
  }

  img {
    object-fit: contain;
  }
`

export default Product
