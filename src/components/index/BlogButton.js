import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import BackgroundImage from "gatsby-background-image";

const BlogButton = props => {
    return (
        <StyledButton variant="contained" href={`blog${props.slug}`}>
            <BackgroundImage
                className="bg-img"
                Tag="div"
                fluid={props.image}
                alt="Laptop with code on screen">
                <div className="content">
                    <p className="title">{props.title}</p>
                    <p className="date">Published {props.date}</p>
                    <hr />
                    <p className="excerpt">{props.excerpt}</p>
                </div>
            </BackgroundImage>
        </StyledButton>
    );
};

const StyledButton = styled(Button)`
    margin: 0 30px;
    font-family: "Lato";
    text-transform: none;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.modal};
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.37);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
    transition: box-shadow 0.2s;

    &:hover {
        background-color: ${props => props.theme.background};
    }

    &,
    .bg-img {
        height: 250px;
        width: 400px;
        border-radius: 4px;
    }

    .bg-img {
        position: relative;
        overflow: hidden;
        background-position: fixed;

        &::before,
        &::after {
            opacity: 0.06 !important;
        }
    }

    .content {
        padding: 5%;
    }

    .title {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.2rem;
        font-family: "Raleway";
    }

    .date {
        opacity: 0.5;
    }

    hr {
        opacity: 0.3;
        margin: 10px 0;
    }

    .excerpt {
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

export default BlogButton;
