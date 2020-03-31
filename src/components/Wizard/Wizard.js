import React from 'react';
import Template from './Template';

const Wizard = (props) => {

    if (props.location) {
        return <Template wizProps = {props.history.location.state.templateInstance} route = {props.url}/>
    }
    // else {
    //     return (<Template wizProps ={props.templateInstance.name}/>);
    // }
}

export default Wizard;