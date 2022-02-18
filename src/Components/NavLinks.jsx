import styled from 'styled-components';

const NavLink = styled.img.attrs(props => ({src: props.src}))`
    width: 30px;
`;

export default NavLink;