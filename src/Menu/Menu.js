import React from 'react'
import styled from 'styled-components'
import { foods } from '../Data/FoodData'
import { Food, FoodGrid, FoodLabel } from './FoodGrid'
import { TitleMain } from '../Styles/title'

const MenuStyled = styled.div`
    height: 1000px;
    margin: 0 400px 50px 20px;
`
const MenuTitle = styled(TitleMain)`
    font-size: 3em;
    margin-block-start: 10px;
`

export function Menu() {
    return <MenuStyled>
        <MenuTitle>Menu</MenuTitle>
        <FoodGrid>
            {foods.map((food, idx) => (
                <Food img={food.img} key={idx}><FoodLabel>{food.name}</FoodLabel></Food>
            ))}
        </FoodGrid>

    </MenuStyled>
}