import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav = styled.nav`
  display: flex;
  padding: 2rem;

  a {
    margin-right: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: inherit;

    &:hover,
    &.active {
      text-decoration: underline;
    }
  }
`

export default (props) => (
  <Nav>
    <NavLink exact to='/'>Home</NavLink>
    <NavLink to='/about/'>About</NavLink>
  </Nav>
)
