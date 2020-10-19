import React from "react";
import styled from "styled-components";
import BlogButton from "../global/BlogButton";
import { graphql, useStaticQuery } from "gatsby";
import Button from "../global/Button";

const Blog = () => {
    const data = useStaticQuery(query);
    const {
        allMarkdownRemark: { nodes: posts },
    } = data;

    return (
        <Wrapper id="blog">
            <h4>Recent Blog Posts</h4>
            <div className="container">
                {posts.map(post => {
                    const current = data.allContentfulPostImage.nodes.filter(
                        tempPost => {
                            return tempPost.title === post.frontmatter.title;
                        }
                    );
                    return (
                        <BlogButton
                            fromAllBlogsPage={true}
                            key={post.frontmatter.title}
                            title={post.frontmatter.title}
                            date={post.frontmatter.date}
                            excerpt={post.excerpt}
                            slug={"blog" + post.fields.slug}
                            image={current[0].image.fluid}
                        />
                    );
                })}
            </div>
            <Button href="/blog" className="btn">
                View all Posts
            </Button>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    height: 100%;
    padding-bottom: 1px;
    background-color: ${props => props.theme.background};
    padding-top: 80px; /* header height + empty space */
    margin-top: -50px; /* header height to degrees padding’s space */

    h4 {
        color: ${props => props.theme.primary};
        font-size: 2.2rem;
        font-family: "Raleway";
        font-weight: 300;
        text-align: center;
        text-transform: uppercase;
        display: block;
        width: 400px;
        margin: 50px auto;
        line-height: 1.5;
        border-bottom: 1px solid ${props => props.theme.primary};

        @media (max-width: 430px) {
            font-size: 2rem;
            width: 360px;
        }

        @media (max-width: 380px) {
            font-size: 1.7rem;
            width: 300px;
        }
    }

    .container {
        width: 80vw;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 1270px) {
            flex-wrap: wrap;
        }
    }

    .btn {
        width: 200px;
        text-align: center;
        margin: 50px auto;
        display: block;
        padding: 10px 20px;
        font-size: 0.9rem;
        transition: box-shadow 0.2s;
    }
`;

const query = graphql`
    {
        allMarkdownRemark(
            filter: { frontmatter: { title: { ne: "" } } }
            sort: { fields: frontmatter___date, order: DESC }
            limit: 3
        ) {
            nodes {
                excerpt(pruneLength: 160)
                fields {
                    slug
                }
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
        allContentfulPostImage {
            nodes {
                image {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
                title
            }
        }
    }
`;

export default Blog;
