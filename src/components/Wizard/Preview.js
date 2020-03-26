import { MuiThemeProvider } from '@material-ui/core/styles'
import React, { Component } from 'react'


export class Preview extends Component {

    
    render(){
        return (

        <MuiThemeProvider >
                <div>
                            <img
                                style = {{display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    width: '50vw'}}
                                src={this.props.response}
                            />
                            
                    </div>                
        </MuiThemeProvider>
        )
    }

    }

export default Preview