import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    useEffect(() => {
        console.log(props);
        const fetchTheme = async () => {
            try {

                // apply the default theme first. 
                const style = document.createElement("link");
                style.href = "../themes/default/theme.css";
                style.rel = "stylesheet";
                style.async = true;

                document.head.appendChild(style);


                if (props.routeData && props.routeData.accountid) {

                    // Based on the account id in the context we should switch out to that css file. 
                    // Swap out the random number for the account id guid.

                    const style = document.createElement("link");
                    style.href = "../themes/" + props.routeData.accountid + "/theme.css";
                    style.rel = "stylesheet";
                    style.async = true;

                    document.head.appendChild(style);
                }

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