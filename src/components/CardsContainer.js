import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import { Modal } from './Modal';
//import images here
// import img1 from './images/img1';
// import img2 from './images/img2';
// import img3 from './images/img3';
// import img4 from './images/img4';
// import img5 from './images/img5';
// import img6 from './images/img6';
// import img7 from './images/img7';
// import img8 from './images/img8';



export function CardsContainer(props) {
    
    return (
        <CardsWrapper>
            <Card 
            cardTitle = 'Card #1'
            cardText = 'Card #1 Text'
            cardImgSrc = {'Card Img 1'}
            cardImgAlt = {'Card Img 1'}
            btn = 'open-btn1'
            
            >
            
            </Card>
            
            
            <Card 
            cardTitle = 'Card #2'
            cardText = 'Card #2 Text'
            cardImgSrc = {'Card Img 2'}
            cardImgAlt = {'Card Img 2'}
            btn = 'open-btn2'
            />
            <Card 
            cardTitle = 'Card #3'
            cardText = 'Card #3 Text'
            cardImgSrc = {'Card Img 3'}
            cardImgAlt = {'Card Img 3'}
            btn = 'open-btn3'
            />
            <Card 
            cardTitle = 'Card #4'
            cardText = 'Card #4 Text'
            cardImgSrc = {'Card Img 4'}
            cardImgAlt = {'Card Img 4'}
            btn = 'open-btn4'
            />
            <Card 
            cardTitle = 'Card #5'
            cardText = 'Card #5 Text'
            cardImgSrc = {'Card Img 5'}
            cardImgAlt = {'Card Img 5'}
            btn = 'open-btn5'
            />
            <Card 
            cardTitle = 'Card #6'
            cardText = 'Card #6 Text'
            cardImgSrc = {'Card Img 6'}
            cardImgAlt = {'Card Img 6'}
            btn = 'open-btn6'
            />
            <Card 
            cardTitle = 'Card #7'
            cardText = 'Card #7 Text'
            cardImgSrc = {'Card Img 7'}
            cardImgAlt = {'Card Img 7'}
            btn = 'open-btn7'
            />
            <Card 
            cardTitle = 'Card #8'
            cardText = 'Card #8 Text'
            cardImgSrc = {'Card Img 8'}
            cardImgAlt = {'Card Img 8'}
            btn = 'open-btn8'
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
