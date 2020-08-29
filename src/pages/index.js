import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Header from "../components/index/Header";
import About from "../components/index/About";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Header />
        <About />
    </Layout>
);

export default IndexPage;
