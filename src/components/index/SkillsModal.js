import React from "react";
import Modal from "@material-ui/core/Modal";
import styled, { withTheme } from "styled-components";
import Fade from "@material-ui/core/Fade";
import ReactTooltip from "react-tooltip";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Button from "../global/Button";
import MediaQuery, { useMediaQuery } from "react-responsive";

const StyledModal = props => {
    const { allContentfulSkill, allContentfulLanguage } = useStaticQuery(query);
    const { nodes: languages } = allContentfulLanguage;
    const { nodes: skills } = allContentfulSkill;

    const isMobile = useMediaQuery({ query: "(max-device-width: 600px)" });

    return (
        <Modal
            open={props.isOpen}
            onClose={() => {
                props.setIsOpen(false);
            }}>
            <Fade in={props.isOpen} timeout={500}>
                <ModalWindow className="skills-modal">
                    <div>
                        <p>Technologies</p>
                        {isMobile ? (
                            <p className="m-scroll-notice"> Scroll for More</p>
                        ) : null}
                        <div className="technologies">
                            {skills.map(skill => {
                                return (
                                    <React.Fragment key={skill.name}>
                                        {/* display tooltip on desktop */}
                                        <MediaQuery minWidth={601}>
                                            <div data-tip={skill.name}>
                                                <ReactTooltip
                                                    place={"top"}
                                                    type={
                                                        props.theme.style ===
                                                        "light"
                                                            ? "dark"
                                                            : "light"
                                                    }
                                                    effect="solid"
                                                />
                                                <Img
                                                    className="icon"
                                                    fixed={skill.icon.fixed}
                                                    draggable={false}
                                                />
                                            </div>
                                        </MediaQuery>
                                        {/* DON'T display tooltip on mobile -- lacks intutiveness */}
                                        <MediaQuery maxWidth={600}>
                                            <Img
                                                className="icon"
                                                fixed={skill.icon.fixed}
                                                draggable={false}
                                            />
                                        </MediaQuery>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                        <p>Other Languages</p>
                        <div className="languages">
                            {languages.map(lang => {
                                return (
                                    <div data-tip={lang.name} key={lang.name}>
                                        <ReactTooltip
                                            place="top"
                                            type={
                                                props.theme.style === "light"
                                                    ? "dark"
                                                    : "light"
                                            }
                                            effect="solid"
                                        />
                                        <Img
                                            className="icon"
                                            fixed={lang.icon.fixed}
                                            draggable={false}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <p className="hover-to-see">
                            {isMobile ? null : "Hover to See Titles"}
                        </p>
                    </div>
                    <Button
                        className="close"
                        variant="text"
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
                </ModalWindow>
            </Fade>
        </Modal>
    );
};

const ModalWindow = styled.div`
    outline: none;
    width: 80vw;
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

    @media (max-width: 900px) {
        width: 100vw;
        height: 80vh;
        padding: 20px 0;
        border-radius: 0;
        box-shadow: none;
        overflow-y: scroll;
        overflow-x: hidden;
        display: block;
    }

    p {
        /* transform: translateX(4%); */
        text-align: center;
        color: ${props => props.theme.primary};
    }

    .technologies {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0 30px;
    }

    .icon {
        margin: 40px;
        user-select: none;

        @media (max-width: 1200px) {
            margin: 30px 20px;
        }

        @media (max-width: 900px) {
            margin: 30px 20px;
            transform: scale(0.85);
        }
    }

    .languages {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0 30px;
    }

    .hover-to-see {
        text-align: center;
        text-transform: uppercase;
        color: #d0d0d0;
        font-size: 0.8rem;
        font-family: "Raleway";
        font-weight: 700;
        transform: translateX(0);
    }

    .m-scroll-notice {
        text-align: center;
        text-transform: uppercase;
        color: #d0d0d0;
        font-size: 0.8rem;
        font-family: "Raleway";
        font-weight: 700;
        transform: translateX(0);
        margin-top: 15px;
    }

    .close {
        height: 40px;
        position: absolute;
        right: 2%;
        padding: 0 !important;
        background-color: none;

        @media (min-width: 901px) {
            bottom: 5%;
        }

        @media (max-width: 900px) {
            top: 1.85%;
            right: 3%;
            transform: scale(0.8);
        }

        img {
            opacity: 0.6;
        }
    }
`;

const query = graphql`
    {
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

export default withTheme(StyledModal);
