import React, { Component } from "react";
import ImageUploader from 'react-images-upload';
import Navigation from './Navigation'
import {Container} from 'react-bootstrap'
export class Camera extends Component {

    
    constructor(props){
        super(props);
        this.snapShot = this.snapShot.bind(this)

        
        
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
                <Container style = {{height: '100vh'}}>
                    <p style = {{fontSize: '20px', textAlign: 'center', color: 'white'}}>Add a Photo</p>
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
                     <Navigation {...this.props} ></Navigation>
                </Container>
           
            )
            
    }
    
}


    export default Camera