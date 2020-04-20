import React, { Component } from 'react'
import Preview from './Preview'
import { InputGroup, FormControl } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import Navigation from './Navigation'
import StartOver from './StartOver';


export class Message extends Component {

    async componentDidMount() {
        this.props.generatePreview()
    }

    handleChange = (text, type) => {
        this.props.addMsg(text, type)
    }


    render() {

        return (
            <Container>
                <Row className="text-center">
                    <Col xs={12}>
                        <h2>Add Your Message</h2>
                    </Col>
                </Row>
                <Row><Col>&nbsp;</Col></Row>
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                        <Preview response={this.props.response} />
                    </Col>
                    <Col xs={2}></Col>
                </Row>
                <Row><Col>&nbsp;</Col></Row>
                <Row>
                <Col xs={1}></Col>
                    <Col xs={10}>
                        <InputGroup>
                            <FormControl placeholder='Enter your message'
                                onChange={(e) => { this.handleChange(e.target.value, e.target.name) }}
                                name={this.props.templateStepId} />
                        </InputGroup>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row><Col>&nbsp;</Col></Row>
                <Row>
                    <Col xs={12}>
                        <Navigation {...this.props} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <StartOver {...this.props} />
                    </Col>
                </Row>


            </Container>

        )
    }


}

export default Message
