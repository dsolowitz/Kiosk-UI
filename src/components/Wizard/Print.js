import { MuiThemeProvider } from '@material-ui/core/styles'
import React, { Component } from 'react'
import Navigation from './Navigation'
import {Swipeable} from 'react-swipeable'

export class Print extends Component {
    
    render() {
        
        return (
            <Swipeable onSwipedLeft = {this.props.nextStep} onSwipedRight = {this.props.previousStep} trackMouse = {true} preventDefaultTouchmoveEvent = {true}>
            <MuiThemeProvider>
            <div style = {{height: '100vh', overflow: 'hidden'}}>

                <Navigation {...this.props} ></Navigation>
                </div>
            </MuiThemeProvider>
            </Swipeable>
        )
    }
}


export default Print
