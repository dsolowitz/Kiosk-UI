import React, { Component } from 'react'


export class Preview extends Component {


    render() {
        return (

            <div>
                <img style={{ width: '100%'}} src={this.props.response} alt="preview  image"/>
            </div>

        )
    }

}

export default Preview