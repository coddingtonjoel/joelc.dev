import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Header from "../components/index/Header";
import About from "../components/index/About";
import Projects from "../components/index/Projects";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Header />
        <About />
        <Projects />
    </Layout>
);

export default IndexPage;
