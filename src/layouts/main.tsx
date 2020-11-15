import React from 'react'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'
import { Header, Footer } from '@components'
import { MetaQuery } from '@generated/graphql'

interface Props {
  meta: MetaQuery
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1250px;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  padding: 0 ${(props) => props.theme.spacing(4)};
  padding-top: ${(props) => props.theme.spacing(9)};

  ${down('sm')} {
    padding: 0 ${(props) => props.theme.spacing(2)};
  }

  > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing(5)};
  }

  > :last-child {
    margin-top: auto;
  }
`

const MainLayout: React.FC<Props> = ({ children, meta }) => {
  return (
    <>
      <MainWrapper>
        <Header logo={meta?.values?.logo?.url} />
        {children}
        <Footer siteName={meta.values?.siteName} />
      </MainWrapper>
    </>
  )
}

export default MainLayout
