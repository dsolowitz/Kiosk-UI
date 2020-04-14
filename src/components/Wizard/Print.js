import React, { Component } from 'react'
import Navigation from './Navigation'
import { Container , Row, Col} from 'react-bootstrap'

export class Print extends Component {
    
    render() {
        
        return (
            <Container>
                <Row>
                    <Col>
                        Please Bring this number to the Cashier
                         {this.props.printCode}
                    </Col>
                </Row>
                <Navigation {...this.props}/>
             </Container>
            
        )
    }
}


export default Print
