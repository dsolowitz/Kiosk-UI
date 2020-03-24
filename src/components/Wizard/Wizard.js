import React from 'react';

const Wizard = (props) => {
    if (props.location) {
        return (<div>The wizard for {props.location.state.templateInstance.name}</div>);
    }
    else {
        return (<div>The wizard for {props.templateInstance.name}</div>);
    }
}

export default Wizard;