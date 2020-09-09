import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        transition: 0.3s;
    }

    body {
        ${"" /* keep 0s transition to stop padding from being animated */}
        padding-top: 68px;
        transition: 0s;
        font-family: "Lato";
        font-weight: 300;
    }

    html {
        scroll-behavior: smooth;
        overflow-y: scroll;
    }

    ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 8px;
        background-color: ${props => props.theme.modal};
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: ${props => props.theme.primary};
        box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
        transition: 0.5s;
    }
`;
