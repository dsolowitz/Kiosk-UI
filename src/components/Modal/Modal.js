import React, {useContext } from 'react';
import {TemplateInstanceContext} from '../../contexts/TemplateInstanceContext';
import './Modal.scss';

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
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={Deselect}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p>
            {selectedInstance.templateInstanceId}
          </p>
        </div>
      </div>
    </React.Fragment>
   );
}
 
export default Modal;