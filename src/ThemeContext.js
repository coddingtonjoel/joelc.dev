import React, { useState, createContext } from "react";
import { lightTheme, darkTheme } from "./global/themes";

export const ThemeContext = createContext();

export const ListProvider = props => {
    const [theme, setTheme] = useState(lightTheme);

    return (
        <ListContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ListContext.Provider>
    );
};
