import React from "react";
import styled from "styled-components";
import Arrow from "../assets/icons/arrow-button.svg";

const GreenButton = () => {
    return (
        <>
            <Button>
                <ArrowButton />
                <ButtonText>Assistir agora</ButtonText>
            </Button>
        </>
    );
};

export default GreenButton;

export const ArrowButton = styled.img.attrs({ src: Arrow })`
    margin-right: 0.886rem; ;
`;

export const Button = styled.button`
    background-color: var(--color-first);
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-space-between;
    padding: 0.7rem 2.5rem;
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
`;

export const ButtonText = styled.p`
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
`;
