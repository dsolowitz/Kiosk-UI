import React, {useContext, useState } from 'react';
import {TemplateInstanceContext} from '../../contexts/TemplateInstanceContext';
import './Modal.scss';
import PlaceHolderImage from './../../PlaceHolder.JPG';
import { Redirect } from 'react-router-dom';

const Modal = (props) => {
  const {selectedInstance, setSelectedInstance, url} = useContext(TemplateInstanceContext);
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
                          prevPath : url
                        }
              }}
            />
  }
  else {
    return ( 
      <React.Fragment>
        <div className="modal-overlay"/>
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className="modal">
            <div className="">
            <img src={PlaceHolderImage} alt={selectedInstance.name} />
            <div className="buttons">
              <button onClick={Deselect}>Go Back</button>
              <button onClick={Personalize}>Personalize</button>
            </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Modal;