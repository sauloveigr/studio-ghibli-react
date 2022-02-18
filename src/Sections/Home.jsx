import React from "react";
import HomeSection, { HeaderDiv } from "./Home.styled";
import Logo from "../Components/Logo";
import NavBar from "../Components/NavBar";
import NavLink from "../Components/NavLinks";
import Facebook from "../assets/icons/facebook.svg"
import Twitter from "../assets/icons/twitter.svg"
import Instagram from "../assets/icons/instagram.svg"
import Youtube from "../assets/icons/youtube.svg"

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
            </HomeSection>
        </>
    );
};

export default Home;
