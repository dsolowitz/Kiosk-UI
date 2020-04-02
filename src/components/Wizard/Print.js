import React, { Component } from 'react'
import Navigation from './Navigation'
import {Swipeable} from 'react-swipeable'

export class Print extends Component {
    
    render() {
        
        return (
            <Swipeable onSwipedLeft = {this.props.nextStep} onSwipedRight = {this.props.previousStep} trackMouse = {true} preventDefaultTouchmoveEvent = {true}>
            <div style = {{height: '100vh', overflow: 'hidden'}}>

                <Navigation {...this.props} ></Navigation>
                </div>
            </Swipeable>
        )
    }
}


export default Print
