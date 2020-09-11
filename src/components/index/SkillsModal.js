import React from "react";
import Modal from "@material-ui/core/Modal";
import styled, { withTheme } from "styled-components";
import Fade from "@material-ui/core/Fade";
import ReactTooltip from "react-tooltip";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const StyledModal = props => {
    const { allContentfulSkill, allContentfulLanguage } = useStaticQuery(query);
    const { nodes: languages } = allContentfulLanguage;
    const { nodes: skills } = allContentfulSkill;

    return (
        <Modal
            open={props.isOpen}
            onClose={() => {
                props.setIsOpen(false);
            }}>
            <Fade in={props.isOpen} timeout={500}>
                <ModalWindow className="skills-modal mui-fixed">
                    <div>
                        <p>Technologies</p>
                        <div className="technologies">
                            {skills.map(skill => {
                                return (
                                    <div data-tip={skill.name} key={skill.name}>
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
                                            fixed={skill.icon.fixed}
                                            draggable={false}
                                        />
                                    </div>
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
                        <p className="hover-to-see">Hover to See Titles</p>
                    </div>
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

    /* TODO add close button */
    @media (max-width: 900px) {
        width: 100vw;
        height: 100vh;
        padding: 20px;
        border-radius: 0;
        box-shadow: none;
        overflow-y: scroll;
        overflow-x: hidden;
        top: 0;
        left: 0;
        transform: none;
        display: block;
    }

    p {
        transform: translateX(4%);
        color: ${props => props.theme.primary};
    }

    .technologies {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 0 30px;
        transform: translateX(3%);
    }

    .icon {
        margin: 40px;
        user-select: none;
    }

    .languages {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 0 30px;
        transform: translateX(3%);
    }

    .hover-to-see {
        position: relative;
        text-align: center;
        text-transform: uppercase;
        color: #d0d0d0;
        font-size: 0.8rem;
        font-family: "Raleway";
        font-weight: 700;
        transform: translateX(0);
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
