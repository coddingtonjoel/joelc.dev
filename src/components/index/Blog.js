import React from "react";
import styled from "styled-components";

const Blog = () => {
    return (
        <Wrapper>
            <h4>Blog</h4>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    height: 400px;
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
        width: 130px;
        margin: 50px auto;
        line-height: 1.5;
        border-bottom: 1px solid ${props => props.theme.primary};
    }
`;

export default Blog;
