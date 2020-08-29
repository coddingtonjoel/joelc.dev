import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        transition: 0.3s;
    }

    body {
        padding-top: 68px;
        font-family: "Lato";
        font-weight: 300;
    }

    html {
        scroll-behavior: smooth;
    }
`;
