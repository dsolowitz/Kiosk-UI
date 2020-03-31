import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

export const TemplateInstanceContext = createContext();

const TemplateInstanceProvider = (props) => {
    const [accountTemplates, setAccountTemplates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [accountId,setAccountId] = useState(null);
    const [locationId,setLocationId] = useState(null);
    const [selectedInstance, setSelectedInstance] = useState(null);
    useEffect(() => {
        const fetchTemplateInstances = async () => {
            try {
                setIsLoading(true);
                if (props.routeData && props.routeData.accountid && props.routeData.locationid) {
                    setAccountId(props.routeData.accountid);
                    setLocationId(props.routeData.locationid);
                    if (props.routeData.templateinstanceid) {
                        //Filter Template Instance to one..
                        const response = await axios.get(`https://api-dev.3ovr3.io/TemplateInstances/byaccountlocationtemplate?accountid=${props.routeData.accountid}&locationid=${props.routeData.locationid}&templateInstanceId=${props.routeData.templateinstanceid}`);
                        setAccountTemplates(response.data);
                    }
                    else if (props.routeData.templateid) {
                        //Filter Template
                        const response = await axios.get(`https://api-dev.3ovr3.io/TemplateInstances/byaccountlocationtemplate?accountid=${props.routeData.accountid}&locationid=${props.routeData.locationid}&templateId=${props.routeData.templateid}`);
                        setAccountTemplates(response.data);
                    }
                    else {
                        //Get all template Instances for account and locations
                        const response = await axios.get(`https://api-dev.3ovr3.io/TemplateInstances/byaccountlocationtemplate?accountid=${props.routeData.accountid}&locationid=${props.routeData.locationid}`);
                        setAccountTemplates(response.data);
                    }
                }
                setIsLoading(false);
            } catch (e) {
                console.log(e);
                setAccountTemplates([]);
                setIsLoading(false);
            }
        };
        fetchTemplateInstances();
    }, []);

    const handleSelectedTemplateInstance = templateInstance => {
        setSelectedInstance(templateInstance);
    };

    const contextValue = {
        setSelectedInstance: handleSelectedTemplateInstance,
        accountTemplates,
        isLoading,
        selectedInstance,
        locationId,
        accountId
    };


    return (
        <TemplateInstanceContext.Provider value={contextValue}>
            {props.children}
        </TemplateInstanceContext.Provider>
    )
}

export default TemplateInstanceProvider;