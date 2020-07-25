import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';





export function Card(props) {
    console.log(props)
    const [modal, setModal] = useState(false);
    const toggleModal = e => {
        setModal(!modal);
    }
    return (
        <CardWrapper>
            <img src = {props.cardImgSrc} alt = {props.cardImgAlt} />
            <h3>{props.cardTitle}</h3>
            <p>{props.cardText}</p>
            <button onClick = {toggleModal} className = {props.btn}>open</button>
            {modal ? (
            <Modal />
            ) : null
            }
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