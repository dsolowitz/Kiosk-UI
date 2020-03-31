import React from 'react';
import Template from './Template';

const Wizard = (props) => {
    if (props.location) {
        return <Template accountId={props.history.location.state.accountId} locationId={props.history.location.state.locationId} wizProps={props.history.location.state.templateInstance}/>;
    }
    else {
         return <Template accountId={props.accountId} locationId={props.locationId} wizProps={props.templateInstance}/>;
     }
}

export default Wizard;