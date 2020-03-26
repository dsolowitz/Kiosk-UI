import React, { Component } from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import { Card ,  CardTitle, CardActions, CardMedia } from 'material-ui'
import RaisedButton from 'material-ui/RaisedButton'

export class TemplateCard extends Component {
    render() {
        return (
            <MuiThemeProvider>
            <React.Fragment>
                    
                    <Card style={{display: 'inline-block'}}>
                    <CardMedia  style={{height: 100}}
                        />
                        <CardTitle>
                            {this.props.title}
                        </CardTitle>
                       <CardActions>
                       <RaisedButton    
                        label = "Select this template"
                        primary = {false}
                        style = {styles.button}
                        onClick = {() =>{ this.props.start(this.props.templateId)}}
                        />
                       </CardActions>
                    </Card>
                    </React.Fragment>
                    </MuiThemeProvider>
        )
    }
}
const styles = {
    button : {
        margin: 15
    }
}
export default TemplateCard
