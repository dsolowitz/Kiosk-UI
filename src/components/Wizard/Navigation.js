import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import { Redirect } from "react-router-dom";


class Navigation extends React.Component {

    render() {

        return (
            <Container>
                <Row>
                    <Col xs={6} className="text-left">
                        {this.props.currentStep > 1 &&

                            <Button variant="secondary" onClick={this.props.previousStep}>Go Back</Button>
                        }
                    </Col>
                    <Col xs={6} className="text-right">
                        {this.props.currentStep !== this.props.totalSteps &&

                            <Button variant="primary" onClick={this.props.nextStep} >Approve</Button>
                        }
                    </Col>

                </Row>

            </Container>
        )
    }


}


export default Navigation