import styled, { css, useTheme } from 'styled-components'
import Image from 'next/image'
import { NavLink } from '@components'
import Link from 'next/link'
import Nav from '../nav'
import Typography from '../typography'

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
        <NavLink href="/" passHref>
          <NavLinkText variant="caption" color="secondary" tag="a">
            Catálogo
          </NavLinkText>
        </NavLink>
      </StyledNav>
    </StyledHeader>
  )
}

const NavLinkText = styled(Typography)<{ isActive?: boolean }>`
  margin-left: auto;
  transition: all 0.2s ease-in;

  &:hover {
    color: ${(props) => props.theme.colors.text.main};
  }

  ${(props) =>
    props.isActive &&
    css`
      color: ${props.theme.colors.text.main};
    `}
`

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
