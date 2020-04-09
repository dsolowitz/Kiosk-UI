import React, { Component } from 'react'
import Preview from './Preview'
import {InputGroup, FormControl} from 'react-bootstrap'
import {Container, Row, Col, Button} from 'react-bootstrap'


export class Message extends Component {

    async componentDidMount(){
        this.props.generatePreview()
    }

    handleChange = (text, type) =>{
        this.props.addMsg(text, type)
    }

    
    render() {
        
        return (
            <Container fluid>
                <Row className='justify-content-md-center' >
                    <Col  md= 'auto' >
                        Add Your Message
                    </Col>
                </Row>
                <Row style = {{padding: '10px'}}>
                    <Col >
                        <Preview response = {this.props.response} />
                    </Col>
                </Row>
                <Row>
                    <Col style = {{paddingTop: '20px' , justifyContent: 'center'}}>     
                        <InputGroup>
                            <FormControl  placeholder = 'Enter your message here'
                            onChange = {(e) => {this.handleChange(e.target.value , e.target.name)}}
                            name= {this.props.templateStepId}/>
                        </InputGroup>
                    </Col>
                </Row>   
                <Row>
                    <Col>

                    </Col>
                </Row> 
                </Container>
                
                    )}
            

}

export default Message
