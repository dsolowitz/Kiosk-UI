import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import Navigation from './Navigation'
import {Swipeable} from 'react-swipeable'
import Preview from './Preview'
import { MuiThemeProvider } from '@material-ui/core/styles'




export class Message extends Component {

    async componentDidMount(){
        this.props.generatePreview()
    }

    handleChange = (text, type) =>{
        this.props.addMsg(text, type)
    }

    
    render() {
        
        return (
            <Swipeable onSwipedLeft = {this.props.nextStep} onSwipedRight = {this.props.previousStep} trackMouse = {true} preventDefaultTouchmoveEvent = {true}> 
           <div style = {{height: '100vh', overflow: 'hidden'}}>
               <p style = {{fontSize: '20px', textAlign: 'center', color: 'white'}}>Add Your Message</p>
                
                    <Preview response = {this.props.response} />
                
                    <div style = {{paddingTop: '20px' , display: 'flex', justifyContent: 'center'}}>     
                        <TextField
                        placeholder = 'Enter your message here'
                        onChange = {(e) => {this.handleChange(e.target.value , e.target.name)}}
                        name= {this.props.templateStepId}
                        id = 'msg'
                        style = {{backgroundColor: 'white'}}
                        />
                    </div>
                </div>
                <Navigation {...this.props}></Navigation>
            </Swipeable>
                    )}
            

}

export default Message
