import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Img from "gatsby-image";
import ProjectModal from "./ProjectModal";

const ProjectsButton = React.forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <React.Fragment>
            <StyledButton
                ref={ref}
                onClick={() => {
                    setIsOpen(true);
                }}
                variant="contained">
                <Img className="img" fluid={props.fluid} draggable={false} />
            </StyledButton>
            <ProjectModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                project={props.project}
            />
        </React.Fragment>
    );
});

const StyledButton = styled(Button)`
    height: 220px;
    width: 220px;
    border-radius: 100%;
    background-color: #e4e4e4;
    margin: 15px 30px;
    border: 0.7px solid #dbdbdb;

    @media (max-width: 1000px) {
        height: 180px;
        width: 180px;
    }

    @media (max-width: 500px) {
        height: 140px;
        width: 140px;
        margin: 15px;
    }

    .img {
        height: 85%;
        width: 85%;
    }
`;

export default ProjectsButton;
