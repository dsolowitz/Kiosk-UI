import React, { Component } from 'react'
import Navigation from './Navigation'
import Preview from './Preview'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Print from './Print'
import StartOver from './StartOver'

export class Review extends Component {

    state = {
        finish : false,
        postTemplate : this.props.templatePost
    }
    
    async componentDidMount(){
        this.props.generatePreview()
    }
   
    handleClick = () => {
        let post = this.state.postTemplate
        post.locationId = this.props.location.locationId
        post.accountId = this.props.location.accountId

        this.setState({post})
          
        const url = 'https://api-dev.3ovr3.io/PrintQueue'
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

        fetch(proxyUrl + url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.postTemplate)
          })
          .then(response => response.json())
        .then(data => this.setState({ response: data, 
            finish: true
        }));
    }

    render() {
        
        if(this.state.finish){
            return <Print printCode = {this.state.response.printQueueCode} startOver = {this.props.startOver}/>
        }
        return (
            <Container>
                <Row className="text-center">
                    <Col xs={12}>
                        <h2>Review Your Product</h2>
                    </Col>
                </Row>
                <Row><Col>&nbsp;</Col></Row>
                <Row>
                    <Col xs={2}></Col>
                        <Col xs={8}>
                            <Preview response = {this.props.response} />
                        </Col>
                    <Col xs={2}></Col>
                </Row>
                <Row><Col>&nbsp;</Col></Row>
                <Row>
                    <Col xs = {12}>
                        <Navigation print = {this.handleClick} {...this.props}></Navigation>
                    </Col>
                </Row>
                <StartOver {...this.props}/>
            </Container>
                   
                       
        )
    }
}
export default Review
