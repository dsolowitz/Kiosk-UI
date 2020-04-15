import React, {useContext, useState } from 'react';
import {TemplateInstanceContext} from '../../contexts/TemplateInstanceContext';
import PlaceHolderImage from './../../PlaceHolder.JPG';
import { Redirect } from 'react-router-dom';
import BModal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Modal = (props) => {
  const {selectedInstance, setSelectedInstance, url, accountId, locationId} = useContext(TemplateInstanceContext);
  const [personalize, setPersonalize] = useState(false);
  const Deselect = () => {
    setSelectedInstance(null);
  };

  const Personalize = () => {
    setPersonalize(true);
  }

  if (personalize) {
    return <Redirect
              to={{
                pathname: "/wizard",
                state: { templateInstance: selectedInstance,
                          prevPath : url,
                          accountId : accountId,
                          locationId: locationId
                        }
              }}
            />
  }
  else {
    return ( 
      <BModal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      <BModal.Header closeButton>
        <BModal.Title id="contained-modal-title-vcenter">
        {selectedInstance.name}
        </BModal.Title>
      </BModal.Header>
      <BModal.Body>
        <Container>
          <Row>
            <Col>
              <img src={PlaceHolderImage} alt={selectedInstance.name} alt="preview" style={{width:'100%'}} />
            </Col>
          </Row>
        </Container>
        
      </BModal.Body>
      <BModal.Footer>
        <Container>
          <Row>
            <Col className="text-left"><Button variant="secondary" onClick={Deselect}>Go Back</Button></Col>
            <Col className="text-right"><Button variant="primary" onClick={Personalize}>Personalize</Button></Col>
          </Row>
        </Container>
      </BModal.Footer>
    </BModal>
    );
  }
}
 
export default Modal;