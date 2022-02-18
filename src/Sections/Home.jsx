import React from "react";
import HomeSection, {
    ContainerDiv,
    HeaderDiv,
    HomeImage,
    ImageDiv,
    MainTitle,
    MainTitleDiv,
    NameTitle,
    TextSection,
} from "./Home.styled";
import Logo from "../Components/Logo";
import NavBar from "../Components/NavBar";
import NavLink from "../Components/NavLinks";
import Facebook from "../assets/icons/facebook.svg";
import Twitter from "../assets/icons/twitter.svg";
import Instagram from "../assets/icons/instagram.svg";
import Youtube from "../assets/icons/youtube.svg";

const Home = () => {
    return (
        <>
            <HomeSection>
                <HeaderDiv>
                    <Logo />
                    <NavBar>
                        <NavLink src={Facebook}></NavLink>
                        <NavLink src={Instagram}></NavLink>
                        <NavLink src={Twitter}></NavLink>
                        <NavLink src={Youtube}></NavLink>
                    </NavBar>
                </HeaderDiv>
                <ImageDiv>
                    <HomeImage />
                </ImageDiv>
                <Container />
            </HomeSection>
        </>
    );
};

export default Home;

export const Container = () => {
    return (
        <>
            <ContainerDiv>
                <NameTitle>HAYAO MIYAZAKI</NameTitle>
                <MainTitleDiv>
                    <MainTitle>A VIAGEM DE CHIHIRO</MainTitle>
                </MainTitleDiv>
                <TextSection></TextSection>
            </ContainerDiv>
        </>
    );
};
