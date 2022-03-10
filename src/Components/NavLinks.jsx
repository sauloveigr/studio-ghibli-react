import styled from "styled-components";

const NavLink = styled.img.attrs((props) => ({ src: props.src }))`
    width: 1.25rem;
    cursor: pointer;
    z-index: 1;
    transition: 200ms linear;

    @media screen and (min-width: 992px) {
        width: 1.5rem;
    }

    &:hover {
        transform: translateY(-3px);
        transition: 100ms linear;
    }
`;

export default NavLink;
