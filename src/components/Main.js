import React, {useContext } from 'react';
import {TemplateInstanceContext} from '../contexts/TemplateInstanceContext';
import TemplateInstances from './TemplateInstances';
import Modal from './Modal/Modal';
import useModal from './Modal/useModal';

const Main = () => {
    const {templateInstances, isLoading,selectedInstance} = useContext(TemplateInstanceContext);
    const {isShowing, toggle} = useModal();
    if (isLoading) return (<div>Loading...</div>);
    if (templateInstances && templateInstances.length > 0) {
    return (
    <div>
        {templateInstances.map(at => {
          return (
            <div className="templateHeader" key={at.templateId}>
              <h1>{at.template.name}</h1>
              <TemplateInstances templateInstances={at.templateInstances} />
            </div>
          );
        })}
    {selectedInstance && <div>We have selected an instance {selectedInstance.templateInstanceId}</div>}
    {selectedInstance && <Modal isShowing={isShowing} hide={toggle} />}
    </div>);
    } else {
        return (<div>No Templates to Display</div>);
    }
}

export default Main;