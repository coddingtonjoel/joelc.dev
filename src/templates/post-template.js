import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import BackgroundImage from "gatsby-background-image";

const Post = ({ data }) => {
    const post = data.markdownRemark;
    const {
        contentfulPostImage: {
            image: { fluid },
        },
    } = data;

    return (
        <Layout>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <Wrapper>
                <BackgroundImage
                    className="bg-img"
                    Tag="div"
                    fluid={fluid}
                    alt={post.frontmatter.title}>
                    <div className="header-content">
                        <h1 className="title">{post.frontmatter.title}</h1>
                        <p className="date">
                            Published {post.frontmatter.date} by Joel Coddington
                        </p>
                    </div>
                </BackgroundImage>
                <div className="content-container">
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                    <hr className="divider-bottom" />
                </div>
            </Wrapper>
        </Layout>
    );
};

const Wrapper = styled.article`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.primary};

    .content-container {
        padding: 30px 15% 30px 15%;
    }

    a:link,
    a:visited {
        color: ${props => props.theme.hyperlink};
    }

    .bg-img {
        position: relative;
        height: 300px;
        overflow: hidden;
        background-position: fixed;

        &::before,
        &::after {
            opacity: 0.08 !important;
        }
    }

    hr {
        border-color: ${props => props.theme.primary};
        opacity: 0.5;
    }

    .divider-top {
        margin: 20px 0 50px 0;
    }

    .divider-bottom {
        margin-top: 50px;
    }

    p {
        margin: 20px 0;
    }

    .title {
        font-size: 3rem;
        text-transform: uppercase;
        font-family: "Raleway";
    }

    .header-content {
        padding: 0%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .date {
        margin-bottom: 0;
    }

    .content {
    }
`;

export const query = graphql`
    query BlogPostBySlug($slug: String!, $title: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            excerpt(pruneLength: 160)
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
        contentfulPostImage(title: { eq: $title }) {
            image {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`;

export default Post;
