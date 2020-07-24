import React from 'react';
import styled from 'styled-components';


export function Card() {
    return (
        <CardWrapper>
            <img src = {''} alt = 'card image' />
            <h3>Card Title</h3>
            <p>Card text</p>
            <button>open</button>
        </CardWrapper>
    );
}
const CardWrapper = styled.div `
    background-color: white;
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 1%;
    img {
        height: 11rem;
        object-fit: cover;
    }
`