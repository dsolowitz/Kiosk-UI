import React from 'react';
import Slider from './Slider';

const TemplateInstances = (props) => {
    if (props.templateInstances && props.templateInstances.length > 0) {
        return (
          <Slider>
            {props.templateInstances.map(ti => (
              <Slider.Item templateInstance={ti} key={ti.templateInstanceId}></Slider.Item>
            ))}
          </Slider>
          );
        } else {
            return (<div>No Instances to Display</div>);
        }
}
 
export default TemplateInstances;