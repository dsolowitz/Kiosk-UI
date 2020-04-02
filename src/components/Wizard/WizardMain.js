import React, { Component } from 'react'
import StepWizard from 'react-step-wizard'
import Camera from './Camera'
import EditPhoto from './EditPhoto'
import Message from './Message'
import Review from './Review'
import Print from './Print'
import Nav from './NavBar'

export class WizardMain extends Component {
   
render(){
return(
    
            <StepWizard isLazyMount = {true} nav = {<Nav steps = {this.props.templateSteps}/>}> 
            {
                
                this.props.templateSteps.map((data, idx) => {
                
                    
                if (data.stepTypeId === "dc448967-7fad-42cf-8706-bbe1d124ceac") {
                   
                    return <Message
                    addMsg = {this.props.addMsg}
                    text = {data.name}
                    templateStepId = {data.templateInstanceStepsId}
                    message = {this.props.message}
                    startOver = {this.props.startOver}
                    key={idx + 1}
                    response = {this.props.response}
                    generatePreview = {this.props.generatePreview}
                    
                />
               
                
                }
                if (data.stepTypeId === "7aa632d5-8423-4ccb-b699-a28f7aeb8481"){
                    return <Camera
                    saveImage = {this.props.saveImage}
                    resetCam = {this.props.image}
                    startOver = {this.props.startOver}
                    response = {this.props.response}
                    generatePreview = {this.props.generatePreview}
                    key={idx + 1}
                    />
                }
                if (data.stepTypeId === "fdf91c9c-94c6-466a-a258-b644605d4ac9"){
                    return <EditPhoto
                    myImage = {this.props.image}
                    savePreview = {this.props.savePreview}
                    myPrev = {this.props.preview}
                    templateStepId = {data.templateInstanceStepsId}
                    startOver = {this.props.startOver}
                    response = {this.props.response}
                    key={idx + 1}
                    getPreview = {this.props.getPrev}
                    generatePreview = {this.props.generatePreview}

                />
                }
                if (data.stepTypeId === "6909319f-2ef4-408e-9db8-913bc54d9466"){
                    return <Review
                    preview = {this.props.preview}
                    startOver = {this.props.startOver}
                    data = {data}
                    message = {this.props.message}
                    getPreview = {this.props.getPrev}
                    response = {this.props.response}
                    generatePreview = {this.props.generatePreview}

                    key={idx + 1}
                />
                }
                if (data.stepTypeId === "991e7b88-192e-49c1-961f-ae667e76f4c3"){
                    return <Print startOver = {this.props.startOver}

                    key={idx + 1}/>
                }
            })
            }
        </StepWizard>      


)
        }        
}
export default WizardMain