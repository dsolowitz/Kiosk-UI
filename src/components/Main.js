import React, {useContext } from 'react';
import {TemplateInstanceContext} from '../contexts/TemplateInstanceContext';
import TemplateInstances from './TemplateInstances';
import Modal from './Modal/Modal';
import Wizard from './Wizard/Wizard';

const Main = () => {
    const {templateInstances, isLoading, selectedInstance} = useContext(TemplateInstanceContext);
    if (isLoading) return (<div>Loading...</div>);
    if (templateInstances && templateInstances.length > 1) {
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
        {selectedInstance &&  <Modal />}
    </div>);
    } else if (templateInstances && templateInstances.length === 1 && templateInstances[0].templateInstances.length === 1) {
        return (<Wizard templateInstance={templateInstances[0].templateInstances[0]} />);
    }
    else {
      return (<div>No Templates to Display</div>);
    }
}

export default Main;