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

                console.log("Route Data:");
                console.log(props.routeData);
                if ((props.routeData && props.routeData.accountid) || props.accountid ) {

                    var aId = props.accountid ? props.accountid : props.routeData.accountid;
                    // Based on the account id in the context we should switch out to that css file. 
                    // Swap out the random number for the account id guid.
                    console.log(aId);
                    const style = document.createElement("link");
                    style.href = "/themes/" + aId + "/theme.css";
                    style.rel = "stylesheet";
                    style.async = true;

                    console.log(style);
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