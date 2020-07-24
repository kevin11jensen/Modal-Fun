import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

export function CardsContainer() {
    return (
        <CardsWrapper>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </CardsWrapper>
    );
}
const CardsWrapper = styled.div `
    background-color: lightgray;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
`
