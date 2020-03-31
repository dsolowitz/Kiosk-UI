import React, { useState } from 'react';
import Main from './Main';
import TemplateInstanceProvider from '../contexts/TemplateInstanceContext';
import SplashScreen from './SplashScreen';
import ThemeProvider from '../contexts/ThemeContext';


const MainRoute = (props) => {

    const [showSplashScreen, setShowSplashScreen] = useState(true);

    const handleCloseSplashScreen = () => {
        setShowSplashScreen(false);
    };

    if (!showSplashScreen) {
        return ( 
            <ThemeProvider>
                <TemplateInstanceProvider routeData={props.match.params} url = {props.match.url}>
                    <Main  />
                </TemplateInstanceProvider>
            </ThemeProvider>
        );
    }
    else{
        return (<ThemeProvider><div style={{textAlign: "center"}}><SplashScreen /> <button className='SplashButton' onClick={handleCloseSplashScreen}>Get Started</button></div></ThemeProvider>);
    } 
}
 
export default MainRoute;