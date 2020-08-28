import styled from "styled-components";

const Button = styled.a.attrs(props => ({
    href: props.href,
    className:
        props.theme.style === "light"
            ? "waves-effect"
            : "waves-effect waves-light",
}))`
    text-decoration: none;
    color: ${props => props.theme.primary};
    background: ${props => props.theme.buttonBackground};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.29);
    border-radius: 3px;
    padding: 2% 5%;
    font-family: "Lato";
    text-transform: uppercase;
    font-size: 105%;
    transition: 0.3s;

    &:hover {
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`;

export default Button;
