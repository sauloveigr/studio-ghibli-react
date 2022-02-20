import styled from "styled-components";
import Image from "../assets/images/home-image.png";

const HomeSection = styled.section`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(154.76deg, #628e75 3%, #1a4855 84.12%);
`;

export default HomeSection;

export const HeaderDiv = styled.div`
    width: 100vw;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.625rem;

    @media screen and (min-width: 992px) {
        width: 70vw;
        margin: 0 auto;
        padding-top: 2.563rem;
        margin-bottom: 4.75rem;
    }
`;

export const HomeImage = styled.img.attrs({ src: Image })`
    margin-top: -4rem;
    margin-bottom: -4.5rem;
    width: 32rem;

    @media screen and (min-width: 992px) {
        width: 50rem;
    }
`;

export const ImageDiv = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NameTitle = styled.h2`
    font-weight: 700;
    margin-bottom: 0.375rem;

    @media screen and (min-width: 992px) {
        font-size: 1.875rem;
        margin-bottom: 0.875rem;
    }
`;

export const MainTitle = styled.h1`
    font-weight: 900;
    font-size: 3.5rem;
    line-height: 3.815rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 992px) {
        font-size: 4.25rem;
        margin-bottom: 1.563rem;
    }
`;

export const TextSection = styled.p`
    font-weight: 400;
    margin-bottom: 4.5rem;

    @media screen and (min-width: 992px) {
        font-size: 1rem;
    }
`;

export const MainTitleDiv = styled.div`
    width: 70vw;

    @media screen and (min-width: 992px) {
        width: 21vw;
    }
`;

export const ContainerDiv = styled.div`
    height: 50vh;
    padding: 0 1.563rem;
    font-size: 1.125rem;
    margin-bottom: 0.375rem;
    margin-top: 2rem;

    @media screen and (min-width: 992px) {
        width: 445px;
    }
`;

export const WrapperContainer = styled.div`
    @media screen and (min-width: 992px) {
        width: 70vw;
        display: flex;
        flex-direction: row;
        flex-direction: row-reverse;
        margin: 0 auto;
    }
`;

export const ButtonDiv = styled.div`
    @media screen and (min-width: 992px) {
        display: flex;
        width: 500px;
    }
`;
