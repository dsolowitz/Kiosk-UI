import React, { Component } from 'react'
import Navigation from './Navigation'
import Preview from './Preview'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Print from './Print'


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
                <Row>
                    <Col>
                        <Preview response = {this.props.response} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Navigation {...this.props}></Navigation>
                    </Col>
                    <Col>
                        <Button onClick ={this.handleClick} >Print</Button>
                    </Col>
                </Row>
            </Container>
                   
                       
        )
    }
}
export default Review
