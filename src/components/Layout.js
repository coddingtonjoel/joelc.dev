import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./global/themes";
import { GlobalStyle } from "./global/GlobalStyle";
import { StylesProvider } from "@material-ui/core/styles";

const Layout = ({ children }) => {
    // access this in other places using withTheme()
    const [mode, setMode] = useState(lightTheme);

    const toggleMode = newMode => {
        if (newMode === "Light") {
            setMode(lightTheme);
        }
        if (newMode === "Dark") {
            setMode(darkTheme);
        }
    };

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
