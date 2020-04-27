import React, { useState, useEffect } from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loading from "./components/Loading";

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        load().then(() => setLoading(false));
    }, []);

    const load = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 1500));
    };

    return loading ? (
        <Loading />
    ) : (
        <div className="complete-page">
            <Navbar />
            <Header />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
