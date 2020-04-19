import React, { Component} from 'react'
import Wizard from './WizardMain'


export class Template extends Component {

    constructor(props) {
        super(props);
    this.state = {
        location: {
            accountId : this.props.accountId,
            locationId: this.props.locationId
        },
        preview: {},
        message : {},
        templateInstances: [],
        steps : [],
        template: {},
        response : '',
        path: this.props.route,
        upload : false,
        image : ''
    }
}

    saveImage = (pic) =>{
        this.setState({
            image: pic
        })
    }


    uploadPhoto = () => {
        this.setState({upload : true})
    }

    savePreview = (prev, stepId) =>{
        if(prev !== null){
           
        this.setState({ 
            preview: prev.img,
            steps : [...this.state.steps , {templateInstanceStepId : stepId , data: prev.img}],
        }, () => this.generatePreview())}
            
    }

     generatePreview = () => {
        this.setState({
            template : {
                templateInstanceId : this.props.wizProps.templateInstanceId,
                steps : [...this.state.steps]
            }
        }, () => this.getPrev())
    }

     getPrev = () =>{
         if(this.state.templateId !== {}){
        const url = 'https://api-dev.3ovr3.io/TemplateInstances/preview'
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

        fetch(proxyUrl + url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.template)
          })
          .then(response => response.json())
        .then(data => this.setState({ response: data }));
         return true
        }
    }
    
    startOver = () =>{
        this.setState({
            preview: null,
            message: {},
            steps: [],
            template: {},
            response : '',
          
        })  
        let path = this.state.path
        return path
    }
   
  

    getStepIdIndex = (arr, id)  => {

        for (let i = 0; i < arr.length; i++) {
          if (arr[i].templateInstanceStepId === id) {
      
            return i;
          }
        }
        return -1;
      }
      

    addMsg = (msg , stepId) =>{

       
        let message = this.state.message
        message[stepId] = msg
        this.setState({message})

        let stepIdIndex = this.getStepIdIndex(this.state.steps, stepId);
        if (stepIdIndex === -1) {
            this.setState(prevState => ({
            steps: [...prevState.steps, {
                templateInstanceStepId: stepId,
                data: msg
            }]
            }));
        } else {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.steps[stepIdIndex].data=msg;
            this.setState({steps:[...this.state.steps]});
        }
    }
   

    render() {
        
        return (

                    <div style= {{width: '100%', height:'auto', margin: '0px', padding: '0px', overflowX : 'hidden'}}> 
                       
                        <Wizard 
                            templateSteps= {this.props.wizProps.templateInstanceSteps}
                            activeTemplate= {this.props.wizProps}
                            startOver = {this.startOver}
                            addMsg = {this.addMsg}
                            message = {this.state.message}
                            preview = {this.state.preview}
                            saveImage = {this.saveImage}
                            image = {this.state.image}
                            savePreview = {this.savePreview}
                            generatePreview = {this.generatePreview}
                            getPrev= {this.getPrev}
                            response = {this.state.response}
                            templatePost = {this.state.template}
                            location = {this.state.location}
                            uploadState = {this.state.upload}
                            setUploadState = {this.uploadPhoto}
                        /> 
                     
                 </div>
           
            
                    )}     
    
}



export default Template