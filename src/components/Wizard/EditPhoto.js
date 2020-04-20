import * as React from "react"
import {useState} from 'react';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navigation from './Navigation'
import ImageEditor from 'react-avatar-editor'
import Preview from './Preview'
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import Slider from '@material-ui/core/Slider';
import ImageUploader from 'react-images-upload';
import { Container, Row, Col } from 'react-bootstrap'
import StartOver from './StartOver'
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

const muiTheme = createMuiTheme({
  overrides: {

    MuiSlider: {
      root: {
        color: 'white',
        width: '50%'
      }
    },
    MuiButton: {
      containedPrimary: {
        color: 'black',
        backgroundColor: 'white'
      }
    }
  }
});

export class EditPhoto extends React.Component {

  async componentDidMount() {
    this.props.generatePreview()
  }


  state = {
    allowZoomOut: false,
    rotate: 0,
    preview: null,
    scale: 1.2,
    open: false,
    sliderValue: 0
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles),
    });
  }

  snapShot = (pictureFiles, pictureDataURLs) => {

    this.props.saveImage(...pictureDataURLs)
    this.props.setUploadState()
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
    }, () => this.props.savePreview(this.state.preview, this.props.templateStepId))
  }


  handleScale = (e, newValue) => {
    const scale = parseFloat(newValue)
    this.setState({ scale })
    this.setState({sliderValue: scale})
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


  render() {
    if (!this.props.uploadState) {
      return (
        <Container>
          <Row className="text-center">
            <Col xs={12}>
              <h2>Upload a Photo</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={2}></Col>
            <Col xs={8}>
              <ImageUploader
                withIcon={true}
                buttonText='Choose image'
                onChange={this.snapShot}
                imgExtension={['.jpeg', '.gif', '.png', '.gif', '.jpg']}
                maxFileSize={5242880}
                withPreview={true}
                singleImage={true}
                fileContainerStyle={{ backgroundColor: 'rgba(211, 211, 211, 0.6)', boxShadow: 'none' }}
              />
            </Col>
            <Col xs={2}></Col>
          </Row>
        </Container>
      )
    }
    if (this.props.uploadState) {
      return (
        <MuiThemeProvider theme={muiTheme}>
          <Container>

            <Row className="text-center">
              <Col xs={12}>
                <h2>Edit Your Photo</h2>
              </Col>
            </Row>

            <Row>
              <Col xs={3}></Col>
              <Col xs={6}>
                <Preview response={this.props.response} />
              </Col>
              <Col xs={3}></Col>
            </Row>

            <Row><Col>&nbsp;</Col></Row>

            <Row style={{ height: '200px' }}>
              <Col xs={12}>
                <div style={{ height: '10vh', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', position: 'absolute', zIndex: '0' }}>
                    <ImageEditor
                      ref={this.setEditorRef}
                      width={130}
                      height={130}
                      image={this.props.image ? this.props.image : ' '}
                      scale={parseFloat(this.state.scale)}
                      rotate={parseFloat(this.state.rotate)}
                      border={35}
                      onPositionChange={this.handlePositionChange}
                      className="editor-canvas"
                    />
                    <button style={{ zIndex: '1', position: 'absolute', backgroundColor: 'transparent', height: '100%', borderColor: 'transparent' }} onClick={this.rotateLeft}><RotateLeftIcon fontSize='large' /></button>
                    <button style={{ right: '0', zIndex: '1', position: 'absolute', backgroundColor: 'transparent', height: '100%', borderColor: 'transparent' }} onClick={this.rotateRight}><RotateRightIcon fontSize='large' /></button>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={1} />
              <Col xs={10}>
                <div>
                  <RangeSlider variant='primary' value={this.state.sliderValue} min={1} max={2} step={0.01} onChange={changeEvent => this.handleScale(null, changeEvent.target.value)} />
                </div>
                
              </Col>
              <Col xs={1} />
            </Row>

            <Row><Col>&nbsp;</Col></Row>

            <Row>
              <Col xs={12}> <Navigation {...this.props} /> </Col>
            </Row>
            
            <Row>
              <Col xs={12}><StartOver {...this.props} /></Col>
            </Row>

          </Container>
        </MuiThemeProvider>

      );
    }
  }
}

export default withStyles({ withTheme: true })(EditPhoto)

