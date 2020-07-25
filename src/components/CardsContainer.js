import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';
//import images here
// import img1 from './images';



export function CardsContainer() {
    return (
        <CardsWrapper>
            <Card 
            cardTitle = 'Card #1'
            cardText = 'Card #1 Text'
            cardImgSrc = {'Card Img 1'}
            cardImgAlt = {'Card Img 1'}
            />
            
            <Card 
            cardTitle = 'Card #2'
            cardText = 'Card #2 Text'
            cardImgSrc = {'Card Img 2'}
            cardImgAlt = {'Card Img 2'}
            />
            <Card 
            cardTitle = 'Card #3'
            cardText = 'Card #3 Text'
            cardImgSrc = {'Card Img 3'}
            cardImgAlt = {'Card Img 3'}
            />
            <Card 
            cardTitle = 'Card #4'
            cardText = 'Card #4 Text'
            cardImgSrc = {'Card Img 4'}
            cardImgAlt = {'Card Img 4'}
            />
            <Card 
            cardTitle = 'Card #5'
            cardText = 'Card #5 Text'
            cardImgSrc = {'Card Img 5'}
            cardImgAlt = {'Card Img 5'}
            />
            <Card 
            cardTitle = 'Card #6'
            cardText = 'Card #6 Text'
            cardImgSrc = {'Card Img 6'}
            cardImgAlt = {'Card Img 6'}
            />
            <Card 
            cardTitle = 'Card #7'
            cardText = 'Card #7 Text'
            cardImgSrc = {'Card Img 7'}
            cardImgAlt = {'Card Img 7'}
            />
            <Card 
            cardTitle = 'Card #8'
            cardText = 'Card #8 Text'
            cardImgSrc = {'Card Img 8'}
            cardImgAlt = {'Card Img 8'}
            />
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
