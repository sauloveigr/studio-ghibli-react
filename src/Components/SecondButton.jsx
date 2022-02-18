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

    @media screen and (min-width: 992px) {
        background-color: transparent;
        border: 2px solid #658e76;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.7rem 2.5rem;
        /* clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%); */
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
