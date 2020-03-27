import { MuiThemeProvider } from '@material-ui/core/styles'
import React, { Component } from 'react'
import Navigation from './Navigation'
import {Swipeable} from 'react-swipeable'
import Preview from './Preview'

export class Review extends Component {

    
    
    async componentDidMount(){
        this.props.getPreview()
    }
   
    render() {
      
        return (
            <Swipeable onSwipedLeft = {this.props.nextStep} onSwipedRight = {this.props.previousStep} trackMouse = {true} preventDefaultTouchmoveEvent = {true}>
            <MuiThemeProvider>
            <div style = {{height: '100vh', overflow: 'hidden'}}>
                   
            <Preview response = {this.props.response} />
                    
                </div>                
                <Navigation {...this.props}></Navigation>

            </MuiThemeProvider>
            </Swipeable>
        )
    }
}
export default Review
