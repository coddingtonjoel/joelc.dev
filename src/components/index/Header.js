import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Strand from "./Strand/Strand";
import styled from "styled-components";

const Header = () => {
    const {
        file: {
            childImageSharp: { fluid },
        },
    } = useStaticQuery(query);

    return (
        <Wrapper id="home" className="header">
            <Img className="img" fluid={fluid} draggable={false} />
            <div className="text">
                <h1>HI, I'M JOEL CODDINGTON.</h1>
                <h3>I'M A STUDENT WEB DEVELOPER WHO LOVES UIs.</h3>
            </div>
            <Strand />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: $lm-white;
    position: relative;
    height: 780px;
    overflow: hidden;

    .img {
        opacity: 0.1;
        position: relative;
        bottom: 26%;
    }

    .text {
        font-family: "Raleway";
        font-weight: 300;
        color: ${(props) => props.theme.primary};
        position: absolute;
        top: 28%;
        left: 10%;

        h1 {
            font-size: 3.3rem;
            margin-bottom: 60px;
        }

        h3 {
            font-size: 2rem;
        }
    }
`;

const query = graphql`
    {
        file(relativePath: { eq: "header-background.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default Header;
