import React, { useState } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {
        allContentfulAbout,
        allContentfulSkill,
        allContentfulLanguage,
    } = useStaticQuery(query);
    const { portrait, description } = allContentfulAbout.nodes[0];
    const { nodes: skills } = allContentfulSkill;
    const { nodes: languages } = allContentfulLanguage;

    const featuredSkills = skills.filter(node => {
        return node.featured === true;
    });

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
                <div
                    className="skills-box"
                    onClick={() => {
                        setIsOpen(true);
                    }}>
                    {featuredSkills.map(skill => {
                        return (
                            <Img
                                className="icon"
                                key={skill.name}
                                fixed={skill.icon.fixed}
                            />
                        );
                    })}
                </div>
                <span>Click to Expand</span>
            </div>
            <Modal
                open={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}>
                <Fade in={isOpen}>
                    <ModalWindow
                        className="skills-modal mui-fixed"
                        onClick={() => {
                            setIsOpen(true);
                        }}>
                        <div className="technologies">
                            {skills.map(skill => {
                                return (
                                    <Img
                                        className="icon"
                                        key={skill.name}
                                        fixed={skill.icon.fixed}
                                    />
                                );
                            })}
                        </div>
                        <div className="languages">
                            {languages.map(lang => {
                                return (
                                    <Img
                                        className="icon"
                                        key={lang.name}
                                        fixed={lang.icon.fixed}
                                    />
                                );
                            })}
                        </div>
                    </ModalWindow>
                </Fade>
            </Modal>
        </Wrapper>
    );
};

const ModalWindow = styled.div`
    outline: 0;
    width: 65vw;
    height: 450px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.modal};
`;

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

        span {
            position: absolute;
            left: 50%;
            bottom: 3%;
            transform: translateX(-50%);
            text-transform: uppercase;
            color: #d0d0d0;
            font-size: 0.8rem;
            font-family: "Raleway";
            font-weight: 700;
        }
    }

    .skills-box {
        background: ${props => props.theme.modal};
        margin: 0 15%;
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.37);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 6%;
        height: 150px;

        .icon {
            width: 65px;
            height: 65px;
            transform: translateY(-20px);
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
        allContentfulSkill(sort: { fields: contentfulid }) {
            nodes {
                featured
                icon {
                    fixed(width: 65) {
                        ...GatsbyContentfulFixed
                    }
                }
                name
            }
        }
        allContentfulLanguage(sort: { fields: contentfulid }) {
            nodes {
                icon {
                    fixed(width: 65) {
                        ...GatsbyContentfulFixed
                    }
                }
                name
            }
        }
    }
`;

export default About;
