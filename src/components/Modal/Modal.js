import React, {useContext, useState } from 'react';
import {TemplateInstanceContext} from '../../contexts/TemplateInstanceContext';
import PlaceHolderImage from './../../PlaceHolder.JPG';
import { Redirect } from 'react-router-dom';
import BModal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
      <BModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <BModal.Header closeButton>
        <BModal.Title id="contained-modal-title-vcenter">
        {selectedInstance.name}
        </BModal.Title>
      </BModal.Header>
      <BModal.Body>
        <img src={PlaceHolderImage} alt={selectedInstance.name} />
      </BModal.Body>
      <BModal.Footer>
        <Button  onClick={Deselect}>Go Back</Button>
        <Button onClick={Personalize}>Personalize</Button>
      </BModal.Footer>
    </BModal>
    );
  }
}
 
export default Modal;