import styled from "styled-components";
import Button from "@material-ui/core/Button";

const MaterialBtn = styled(Button).attrs(props => ({
    href: props.href,
    variant: props.variant || "contained",
    rel: props.rel,
    target: props.target,
}))`
    text-decoration: none;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.buttonBackground};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.29);
    border-radius: 3px;
    padding: 1% 4%;
    font-family: "Lato";
    font-weight: 300;
    text-transform: uppercase;
    font-size: 100%;

    &:hover {
        background-color: ${props => props.theme.buttonBackground};
    }
`;

export default MaterialBtn;
