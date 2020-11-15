import styled, { useTheme } from 'styled-components'
import Image from 'next/image'
import Nav from '../nav'
import Typography from '../typography'
import Link from 'next/link'

interface Props {
  logo?: string
}

const Header: React.FC<Props> = (props) => {
  const { logo } = props

  const theme = useTheme()

  return (
    <StyledHeader>
      <ImageContainer>
        <Link href="/">
          <a>
            <Logo
              src={logo!}
              alt="Logo"
              height={theme.heights.header}
              width="auto"
            />
          </a>
        </Link>
      </ImageContainer>
      <StyledNav>
        <Typography variant="caption">Catálogo</Typography>
      </StyledNav>
    </StyledHeader>
  )
}

const StyledNav = styled(Nav)`
  margin-left: auto;
`

const Logo = styled(Image)`
  object-fit: contain;
  vertical-align: middle;
`

const ImageContainer = styled.div`
  max-width: ${(props) => props.theme.spacing(20)};
  overflow: visible;
`

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`

export default Header
