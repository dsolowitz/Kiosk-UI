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
            <ThemeProvider routeData={props.match.params}>
                <TemplateInstanceProvider routeData={props.match.params}>
                    <Main routeData={props.match.params} />
                </TemplateInstanceProvider>
            </ThemeProvider>
        );
    }
    else {
        return (
            <ThemeProvider routeData={props.match.params}>
                <div style={{ textAlign: "center" }}>
                    <SplashScreen />
                    <button className='PrimaryButton' onClick={handleCloseSplashScreen}>Get Started</button>
                </div>
            </ThemeProvider>
        );
    }
}

export default MainRoute;