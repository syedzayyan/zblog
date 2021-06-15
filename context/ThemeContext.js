import React, { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeContextProvider = (props) => {
    const [dark, setDark] = useState("light");
    return(
        <ThemeContext.Provider value = {[dark, setDark]}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider