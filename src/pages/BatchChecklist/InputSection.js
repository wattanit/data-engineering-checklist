import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";

const inputTypeList = [
    {
        name: "File",
    },
    {
        name: "Hive Table",
    },
    {
        name: "HBase Table",
    },
    {
        name: "Kafka Topic",
    },
    {
        name: "Others"
    }
]

let InputSection = (props)=>{
    let data = props.data.input;

    let addNewGroup = ()=>{
        let itemData = props.data.input;
        itemData.push({
            name: "",
            type: "",
            otherType: "",
            source: "",
            reliability: "",
            validationRequired: false,
            validationList: "",
            hasSensitiveData: false,
            sensitiveDataList: "",
        });
        props.setData({...props.data, input: itemData});
    }

    let inputGroups = data.map((item, index)=>{
        let localSetData = (newItem)=>{
            let itemData = props.data.input;
            itemData[index] = newItem;
            props.setData({...props.data, input: itemData});
        }
        let localDeleteData = ()=>{
            let itemData = props.data.input;
            itemData.splice(index, 1);
            props.setData({...props.data, input: itemData});
        }

        return (
            <InputGroup key={index} item={item} setData={localSetData} deleteData={localDeleteData}/>
        )
    });


    return (
        <Box component={"form"} autoComplete="off">
            <Typography variant={'h6'}>Pipeline Input</Typography>
            {inputGroups}
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Button variant="outlined" onClick={addNewGroup}>Add Input</Button>
            </Box>
        </Box>
    );
}

let InputGroup = (props)=>{
    return (
        <Paper elevation={3} sx={{padding: 2, marginBottom: 2}}>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <TextField
                            fullWidth
                            required
                            label="Input name"
                            value={props.item.name}
                            onChange={(e)=>{
                                let oldItem = props.item;
                                oldItem.name = e.target.value;
                                props.setData(oldItem);
                            }}
                            margin="none"/>
                        <Button variant="outlined" color={"error"} onClick={props.deleteData}>Delete</Button>
                    </Box>
                </Grid>
                <Grid xs={12} sm={(props.item.type === "Others")?6:12}>
                    <TextField
                        fullWidth
                        required
                        label="Input type"
                        select
                        value={props.item.type}
                        onChange={(e)=>{
                            let oldItem = props.item;
                            oldItem.type = e.target.value;
                            oldItem.otherType = "";
                            props.setData(oldItem);
                        }}
                        margin="none">
                        {inputTypeList.map((item)=>(
                            <MenuItem key={item.name} value={item.name}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                {props.item.type === "Others" && (
                    <Grid xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Other type (Please specify)"
                            value={props.item.otherType}
                            onChange={(e)=>{
                                let oldItem = props.item;
                                oldItem.otherType = e.target.value;
                                props.setData(oldItem);
                            }}
                            margin="none"/>
                    </Grid>
                )}
                <Grid xs={12} sm={6}>
                    <TextField
                        fullWidth
                        required
                        label="Source"
                        select
                        value={props.item.source}
                        onChange={(e)=>{
                            let oldItem = props.item;
                            oldItem.source = e.target.value;
                            props.setData(oldItem);
                        }}
                        margin="none">
                        {["Internal", "External"].map((item)=>(
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid xs={12} sm={6}>
                    <TextField
                        fullWidth
                        required
                        label="Reliability"
                        select
                        value={props.item.reliability}
                        onChange={(e)=>{
                            let oldItem = props.item;
                            oldItem.reliability = e.target.value;
                            props.setData(oldItem);
                        }}
                        margin="none">
                        {["Reliable", "Unreliable"].map((item)=>(
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid xs={12}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={props.item.validationRequired}/>} label={"Require validation"} onChange={(e)=>{
                            let oldItem = props.item;
                            oldItem.validationRequired = e.target.checked;
                            if(!e.target.checked) {
                                oldItem.validationList = "";
                            }
                            props.setData(oldItem);
                        }}/>
                        {props.item.validationRequired && (
                            <TextField
                                fullWidth
                                label="Validation list"
                                value={props.item.validationList}
                                onChange={(e)=>{
                                    let oldItem = props.item;
                                    oldItem.validationList = e.target.value;
                                    props.setData(oldItem);
                                }}
                                helperText={"Please specify validation items"}
                                margin="none"/>
                        )}
                    </FormGroup>
                </Grid>
                <Grid xs={12}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={props.item.hasSensitiveData}/>} label={"Has sensitive data & PII"} onChange={(e)=>{
                            let oldItem = props.item;
                            oldItem.hasSensitiveData = e.target.checked;
                            if(!e.target.checked) {
                                oldItem.sensitiveDataList = "";
                            }
                            props.setData(oldItem);
                        }}/>
                        {props.item.hasSensitiveData && (
                            <TextField
                                fullWidth
                                label="Sensitive data list"
                                value={props.item.sensitiveDataList}
                                onChange={(e)=>{
                                    let oldItem = props.item;
                                    oldItem.sensitiveDataList = e.target.value;
                                    props.setData(oldItem);
                                }}
                                helperText={"Please specify list of sensitive data"}
                                margin="none"/>
                        )}
                    </FormGroup>
                </Grid>

            </Grid>
        </Paper>
    )
}

export default InputSection;