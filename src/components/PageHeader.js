import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  background: linear-gradient(45deg, aquamarine, aqua);
  padding: 1rem 2rem;
`

const Title = styled.h1`
  font-weight: 300;
`

const PageHeader = (props) => (
  <Header>
    <Title>{props.title}</Title>
  </Header>
)

export default PageHeader
