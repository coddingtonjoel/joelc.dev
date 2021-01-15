import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Modal from "./SkillsModal";
import SkillsButton from "./SkillsButton";
import AboutStrand from "./Strand/AboutStrand";
import { useMediaQuery } from "react-responsive";
import { gsap } from "gsap";
import resume from "../../../static/joelc-resume.pdf";
import Button from "../global/Button";

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { allContentfulAbout } = useStaticQuery(query);
    const { portrait, description } = allContentfulAbout.nodes[0];
    const isStrandVisible = useMediaQuery({
        query: "(max-device-width: 700px)",
    });

    const borderRef = useRef(null);

    const handleSetIsOpen = open => {
        setIsOpen(open);
    };

    useEffect(() => {
        gsap.fromTo(
            borderRef.current,
            {
                backgroundPosition: "0% 0%",
                duration: 5,
                repeat: -1,
                ease: "none",
            },
            {
                backgroundPosition: "200% 200%",
                duration: 5,
                repeat: -1,
                ease: "none",
            }
        );
    }, []);

    return (
        <React.Fragment>
            <Wrapper id="about">
                <div className="description-flex">
                    <div className="img-container">
                        <div ref={borderRef} className="img-border" />
                        <Img
                            className="img"
                            fluid={portrait.fluid}
                            alt="Joel Coddington"
                        />
                    </div>

                    <div className="description-text">
                        <h4>Who am I?</h4>
                        <p>{description.description}</p>
                        <br />
                        <Button href={resume} className="resume" download>
                            Click here to download my resume
                        </Button>
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
                {isStrandVisible ? <AboutStrand /> : null}
            </Wrapper>
        </React.Fragment>
    );
};

const Wrapper = styled.section`
    background-color: ${props => props.theme.background};
    overflow: hidden !important;
    position: relative;
    padding-bottom: 10px;

    &:before {
        content: "";
        display: block;
        padding-top: 140px; /* header height + empty space */
        margin-top: -100px; /* header height to degrees padding’s space */
    }

    .description-flex {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 75px 15%;

        @media (max-width: 1100px) {
            padding: 75px 10%;
        }

        @media (max-width: 1100px) {
            padding: 75px 6.5%;
        }

        @media (max-width: 700px) {
            flex-direction: column;
            padding: none;
        }
    }

    .img {
        position: absolute;
        top: 0%;
        left: 0%;
        display: block;
        height: 100%;
        width: 100%;
        margin: auto;
        align-self: center;
        background: #fff;
        z-index: 1;
        transform: scale(0.97);
    }

    .img-border {
        position: absolute;
        display: block;
        top: -50%;
        left: -50%;
        z-index: -9;
        display: block;
        height: 200%;
        width: 200%;
        transform: rotate(-135deg);
        overflow: hidden;
        opacity: 0.8;
        background-position: 0% 0%;
        background: linear-gradient(
            to right,
            ${props => props.theme.background} 20%,
            ${props => props.theme.background} 40%,
            ${props => props.theme.imageShine} 50%,
            ${props => props.theme.imageShine} 35%,
            ${props => props.theme.background} 70%,
            ${props => props.theme.background} 100%
        );
        background-size: 200% auto;
    }

    .img-container {
        flex: 0 0 270px;
        height: 100%;
        width: 100%;
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.29);
        border-radius: 4px;
        z-index: 30;
        overflow: hidden;
        position: relative;

        @media (max-width: 900px) {
            flex: 0 0 230px;
        }

        @media (max-width: 900px) {
            flex: 0 0 230px;
            width: 230px;
        }

        @media (max-width: 700px) {
            /* negate margin/padding to position anchor link in the right spot */
            transform: translateY(-25px);
        }

        @media (max-width: 400px) {
            flex: 0 0 200px;
            width: 200px;
        }
    }

    .description-text {
        color: ${props => props.theme.primary};
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        padding: 0 6%;

        @media (max-width: 900px) {
            padding-right: 0;
        }

        @media (max-width: 700px) {
            padding: 10% 10% 0 10%;
        }

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

            @media (max-width: 1100px) {
                font-size: 2rem;
                width: 175px;
            }

            @media (max-width: 750px) {
                font-size: 1.8rem;
            }

            @media (max-width: 700px) {
                margin: 0 auto 30px auto;
            }

            @media (max-width: 530px) {
                font-size: 1.6rem;
                width: 150px;
            }
        }

        p {
            font-weight: 300;
            line-height: 1.5;
            font-size: 1.1rem;

            @media (max-width: 1100px) {
                font-size: 1rem;
            }

            @media (max-width: 900px) {
                font-size: 0.9rem;
            }
        }
    }

    .resume {
        padding: 10px 20px;
        font-size: 0.85rem;
        text-align: center;
        transition: none;

        @media (max-width: 700px) {
            margin: 10px auto -10px;
            font-size: 0.8rem;
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
            font-family: "Raleway", sans-serif;
            font-weight: 300;
            text-align: center;
            text-transform: uppercase;
            display: block;
            width: 490px;
            margin: 50px auto;
            line-height: 1.5;
            border-bottom: 1px solid ${props => props.theme.primary};

            @media (max-width: 1100px) {
                font-size: 2rem;
                width: 450px;
            }

            @media (max-width: 750px) {
                font-size: 1.8rem;
                width: 420px;
            }

            @media (max-width: 530px) {
                font-size: 1.6rem;
                width: 380px;
            }

            @media (max-width: 450px) {
                font-size: 1.6rem;
                width: 350px;
            }

            @media (max-width: 380px) {
                font-size: 1.4rem;
                width: 330px;
            }

            @media (max-width: 350px) {
                font-size: 1.2rem;
                width: 275px;
            }
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
