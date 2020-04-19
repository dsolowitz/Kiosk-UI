import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import StartOver from './StartOver'
export class Print extends Component {

    render() {

        return (
            <Container>
                <Row>
                    <Col>
                        <h2>Please Bring this number to the Cashier: {this.props.printCode}</h2>
                    </Col>
                </Row>
                <StartOver {...this.props} />
            </Container>

        )
    }
}


export default Print
