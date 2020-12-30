import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        transition: 0s;
    }

    body {
        ${"" /* keep 0s transition to stop padding from being animated */}
        padding-top: 68px;
        transition: 0s;
        font-family: "Lato", sans-serif;
        font-weight: 300;
        overflow-x: hidden;
    }
`;
