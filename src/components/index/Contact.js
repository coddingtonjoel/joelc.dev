import React from "react";
import styled from "styled-components";

const Contact = () => {
    return (
        <Wrapper>
            <h4>Contact</h4>
            <form>
                <input type="text" placeholder="Full Name*" required />
                <input type="email" placeholder="Email Address*" required />
                <textarea placeholder="Message*" />
            </form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${props => props.theme.background};
    padding-top: 1px;

    h4 {
        color: ${props => props.theme.primary};
        font-size: 2.2rem;
        font-family: "Raleway";
        font-weight: 300;
        text-align: center;
        text-transform: uppercase;
        display: block;
        width: 215px;
        margin: 50px auto;
        line-height: 1.5;
        border-bottom: 1px solid ${props => props.theme.primary};
    }

    form {
        * {
            display: block;
            margin: 10px auto;
            width: 50vw;
        }
    }
`;

export default Contact;
