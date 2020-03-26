import React, { createContext, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    //Nothing coming back in state...
    //We could also set things in stage like imagery?  Or we can do it all in css variables?
      useEffect(() => {
        const fetchTheme = async () => {
            try {
                //Get out of the database
                //document.documentElement.setAttribute("data-theme", 'X');
                //document.getElementById("CustomTheme").setAttribute("href", "./themes/themex.css")

                const style = document.createElement("link");
                style.href = "./themes/theme.css";
                //style.href = "./themes/themex.css";
                style.rel = "stylesheet";
                style.async = true;

                document.head.appendChild(style);

            } catch (e) {
                console.log(e);
            }
        };
        fetchTheme();
    }, []);
    return ( 
        <ThemeContext.Provider>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;