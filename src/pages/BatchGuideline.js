import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';

const severityList = [
    {
        level: 0,
        description: "Undefined"
    },
    {
        level: 1,
        description: "Level 1 (Most severe)"
    },
    {
        level: 2,
        description: "Level 2 (Moderate)"
    },
    {
        level: 3,
        description: "Level 3 (Internal use only)"
    }];

const pipelineControllerList = [
    {
        name: "Airflow",
    },
    {
        name: "Control Shell on crontab"
    },
    {
        name: "Oozie",
    },
]

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

let GeneralSection = (props)=>{
    return (
        <Box component={"form"} autoComplete="off">
            <Typography variant={'h6'}>
                General Information
            </Typography>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <TextField
                        required
                        fullWidth
                        label="Pipeline name"
                        value={props.data.pipelineName}
                        onChange={(e)=>{props.setData({...props.data, pipelineName: e.target.value})}}
                        margin="dense"
                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Last update"
                        value={props.data.lastUpdate}
                        InputProps={{
                            readOnly: true,
                        }}
                        margin="none"
                        helperText="Update automatically on save"
                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Severity Level"
                        select
                        value={props.data.severity}
                        onChange={(e)=>{props.setData({...props.data, severity: e.target.value})}}
                        margin="none">
                        {severityList.map((item)=>(
                            <MenuItem key={item.level} value={item.level}>
                                {item.description}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid xs={12}>
                    <TextField
                        fullWidth
                        label="Pipeline controller"
                        select
                        value={props.data.pipelineController}
                        onChange={(e)=>{props.setData({...props.data, pipelineController: e.target.value})}}
                        margin="none">
                        {pipelineControllerList.map((item)=>(
                            <MenuItem key={item.name} value={item.name}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid xs={12}>
                    <TextField
                        fullWidth
                        label="Description"
                        multiline
                        rows={3}
                        value={props.data.description}
                        onChange={(e)=>{props.setData({...props.data, description: e.target.value})}}
                        margin="none"/>
                </Grid>
            </Grid>
        </Box>
    )
}

let BatchGuideline = (props) => {
    const [data, setData] = React.useState(initChecklistData);

    return (
        <div>
            <Header/>
            <GeneralSection data={data} setData={setData}/>
        </div>
    )
}

export default BatchGuideline;