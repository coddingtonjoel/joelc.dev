import React from "react";
import "./sass/main.scss";
import Header from "./components/Header";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="complete-page">
            <Navbar />
            <Header />
            <About />
        </div>
    );
}

export default App;
