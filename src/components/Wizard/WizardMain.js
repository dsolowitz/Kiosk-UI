import React, { Component } from 'react'
import StepWizard from 'react-step-wizard'
import EditPhoto from './EditPhoto'
import Message from './Message'
import Review from './Review'
import Nav from './NavBar'

export class WizardMain extends Component {

    render() {
        return (

            <StepWizard isLazyMount={true} nav={<Nav steps={this.props.templateSteps} />}>
                {

                    this.props.templateSteps.map((data, idx) => {


                        if (data.stepTypeId === "dc448967-7fad-42cf-8706-bbe1d124ceac") {
                            return <Message
                                addMsg={this.props.addMsg}
                                text={data.name}
                                templateStepId={data.templateInstanceStepsId}
                                message={this.props.message}
                                startOver={this.props.startOver}
                                key={idx + 1}
                                response={this.props.response}
                                generatePreview={this.props.generatePreview}
                            />
                        }
                        if (data.stepTypeId === "7aa632d5-8423-4ccb-b699-a28f7aeb8481") {
                            return <EditPhoto
                                savePreview={this.props.savePreview}
                                myPrev={this.props.preview}
                                templateStepId={data.templateInstanceStepsId}
                                startOver={this.props.startOver}
                                response={this.props.response}
                                key={idx + 1}
                                getPreview={this.props.getPrev}
                                generatePreview={this.props.generatePreview}
                                uploadState={this.props.uploadState}
                                setUploadState={this.props.setUploadState}
                                saveImage={this.props.saveImage}
                                image={this.props.image}
                            />
                        }
                        if (data.stepTypeId === "6909319f-2ef4-408e-9db8-913bc54d9466") {
                            return <Review
                                preview={this.props.preview}
                                startOver={this.props.startOver}
                                data={data}
                                message={this.props.message}
                                getPreview={this.props.getPrev}
                                response={this.props.response}
                                generatePreview={this.props.generatePreview}
                                templatePost={this.props.templatePost}
                                location={this.props.location}
                                key={idx + 1}
                            />
                        }

                    })
                }
            </StepWizard>


        )
    }
}
export default WizardMain