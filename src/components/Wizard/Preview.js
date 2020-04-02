import React, { Component } from 'react'


export class Preview extends Component {

    
    render(){
        return (

       
                <div>
                            <img
                                style = {{display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    width: '50vw'}}
                                src={this.props.response}
                            />
                            
                    </div>                
       
        )
    }

    }

export default Preview