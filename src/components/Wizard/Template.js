import React, { Component} from 'react'
import Wizard from './WizardMain'


export class Template extends Component {

    constructor(props) {
        super(props);
    this.state = {
       location : {
        accountId : '27ADCEE8-3263-49F4-AC11-DE1A570A8553',
        locationId: '49B1A4AB-19A8-41CF-849A-5BC1B7338BCD',
       },
        image: null,
        preview: {},
        message : {},
        templateInstances: [],
        steps : [],
        template: {
                    },
        user : true,
        response : ''
    }
}

  

    // async componentDidMount(){
    //     const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    //     const tempUrl = 'https://api-dev.3ovr3.io/TemplateInstances/byaccountlocationtemplate'
    //     const url = new URL(proxyurl + tempUrl)
    //     url.search = new URLSearchParams(this.state.location)
    //     const response = await fetch(url)
    //     const data = await response.json()

    //     let temps = data
    //     let instances = []
    //     for(let x = 0 ; x< temps.length; x++){
    //         instances.push(...temps[x].templateInstances)
    //     }
    //     this.setState({templateInstances: instances})
    //   }


    saveImage = (pic) =>{
        this.setState({
            image: pic
        })
    }

    savePreview = (prev, stepId) =>{
        if(prev !== null){
           
        this.setState({ 
            preview: prev.img,
            steps : [...this.state.steps , {templateStepId : stepId , data: prev.img}],
        }, () => this.generatePreview())}
            
    }

     generatePreview = () => {
        this.setState({
            template : {
                templateId : this.state.templateId,
                steps : [...this.state.steps]
            }
        }, () => this.getPrev())
    }

     getPrev = () =>{
         if(this.state.templateId !== {}){
        const url = 'https://api-dev.3ovr3.io/Templates/preview'
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
            image: null,
            preview: null,
            message: {},
            cStep: 0,
            isActive : false,
            steps: [],
            templateId : '',
            template: {},
            response : ''
        })
    }
    // chooseSteps = (type) =>{
        
    //     for (var i in this.state.templateInstances){
    //         if(this.state.templateInstances[i].templateInstanceId === type){
                
    //             this.setState({activeTemplate : {...this.state.templateInstances[i]}})
    //             this.setState({templateId : this.state.templateInstances[i].templateInstanceId })
    //             this.setState({template: {templateId : this.state.templateInstances[i].templateInstanceId }})
    //         }
            
    //     }
        
    // }

    getStepIdIndex = (arr, id)  => {

        for (let i = 0; i < arr.length; i++) {
          if (arr[i].templateStepId === id) {
      
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
                templateStepId: stepId,
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
                            image = {this.state.image}
                            preview = {this.state.preview}
                            saveImage = {this.saveImage}
                            savePreview = {this.savePreview}
                            generatePreview = {this.generatePreview}
                            getPrev= {this.getPrev}
                            response = {this.state.response}
                        /> 
                     
                 </div>
           
            
                    )}     
    
}



export default Template
