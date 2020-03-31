import React from 'react';
import RaisedButton from '@material-ui/core/Button';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import { Link } from "react-router-dom";

let route = ''

class Navigation extends React.Component {

    

    handleClick = () => {
        route = this.props.startOver()
       
    }
    

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
                    <p> <Link to ={route}><RaisedButton onClick={this.handleClick} style = {{color: 'white'}}><ThreeSixtyIcon />Start Over</RaisedButton></Link></p>
                 }
          </div>
        )
    }


}


export default Navigation