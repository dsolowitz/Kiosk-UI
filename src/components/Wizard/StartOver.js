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
        <footer className="fixed-bottom">
            <Container>
                <Row>
                    <Col className="text-left" style={{padding:'2rem'}}>
                        <Button variant="warning" onClick={this.handleClick}><FontAwesomeIcon icon={faUndo} /> Start Over</Button>
                    </Col>
                </Row>
            </Container>
         
        </footer>
    );
    }
}


export default StartOver;