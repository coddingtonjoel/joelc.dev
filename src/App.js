import React from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
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
