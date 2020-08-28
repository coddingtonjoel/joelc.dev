import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./global/themes";
import { GlobalStyle } from "./global/GlobalStyle";

const Layout = ({ children }) => {
    const [mode, setMode] = useState(lightTheme);

    const toggleMode = () => {
        if (mode === lightTheme) {
            setMode(darkTheme);
        } else {
            setMode(lightTheme);
        }
        console.log("mode changed");
    };

    return (
        <ThemeProvider theme={mode}>
            <GlobalStyle />
            <Navbar toggleMode={toggleMode} mode={mode} />
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;
