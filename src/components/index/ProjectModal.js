import React from "react";
import Modal from "@material-ui/core/Modal";
import styled, { withTheme } from "styled-components";
import Fade from "@material-ui/core/Fade";
import Img from "gatsby-image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import close from "../../images/icons/close.svg";
import Button from "../global/Button";

const ProjectModal = props => {
    const project = props.project;

    return (
        <Modal
            open={props.isOpen}
            onClose={() => {
                props.setIsOpen(false);
            }}>
            <Fade in={props.isOpen} timeout={500}>
                <ModalWindow>
                    <div className="carousel-container">
                        <Carousel
                            infiniteLoop
                            autoPlay
                            className="carousel"
                            showThumbs={false}
                            showStatus={false}
                            showIndicators={false}>
                            {project.screenshots.map(sc => {
                                return (
                                    <Img
                                        className="sc"
                                        key={sc.fluid.src}
                                        fluid={sc.fluid}
                                    />
                                );
                            })}
                        </Carousel>
                    </div>
                    <div className="main-container">
                        <div className="project-text">
                            <h1>{project.title}</h1>
                            <p>{project.tagline}</p>
                            <div className="stack">
                                {project.stack.map(item => {
                                    return <span key={item}>{item}</span>;
                                })}
                            </div>
                        </div>
                        <hr />
                        <p className="description">
                            {project.description.description}
                        </p>
                        <div className="button-level">
                            <Button
                                target="_blank"
                                rel="noopener noreferrer"
                                className="site"
                                href={project.url}>
                                Visit Site
                            </Button>
                            <Button
                                className="close"
                                onClick={() => {
                                    props.setIsOpen(false);
                                }}>
                                {/* close icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        fill={props.theme.primary}
                                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </ModalWindow>
            </Fade>
        </Modal>
    );
};

const ModalWindow = styled.div`
    outline: none;
    width: 50vw;
    padding-bottom: 3vh;
    background-color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.modal};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.29);
    border-radius: 8px;
    position: relative;
    flex-direction: column;
    margin-right: 0 !important;
    overflow: none;

    .carousel-container {
        height: 100%;
        width: 100%;
        display: block;
    }

    .main-container {
        width: 100%;

        hr {
            /* matches 5% of padding on L and R of text */
            width: 90%;
            margin: 20px auto;
            opacity: 0.4;
        }
    }

    .project-text {
        text-align: left;
        width: 100%;
        padding: 20px 5%;
        margin-top: 10px;

        h1 {
            text-transform: uppercase;
            font-family: "Raleway";
            margin-bottom: 8px;
            font-size: 2.2rem;
            color: ${props => props.theme.notMain};
        }

        p {
            margin-bottom: 18px;
            color: ${props => props.theme.primary};
        }

        span {
            font-weight: 700;
            text-transform: uppercase;
            background-color: ${props => props.theme.modalTag};
            color: ${props => props.theme.modalTagText};
            font-size: 80%;
            padding: 5px 10px;
            margin-right: 10px;
        }
    }

    .description {
        color: ${props => props.theme.primary};
        font-weight: 400;
        padding: 0 5%;
        margin-bottom: 20px;
        opacity: 0.9;
    }

    .button-level {
        padding: 0 5%;
        position: relative;
    }

    .site {
        height: 40px;
    }

    .close {
        height: 40px;
        position: absolute;
        right: 5%;
        padding: 0 !important;

        img {
            opacity: 0.6;
        }
    }
`;

export default withTheme(ProjectModal);
