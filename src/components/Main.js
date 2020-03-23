import React, {useContext } from 'react';
import {TemplateInstanceContext} from '../contexts/TemplateInstanceContext';
import TemplateInstances from './TemplateInstances';

const Main = () => {
    const {templateInstances, isLoading,selectedInstance} = useContext(TemplateInstanceContext);
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
    </div>);
    } else {
        return (<div>No Templates to Display</div>);
    }
}

export default Main;