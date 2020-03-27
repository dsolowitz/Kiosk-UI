import React, { createContext, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    //Nothing coming back in state...
    //We could also set things in stage like imagery?  Or we can do it all in css variables?
      useEffect(() => {
        const fetchTheme = async () => {
            try {
                // Based on the account id in the context we should switch out to that css file. 
                // Swap out the random number for the account id guid.
                var number = Math.floor(Math.random() * Math.floor(3));

                const style = document.createElement("link");
                style.href = "./themes/theme-" + number + ".css";
                style.rel = "stylesheet";
                style.async = true;

                console.log(style.href)
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