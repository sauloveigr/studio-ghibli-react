import React from "react";
import styled from "styled-components";

const GreenButton = () => {
    return (
        <>
            <Button>
                <ButtonText>Assista o trailer</ButtonText>
            </Button>
        </>
    );
};

export default GreenButton;

export const Button = styled.button`
    display: none;
    transition: 200ms linear;

    &:hover {
        transition: 100ms linear;
        border: 2px solid #847da7;
    }

    @media screen and (min-width: 992px) {
        background-color: transparent;
        border: 2px solid #658e76;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.7rem 2.5rem;
        cursor: pointer;
        transform: skewX(-25deg);
    }
`;

export const ButtonText = styled.p`
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    transform: skewX(25deg);
`;
