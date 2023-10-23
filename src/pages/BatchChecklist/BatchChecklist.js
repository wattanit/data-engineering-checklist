import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Divider from "@mui/material/Divider";

import GeneralSection from "./GeneralSection";
import InputSection  from "./InputSection";

let initChecklistData = {
    pipelineName: "",
    lastUpdate: "1970-01-01 12:00:00",
    description: "",
    severity: 0,
    pipelineController: "",
    input: [
        {
            name: "",
            type: "",
            otherType: "",
            source: "",
            reliability: "",
            validationRequired: false,
            validationList: "",
            hasSensitiveData: false,
            sensitiveDataList: "",
        }
    ],
    jobGroup: [
        {
            groupName: "",
            groupDescription: "",
            canResume: false,
            canRerun: false,
            hasSensitiveData: false,
            sensitiveDataList: "",
            jobs: [
                {
                    jobName: "",
                    jobType: "",
                    jobDescription: "",
                    inputList: [
                        {
                            name: "",
                            type: "",
                        }
                    ],
                    program: {
                        type: "",
                        details: {}
                    },
                    storage: {
                        type: "",
                        details: {}
                    },
                    outputList: [
                        {
                            name: "",
                            type: "",
                        }
                    ],
                    errorHanding: "",
                    log: {
                        hasLog: false,
                        details: ""
                    },
                    monitoring: {
                        hasSlackNotification: false,
                        slackChannel: "",
                        hasAirFlowNotification: false,
                        hasPlatformAert: false,
                        monitoringList: ""
                    }
                }
            ]
        }
    ],
    output: [
        {
            name: "",
            type: "",
            consumerSeverityLevel: 0,
            requireValidationSupport: false,
            validationList: "",
            requirePublisherCheck: false,
            publisherList: "",
            hasSensitiveData: false,
            sensitiveDataList: "",
        }
    ],
    monitoring: {
        jobLog: {
            hasUnifiedLog: false,
            hasLogHousekeeping: false,
        },
        monitoring: {
            slack: {
                hasSlackNotification: false,
                slackChannel: "",
                monitoringPerson: "",
                hasPersonNotified: false,
            },
            airflow: {
                hasAirFlowNotification: false,
                monitoringPerson: "",
                hasPersonNotified: false,
            },
            platform: {
                hasPlatformAlert: false,
                slackChannel: "",
                monitoringPerson: "",
                hasPersonNotified: false,
            }
        }
    }
}

let Header = ()=>(
    <Container sx={{
        display: "flex",
        justifyContent: "space-between",
    }}>
        <Typography variant={'h5'}>
            Batch Pipeline Design Checklist
        </Typography>
        <Button variant="outlined">Load YAML</Button>
    </Container>
);

let BatchChecklist = (props) => {
    const [data, setData] = React.useState(initChecklistData);
    return (
        <div>
            <Header/>
            <GeneralSection data={data} setData={setData}/>
            <br/><Divider/>
            <InputSection data={data} setData={setData}/>

        </div>
    )
}

export default BatchChecklist;