import React, {useContext } from 'react';
import {TemplateInstanceContext} from '../../contexts/TemplateInstanceContext';
import './Modal.scss';
import PlaceHolderImage from './../../PlaceHolder.JPG';

const Modal = () => {
  const {selectedInstance, setSelectedInstance} = useContext(TemplateInstanceContext);
  const Deselect = () => {
    setSelectedInstance(null);
  };
  return ( 
    <React.Fragment>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="">
          <p>
            <h1>{selectedInstance.name}</h1>
          </p>
          <img src={PlaceHolderImage} alt={selectedInstance.name} />
          <div className="buttons">
            <button onClick={Deselect}>Go Back</button>
            <button>Personalize</button>
          </div>
          </div>
        </div>
      </div>
    </React.Fragment>
   );
}
 
export default Modal;