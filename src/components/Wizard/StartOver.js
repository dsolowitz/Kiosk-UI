import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from "react-router-dom";



let route = ''
class StartOver extends React.Component {

    state = {
        redirect: false,
    }



    handleClick = () => {
        route = this.props.startOver()
        this.setState({ redirect: true });
    }


    render() {

        if (this.state.redirect) {
            return <Redirect push to={route} />;
        }


    return (
            <Container>
                <Row style={{paddingTop: '2rem'}}>
                    <Col className="text-left" xs={6} >
                        <Button variant="warning" onClick={this.handleClick} block><FontAwesomeIcon icon={faUndo} /> Start Over</Button>
                    </Col>
                    <Col xs={6}></Col>
                </Row>
            </Container>
         
    );
    }
}


export default StartOver;