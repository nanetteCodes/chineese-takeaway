import React from 'react';
import styled from 'styled-components';


const OrderStyled = styled.div`
    position: fixed;
    right: 0;
    top: 59px;
    width: 340px;
    background-color: white;
    height: calc(100% - 48px);
    z-index: 10;
    box-shadow: 4px 0 5px 4px grey;
`;

export function Order() {
    return <OrderStyled>Order is Empty</OrderStyled>;
}