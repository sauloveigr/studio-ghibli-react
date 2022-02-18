import styled from "styled-components";

const NavLink = styled.img.attrs((props) => ({ src: props.src }))`
    width: 30px;
    cursor: pointer;
    z-index: 1;
`;

export default NavLink;
