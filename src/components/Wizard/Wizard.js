import React from 'react';
import Template from './Template';

const Wizard = (props) => {

    if (props.location) {
        return <Template wizProps = {props.history.location.state.templateInstance} route = {props.location.state.prevPath}  accountId={props.location.state.accountId} locationId={props.location.state.locationId}/>
    }
    else {
         return <Template accountId={props.accountId} locationId={props.locationId} wizProps={props.templateInstance}/>;
     }
}

export default Wizard;