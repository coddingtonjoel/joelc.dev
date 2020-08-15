import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Strand from "./Strand/Strand";

const Header = () => {
    const {
        file: {
            childImageSharp: { fluid },
        },
    } = useStaticQuery(query);

    return (
        <div id="home" className="header">
            <Img className="header-img" fluid={fluid} draggable={false} />
            <div className="header-text">
                <h1>HI, I'M JOEL CODDINGTON.</h1>
                <h3>I'M A STUDENT WEB DEVELOPER WHO LOVES UIs.</h3>
            </div>
            <Strand />
        </div>
    );
};

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
