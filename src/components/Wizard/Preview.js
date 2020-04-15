import React, { Component } from 'react'


export class Preview extends Component {


    render() {
        return (

            <div>
                <img style={{ width: '100%'}} src={this.props.response} />
            </div>

        )
    }

}

export default Preview