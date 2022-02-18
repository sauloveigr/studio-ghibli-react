import styled from "styled-components";
import Image from "../assets/images/home-image.png";

const HomeSection = styled.section`
    height: 100vh;
    background: linear-gradient(154.76deg, #628e75 3%, #1a4855 84.12%);
`;

export const HeaderDiv = styled.div`
    width: 100vw;
    height: 6.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 1.625rem;
`;

export const HomeImage = styled.img.attrs({ src: Image })`
    margin-top: -4.8rem;
    margin-bottom: -4.5rem;
    width: 28.75rem;
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
`;

export const MainTitle = styled.h1`
    font-weight: 900;
    font-size: 3.5rem;
    line-height: 3.815rem;
`;

export const TextSection = styled.p`
    font-weight: 400;
`;

export const MainTitleDiv = styled.div`
    width: 70vw;
`;

export const ContainerDiv = styled.div`
    height: 50vh;
    padding: 0 1.563rem;
    font-size: 1.125rem;
    margin-bottom: 0.375rem;
`;

export default HomeSection;
