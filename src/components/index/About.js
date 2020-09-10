import React, { useState } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Modal from "./Modal";
import SkillsButton from "./SkillsButton";

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { allContentfulAbout } = useStaticQuery(query);
    const { portrait, description } = allContentfulAbout.nodes[0];

    const handleSetIsOpen = open => {
        setIsOpen(open);
    };

    return (
        <Wrapper id="about">
            <div className="description-flex">
                <Img className="img" fluid={portrait.fluid} />
                <div className="description-text">
                    <h4>Who am I?</h4>
                    <p>{description.description}</p>
                </div>
            </div>
            <hr />
            <div className="skills-container">
                <h4>Skills and Technologies</h4>
            </div>
            <SkillsButton
                onClick={() => {
                    setIsOpen(true);
                }}
            />
            <Modal isOpen={isOpen} setIsOpen={handleSetIsOpen} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${props => props.theme.background};

    .description-flex {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 75px 15%;
    }

    .img {
        flex: 0 0 270px;
        height: 100%;
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.29);
        border-radius: 4px;
    }

    .description-text {
        color: ${props => props.theme.primary};
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        padding: 0 6%;

        h4 {
            font-size: 2.2rem;
            font-family: "Raleway";
            font-weight: 300;
            text-align: center;
            text-transform: uppercase;
            display: inline-block;
            width: 195px;
            line-height: 1.5;
            border-bottom: 1px solid ${props => props.theme.primary};
            margin-bottom: 30px;
        }

        p {
            font-weight: 300;
            line-height: 1.5;
            font-size: 1.1rem;
        }
    }

    hr {
        width: 75vw;
        border: solid 0.1px ${props => props.theme.secondary};
        opacity: 0.7;
        margin: 0 auto;
    }

    .skills-container {
        position: relative;

        h4 {
            color: ${props => props.theme.primary};
            font-size: 2.2rem;
            font-family: "Raleway";
            font-weight: 300;
            text-align: center;
            text-transform: uppercase;
            display: block;
            width: 490px;
            margin: 50px auto;
            line-height: 1.5;
            border-bottom: 1px solid ${props => props.theme.primary};
        }
    }
`;

const query = graphql`
    {
        allContentfulAbout {
            nodes {
                description {
                    description
                }
                portrait {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
`;

export default About;
