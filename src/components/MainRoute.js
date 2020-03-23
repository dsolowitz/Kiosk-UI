import React, { useState } from 'react';
import Main from './Main';
import TemplateInstanceProvider from '../contexts/TemplateInstanceContext';
import SplashScreen from './SplashScreen';


const MainRoute = (props) => {

    const [showSplashScreen, setShowSplashScreen] = useState(true);

    const handleCloseSplashScreen = () => {
        setShowSplashScreen(false);
    };

    if (!showSplashScreen) {
        return ( 
            <TemplateInstanceProvider routeData={props.match.params}>
                <Main routeData={props.match.params} />
            </TemplateInstanceProvider>
        );
    }
    else{
        return (<div style={{textAlign: "center"}}><SplashScreen /> <button className='SplashButton' onClick={handleCloseSplashScreen}>Get Started</button></div>);
    } 
}
 
export default MainRoute;