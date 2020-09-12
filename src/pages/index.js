import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Header from "../components/index/Header";
import About from "../components/index/About";
import Projects from "../components/index/Projects";
import Contact from "../components/index/Contact";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Header />
        <About />
        <Projects />
        <Contact />
    </Layout>
);

export default IndexPage;
