import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        color: #fff;
    }

   body {
        background: linear-gradient(154.76deg, #628e75 3%, #1a4855 84.12%);
    }

    :root {
        --color-first: #658E76;
    }
`;

export default GlobalStyle;
