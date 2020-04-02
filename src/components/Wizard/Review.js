import React, { Component } from 'react'
import Navigation from './Navigation'
import {Swipeable} from 'react-swipeable'
import Preview from './Preview'

export class Review extends Component {

    
    
    async componentDidMount(){
        this.props.generatePreview()
    }
   
    render() {
      
        return (
            <Swipeable onSwipedLeft = {this.props.nextStep} onSwipedRight = {this.props.previousStep} trackMouse = {true} preventDefaultTouchmoveEvent = {true}>
            <div style = {{height: '100vh', overflow: 'hidden'}}>
                   
            <Preview response = {this.props.response} />
                    
                </div>                
                <Navigation {...this.props}></Navigation>
            </Swipeable>
        )
    }
}
export default Review
