import React from 'react';
import styled from 'styled-components';


export function Card(props) {
    console.log(props)
    return (
        <CardWrapper>
            <img src = {props.cardImgSrc} alt = {props.cardImgAlt} />
            <h3>{props.cardTitle}</h3>
            <p>{props.cardText}</p>
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