import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';
import { TitleMain } from '../Styles/title';
import { formatPrice } from '../Data/FoodData';

const MenuStyled = styled.div`
    height: 1000px;
    margin: 0 400px 50px 20px;
`;
const MenuTitle = styled(TitleMain)`
    font-size: 2em;
    margin-block-start: 10px;
`;

export function Menu({ setOpenFood }) {
    return (
        <MenuStyled>
            {Object.entries(foods).map(([sectionName, foods, idx]) => (
                <div key={sectionName} >
                    <MenuTitle>{sectionName}</MenuTitle>
                    <FoodGrid>
                        {foods.map((food, idx) => (
                            <Food img={food.img} key={idx} onClick={() => {
                                setOpenFood(food);
                            }}>
                                <FoodLabel>
                                    <div>{food.name}</div>
                                    <div>{formatPrice(food.price)}</div>
                                </FoodLabel>
                            </Food>
                        ))}
                    </FoodGrid>
                </div>
            ))
            }
        </MenuStyled >
    );
};;