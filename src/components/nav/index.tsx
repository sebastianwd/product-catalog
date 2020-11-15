import styled from 'styled-components'

const Nav: React.FC = (props) => {
  const { children, ...rest } = props

  return <StyledNav {...rest}>{children}</StyledNav>
}

const StyledNav = styled.nav`
  padding: ${(props) => props.theme.spacing(1)};

  > :not(:last-child) {
    margin-right: ${(props) => props.theme.spacing(1)};
  }
`

export default Nav
