import React from "react";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";
import Fade from "@material-ui/core/Fade";
import Img from "gatsby-image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProjectModal = props => {
    const project = props.project;

    return (
        <Modal
            open={props.isOpen}
            onClose={() => {
                props.setIsOpen(false);
            }}>
            <Fade in={props.isOpen} timeout={500}>
                <ModalWindow className="mui-fixed">
                    <div className="container">
                        <Carousel
                            infiniteLoop
                            className="carousel"
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
                </ModalWindow>
            </Fade>
        </Modal>
    );
};

const ModalWindow = styled.div`
    outline: none;
    width: 50vw;
    padding: 3vh 0;
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

    .container {
        height: 100%;
        width: 100%;
    }
`;

export default ProjectModal;
