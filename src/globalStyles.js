import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        color: #fff;
    }

    :root {
        --color-first: #658E76;
    }
`;

export default GlobalStyle;