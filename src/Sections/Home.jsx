import React from "react";
import HomeSection, {
    ButtonDiv,
    ContainerDiv,
    HeaderDiv,
    HomeImage,
    ImageDiv,
    MainTitle,
    MainTitleDiv,
    NameTitle,
    TextSection,
    WrapperContainer,
} from "./Home.styled";
import Logo from "../Components/Logo";
import NavBar from "../Components/NavBar";
import NavLink from "../Components/NavLinks";
import Facebook from "../assets/icons/facebook.svg";
import Twitter from "../assets/icons/twitter.svg";
import Instagram from "../assets/icons/instagram.svg";
import Youtube from "../assets/icons/youtube.svg";
import GreenButton from "../Components/GreenButton";
import SecondButton from "../Components/SecondButton";

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
                <WrapperContainer>
                    <ImageDiv>
                        <HomeImage />
                    </ImageDiv>
                    <Container />
                </WrapperContainer>
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
                <TextSection>
                    Chihiro chega a um mundo mágico dominado por uma bruxa.
                    Aqueles que a desobedecem são transformados em animais.
                </TextSection>
                <ButtonDiv>
                    <GreenButton />
                    <SecondButton/>
                </ButtonDiv>
            </ContainerDiv>
        </>
    );
};
