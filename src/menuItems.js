import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import * as React from "react";
import BatchChecklist from "./pages/BatchChecklist/BatchChecklist";

const menuItems = [
    {
        text: 'Batch Pipeline',
        link: "batch-pipeline",
        icon: <InsertDriveFileIcon/>,
        page: <BatchChecklist/>
    }
]

export default menuItems;