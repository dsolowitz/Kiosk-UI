import React, { useContext } from 'react';
import { TemplateInstanceContext } from '../contexts/TemplateInstanceContext';
import TemplateInstances from './TemplateInstances';
import Modal from './Modal/Modal';
import Wizard from './Wizard/Wizard';

const Main = () => {
  const { accountTemplates, isLoading, selectedInstance } = useContext(TemplateInstanceContext);
  if (isLoading) return (<div>Loading...</div>);
  if (accountTemplates && accountTemplates.length === 1 && accountTemplates[0].templateInstances.length === 1) {
    return (<Wizard templateInstance={accountTemplates[0].templateInstances[0]} />);
  }
  else if (accountTemplates && accountTemplates.length > 0) {
    return (
      <div>



        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm">

                <h3>Select a design to get started: </h3>


              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                &nbsp;
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                {accountTemplates.map(at => {
                  return (
                    <div className="templateHeader" key={at.templateId}>
                      <h3>{at.template.name}</h3>
                      <TemplateInstances templateInstances={at.templateInstances} />
                    </div>
                  );
                })}
                {selectedInstance && <Modal />}


              </div>
            </div>
          </div>
        </div>




      </div>);
  }
  else {
    return (<div>No Templates to Display</div>);
  }
}

export default Main;