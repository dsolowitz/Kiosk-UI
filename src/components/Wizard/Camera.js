import React, { Component } from "react";
import { MuiThemeProvider } from '@material-ui/core/styles'
import ImageUploader from 'react-images-upload';
import Navigation from './Navigation'
import { Swipeable } from "react-swipeable";
export class Camera extends Component {

    
    constructor(props){
        super(props);
        this.snapShot = this.snapShot.bind(this)

         this.state = {
             screenshot: null,
            }
        
   }

   async componentDidMount(){
    this.props.generatePreview()
}

   
   onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
        pictures: this.state.pictures.concat(pictureFiles),
    });
}

   

      snapShot = (pictureFiles, pictureDataURLs) => {
        this.props.saveImage(...pictureDataURLs)
    }

     render(){

        return (
            <Swipeable onSwipedLeft = {this.props.nextStep} onSwipedRight = {this.props.previousStep} trackMouse = {true} preventDefaultTouchmoveEvent = {true}>
            <MuiThemeProvider>
            <p style = {{fontSize: '20px', textAlign: 'center', color: 'white'}}>Add a Photo</p> 
                <div style = {{height: '100vh'}}>
                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose images'
                        onChange={this.snapShot}
                        imgExtension={['.jpeg', '.gif', '.png', '.gif', '.jpg']}
                        maxFileSize={5242880}
                        withPreview = {true}
                        singleImage = {true}
                        fileContainerStyle = {{backgroundColor: 'transparent'}}
                    />
                    
                </div>
            <Navigation {...this.props} ></Navigation>
            </MuiThemeProvider>
            </Swipeable>
            )
            
    }
    
}


    export default Camera