import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./global/themes";
import { GlobalStyle } from "./global/GlobalStyle";

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;
