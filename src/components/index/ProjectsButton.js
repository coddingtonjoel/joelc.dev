import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Img from "gatsby-image";

const ProjectsButton = props => {
    return (
        <StyledButton onClick={props.onClick} variant="contained">
            <Img className="img" fluid={props.fluid} />
        </StyledButton>
    );
};

const StyledButton = styled(Button)`
    height: 240px;
    width: 240px;
    border-radius: 100%;
    background-color: #e4e4e4;
    margin: 0 30px;
    border: 0.7px solid #dbdbdb;

    .img {
        height: 85%;
        width: 85%;
    }
`;

export default ProjectsButton;
