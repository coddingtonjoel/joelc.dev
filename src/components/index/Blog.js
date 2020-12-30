import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import BlogButton from "../global/BlogButton";
import { Link, graphql, useStaticQuery } from "gatsby";
import Button from "../global/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
    const data = useStaticQuery(query);
    const {
        allMarkdownRemark: { nodes: posts },
    } = data;

    const blogRef = useRef([]);
    blogRef.current = [];

    useEffect(() => {
        blogRef.current.forEach((blog, index) => {
            gsap.from(blog, {
                duration: 0.6,
                top: -40,
                opacity: 0,
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: blog,
                    start: "bottom bottom",
                },
            });
        });
    }, []);

    const addToRefs = el => {
        if (el && !blogRef.current.includes(el)) {
            blogRef.current.push(el);
        }
    };

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
                            ref={addToRefs}
                        />
                    );
                })}
            </div>

            <Link className="btn-link" to="/blog">
                <Button className="btn">View all Posts</Button>
            </Link>
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
        font-family: "Raleway", sans-serif;
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

        @media (max-width: 1350px) {
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
        pointer-events: all;

        &-link {
            color: ${props => props.theme.primary};
            text-decoration: none;
            height: 0;
            display: inline;
            pointer-events: none;
            width: 100%;
            position: relative;
        }
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
