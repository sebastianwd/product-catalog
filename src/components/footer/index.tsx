import styled from 'styled-components'
import Typography from '../typography'

interface Props {
  siteName?: string
}

const Footer: React.FC<Props> = (props) => {
  const { siteName } = props

  return (
    <Container>
      <section className="row">
        <article className="col-12 col-sm-6">
          <Typography variant="body2">
            Este sitio web es operado por {siteName} ©{' '}
            {new Date().getFullYear()}
          </Typography>
        </article>
      </section>
    </Container>
  )
}

const Container = styled.footer`
  max-width: 100vw;
  padding: ${(props) => props.theme.spacing(5)} 0;
  border-top: 1px solid ${(props) => props.theme.colors.divider};
`

export default Footer
