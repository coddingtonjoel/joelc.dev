import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Header from "../components/index/Header";
import About from "../components/index/About";
import Projects from "../components/index/Projects";
import Blog from "../components/index/Blog";
import Contact from "../components/index/Contact";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Header />
        <main>
            <About />
            <Projects />
            <Blog />
            <Contact />
        </main>
    </Layout>
);

export default IndexPage;
