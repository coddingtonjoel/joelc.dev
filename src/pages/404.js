import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import styled from "styled-components";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <Wrapper>
            <div className="text">
                <h1>404: NOT FOUND</h1>
                <h2>Couldn't find the page you were looking for!</h2>
            </div>
        </Wrapper>
    </Layout>
);

const Wrapper = styled.div`
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.background};
    height: 80vh;

    .text {
        width: 90%;
        margin: 100px auto;
        position: absolute;
        text-align: center;
        top: 15%;
        left: 50%;
        transform: translate(-50%, -50%);

        h1 {
            color: ${props => props.theme.primary};
            font-size: 3rem;
            font-family: "Lato";
            font-weight: 300;
            text-align: center;
            text-transform: uppercase;
            display: block;
            width: 410px;
            margin: 50px auto;
            line-height: 1.5;
            border-bottom: 1px solid ${props => props.theme.primary};

            @media (max-width: 500px) {
                font-size: 2rem;
                width: 290px;
            }
        }

        h2 {
            font-family: "Lato";
            font-weight: 300;

            @media (max-width: 500px) {
                font-size: 1rem;
            }
        }
    }
`;

export default NotFoundPage;
