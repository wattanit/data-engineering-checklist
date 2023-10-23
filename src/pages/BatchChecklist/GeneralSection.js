import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

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
                        required
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
                        required
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

export default GeneralSection;