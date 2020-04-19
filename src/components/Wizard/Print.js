import React, { Component } from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import StartOver from './StartOver'
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
               <StartOver {...this.props}/>               
             </Container>
            
        )
    }
}


export default Print
