import React, { Component } from 'react'
import Navigation from './Navigation'
import Preview from './Preview'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Print from './Print'


export class Review extends Component {

    state = {
        finish : false
    }
    
    async componentDidMount(){
        this.props.generatePreview()
    }
   
    handleClick = () => {
        this.setState({finish : true})
    }
    render() {
        
        if(this.state.finish){
            return <Print startOver = {this.props.startOver}/>
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
