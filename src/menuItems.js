import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import * as React from "react";
import BatchGuideline from "./pages/BatchGuideline";

const menuItems = [
    {
        text: 'Batch Pipeline',
        link: "batch-pipeline",
        icon: <InsertDriveFileIcon/>,
        page: <BatchGuideline/>
    }
]

export default menuItems;