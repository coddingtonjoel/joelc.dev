import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    }

    html {
        font-size: 85%;
    }

    body {
        padding-top: 68px;
        font-family: "Lato";
        font-weight: 300;
    }

    html {
        scroll-behavior: smooth;
    }

    ${"" /* material-ui */}

    .switch label {
    color: $lm-dark;
    }

    .switch label .lever {
        background-color: #d8d8d8 !important;
    }
    .switch label .lever::after {
        background-color: #adadad !important;
    }
    .switch label input[type="checkbox"]:checked + .lever {
        background-color: #d8d8d8 !important;
    }
    .switch label input[type="checkbox"]:checked + .lever::after {
        background-color: #adadad !important;
    }
`;
