import React from 'react';
import {Button, Container, Row, Col }from 'react-bootstrap'
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import { Redirect} from "react-router-dom";

let route = ''

class Navigation extends React.Component {

    state = {
        redirect: false ,
    }

    handleClick = () => {
        route = this.props.startOver()
        this.setState({redirect: true});    
    }
    

    render() {
        if (this.state.redirect) {
            return <Redirect push to={route} />;
          }
       
        return (
            <Container >
                <Row>
                    <Col>
                        { this.props.currentStep > 1 && 
                                
                                <Button onClick={this.props.previousStep}>Go Back</Button>
                            }
                    </Col>  
                    <Col> 
                        { this.props.currentStep !== this.props.totalSteps &&  
                                <Button onClick={this.props.nextStep} >Approve</Button>  
                            } 
                    </Col> 
                   
                </Row> 
                <Row>
                    <Col>
                       
                                <p> <Button onClick={this.handleClick} style = {{color: 'white'}}><ThreeSixtyIcon />Start Over</Button></p>
                            
                    </Col>
                </Row>
          </Container>
        )
    }


}


export default Navigation