import * as React from "react"
import {  withStyles ,  MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navigation from './Navigation'
import {Swipeable} from 'react-swipeable'
import ImageEditor from 'react-avatar-editor'
import Preview from './Preview'
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

const muiTheme = createMuiTheme({
  overrides: {

    MuiSlider: {
      root: {
        color: 'white',
        width: '50%'
      }
    },
    MuiButton:{
      containedPrimary : {
        color: 'black',
        backgroundColor: 'white'
      }
    }
  }
});

export class EditPhoto extends React.Component {

  async componentDidMount(){
    this.props.generatePreview()
}

  
  state ={
    allowZoomOut: false,
    rotate: 0,
    preview: null,
    scale: 1.2, 
    open : false
   
  }

 

  handleSave = data => {
    const img = this.editor.getImageScaledToCanvas().toDataURL()
    const rect = this.editor.getCroppingRect()

    this.setState({
      preview: {
        img,
        rect,
        scale: this.state.scale,
        width: this.state.width,
        height: this.state.height,
        borderRadius: this.state.borderRadius,
      }
    }, () =>  this.props.savePreview(this.state.preview, this.props.templateStepId))
    }
  

  handleScale = (e, newValue) => {
    const scale = parseFloat(newValue)
    this.setState({ scale })
  }

  handleAllowZoomOut = ({ target: { checked: allowZoomOut } }) => {
    this.setState({ allowZoomOut })
  }

  rotateLeft = e => {
    e.preventDefault()

    this.setState({
      rotate: this.state.rotate - 90,
    })
  }

  rotateRight = e => {
    e.preventDefault()
    this.setState({
      rotate: this.state.rotate + 90,
    })
  }

  setEditorRef = editor => {
    if (editor) this.editor = editor
  }


  handleXPosition = e => {
    const x = parseFloat(e.target.value)
    this.setState({ position: { ...this.state.position, x } })
  }

  handleYPosition = e => {
    const y = parseFloat(e.target.value)
    this.setState({ position: { ...this.state.position, y } })
  }

  handleWidth = e => {
    const width = parseInt(e.target.value)
    this.setState({ width })
  }

  handleHeight = e => {
    const height = parseInt(e.target.value)
    this.setState({ height })
  }

  

  handlePositionChange = position => {
    this.setState({ position })
  }


  render(){

        return (
         
            <MuiThemeProvider theme ={muiTheme}> 
               <Swipeable onSwipedLeft = {this.props.nextStep} onSwipedRight = {this.props.previousStep} trackMouse = {true} preventDefaultTouchmoveEvent = {true}>
               <p style = {{fontSize: '20px', textAlign: 'center', color: 'white'}}>Resize and Position your photo within the square below</p>
               </Swipeable>
                  <div style = {{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style= {{display: 'flex', position:'absolute', zIndex: '0'}}>
                      <ImageEditor
                      ref={this.setEditorRef}
                      width = {200}
                      height = {200}
                      image = {this.props.myImage ? this.props.myImage : ' '}
                      scale={parseFloat(this.state.scale)}
                      rotate={parseFloat(this.state.rotate)}
                      border = {50}
                      onPositionChange={this.handlePositionChange}
                      className="editor-canvas"
                          />   
                          <button style = {{zIndex: '1',position: 'absolute', backgroundColor: 'transparent', height: '100%', borderColor: 'transparent'}}onClick={this.rotateLeft}><RotateLeftIcon fontSize = 'large'/></button>
                          <button style = {{right: '0', zIndex: '1',position: 'absolute', backgroundColor: 'transparent', height: '100%', borderColor: 'transparent'}}onClick={this.rotateRight}><RotateRightIcon fontSize = 'large'/></button>
                    </div>
                  </div>   
                  <div style = {{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <p style = {{fontSize: '12px', textAlign: 'left', color: 'white', paddingRight: '20px'}}>Zoom:</p>
                      <Slider
                              name = 'scale'
                              onChange={this.handleScale}
                              min ={1}
                              max = {2}
                              step = {0.01}
                              defaultValue = {1}
                            /> 
                  </div>
                  <div style = {{display:'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                      <Button variant="contained"  onClick= {this.props.previousStep}>
                        Go Back
                      </Button>   
                      <Button variant="contained" onClick={this.handleSave} >
                          Approve
                      </Button>                 
                  </div>
                  <Swipeable onSwipedLeft = {this.props.nextStep} onSwipedRight = {this.props.previousStep} trackMouse = {true} preventDefaultTouchmoveEvent = {true}>
                    <div style= {{display: 'flex', justifyContent: 'center', alignItems: 'center', bottom : '20px', height: '50vh'}}>
                          <Preview response = {this.props.response} />
                        </div>
                   <Navigation {...this.props}></Navigation>  
                   </Swipeable>           
           </MuiThemeProvider> 
  );
        }
}

        export default  withStyles({ withTheme: true })(EditPhoto)

