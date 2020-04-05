import React from 'react';


const SplashScreen = () => {
    return (
        <div className="container splash">
            <div className="row">
                <div className="col-sm">
                    <div className="logo"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <h1 className="splashText">What do you want to personalize today?</h1>
                </div>
            </div>
        </div>
    );
}

export default SplashScreen;