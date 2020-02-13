import React from 'react'
import styled from 'styled-components'
import { pizzaRed } from '../Styles/colors'
import { Title } from '../Styles/title'

export const NavbarStyled = styled.div`
    background-color: ${pizzaRed};
    padding: 10px;
`
const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px black;
`
export function Navbar() {
    return <NavbarStyled>
        <Logo>
            Chinese Takeaway <span role="img" aria-label="chopsticks">🥢</span>
        </Logo>
    </NavbarStyled>
}