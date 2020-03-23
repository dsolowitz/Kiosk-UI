import React from 'react';
import Logo from './../MandM.png';

const SplashScreen = () => {
    return ( 
    <div className="Splash">
        <img className="splashLogo" src={Logo} alt="your logo here" />
        <br/>
        <span className="SplashText">What Do You Want to Personalize Today?</span>
    </div>  
    );
}
 
export default SplashScreen;