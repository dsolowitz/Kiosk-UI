import React from 'react';
import RaisedButton from '@material-ui/core/Button';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

const buttonStyles = {
    height: '100vh',
    color: "white",
    fontSize: "2em",
    backgroundColor: "transparent",
    border: "0",
    cursor: "pointer",
    
  };

  

  const buttonLeft = { ...buttonStyles, float: "left" };
  const buttonRight = { ...buttonStyles, float: "right" };


class Navigation extends React.Component {

    render() {
       
        return (
            <div >
            {/* { this.props.currentStep > 1 && 
                    
                    <RaisedButton onClick={this.props.previousStep}style = {buttonLeft}></RaisedButton>
                }
            { this.props.currentStep !== this.props.totalSteps &&  
                    <RaisedButton onClick={this.props.nextStep} style = {buttonRight}></RaisedButton>  
                }   */}
            {   this.props.currentStep > 1 &&
                    <p ><RaisedButton onClick={() => {this.props.startOver() ; this.props.firstStep() }} style = {{color: 'white'}}><ThreeSixtyIcon />Start Over</RaisedButton></p>
                 }
          </div>
        )
    }


}


export default Navigation