import React from "react";
import {  withStyles ,  MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const muiTheme = createMuiTheme({
  overrides: {

    MuiStepper: {
      root: {
        backgroundColor: 'transparent'
      }
    },
      MuiStepLabel: {
          label: {
              color: 'white', // or 'rgba(0, 0, 0, 1)'
              '&$active': {
                  color: 'blue',
              },
              '&$completed': {
                  color: 'lightgray',
              },
          },
      },
  }
});
  
class NavBar extends React.Component {

    getSteps = () => {
        let text = []
        for(let x = 0; x < this.props.steps.length; x++){
            text.push(this.props.steps[x].name)
        }
      return text;
    }
    
  render(){

  
    const activeStep = this.props.currentStep - 1
    const steps = this.getSteps();

    
      return(
        <MuiThemeProvider theme={muiTheme}>
        <div >
        <Stepper  activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            return (
              <Step  key={label} {...stepProps}>
                <StepLabel  >{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        </div>
        </MuiThemeProvider>
      )
  }
}
  export default withStyles({ withTheme: true })(NavBar)