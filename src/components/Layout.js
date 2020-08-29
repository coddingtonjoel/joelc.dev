import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./global/themes";
import { GlobalStyle } from "./global/GlobalStyle";
import { StylesProvider } from "@material-ui/core/styles";

const Layout = ({ children }) => {
    // access this in other places using withTheme()
    const [mode, setMode] = useState(lightTheme);

    // prop func sent down to navbar to set new mode in both state and local storage
    const toggleMode = newMode => {
        if (newMode === "Light") {
            setMode(lightTheme);
        }
        if (newMode === "Dark") {
            setMode(darkTheme);
        }
        if (typeof window !== "undefined") {
            localStorage.setItem("mode", newMode);
        }
    };

    // get previous mode (if any) from local storage
    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            localStorage.getItem("mode") !== null
        ) {
            const mode = localStorage.getItem("mode");
            if (mode === "Light") {
                setMode(lightTheme);
            }
            if (mode === "Dark") {
                setMode(darkTheme);
            }
        }
    }, []);

    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={mode}>
                <GlobalStyle />
                <Navbar toggleMode={toggleMode} />
                <main>{children}</main>
                <Footer />
            </ThemeProvider>
        </StylesProvider>
    );
};

export default Layout;
