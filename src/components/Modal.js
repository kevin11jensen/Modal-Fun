import React from 'react';
import styled from 'styled-components';


export function Modal(props) {

    return (
        <ModalWrapper className = {props.className}>
            {props.text}
        </ModalWrapper>
    )
}
const ModalWrapper = styled.div `
    background-color: white;
    width: 50%;
    height: 50vh;
    z-index: 1;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    font-size: 6rem;
    position: fixed;
`