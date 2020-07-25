import React from 'react';
import styled from 'styled-components';


export function Modal() {

    return (
        <ModalWrapper>
            Hello from Modal
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
    font-size: 6rem;
    position: fixed;
`