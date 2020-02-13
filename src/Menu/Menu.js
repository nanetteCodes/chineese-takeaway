import React from 'react'
import styled from 'styled-components'
import { foods } from '../Data/FoodData'
import { Food, FoodGrid } from './FoodGrid'

const MenuStyled = styled.div`
    height: 1000px;
    margin: 0 400px 50px 20px;
`
export function Menu() {
    return <MenuStyled>
        <FoodGrid>
            {foods.map(food => (
                <Food img={food.img}>{food.name}</Food>
            ))}
        </FoodGrid>

    </MenuStyled>
}