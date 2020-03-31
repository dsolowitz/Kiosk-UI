import React from 'react';
import RaisedButton from '@material-ui/core/Button';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import { Link , Redirect} from "react-router-dom";

let route = ''

class Navigation extends React.Component {

    state = {
        redirect: false
    }

    handleClick = () => {
        route = this.props.startOver()
        this.setState({redirect: true});    
    }
    

    render() {
        if (this.state.redirect) {
            return <Redirect push to={route} />;
          }
        return (
            <div >
            {/* { this.props.currentStep > 1 && 
                    
                    <RaisedButton onClick={this.props.previousStep}style = {buttonLeft}></RaisedButton>
                }
            { this.props.currentStep !== this.props.totalSteps &&  
                    <RaisedButton onClick={this.props.nextStep} style = {buttonRight}></RaisedButton>  
                }   */}
            {   this.props.currentStep > 1 &&
                    <p> <RaisedButton onClick={this.handleClick} style = {{color: 'white'}}><ThreeSixtyIcon />Start Over</RaisedButton></p>
                 }
          </div>
        )
    }


}


export default Navigation