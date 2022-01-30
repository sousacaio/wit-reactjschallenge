import { Grid, FormControlLabel, Checkbox, Button } from "@mui/material";
import React, { useEffect } from "react";
import { successModal } from "../Helpers/Modals";
import DownloadSettings from "../Services/Settings/DownloadSettings";
import GetSettings from "../Services/Settings/GetSettings";
import Settings from "../Services/Settings/Settings";

type Props = {}

export const SettingsForm: React.FunctionComponent<Props> = props => {
    const [logStatus, setLogStatus] = React.useState(false)

    const submitSettings = async () => {
        setLogStatus(!logStatus)
        await new Settings().execute({ logStatus:!logStatus })
        await successModal({ text: 'Settings updated', title: 'Success!' })
    }

    const downloadCsvFile = async () => {
        await new DownloadSettings().execute()
    }

    const lookupForSettings = async () => {
        const result = await new GetSettings().execute()
        setLogStatus(result.data.body.logStatus)
    }
    useEffect(() => {
        lookupForSettings()
        // Especifique como limpar depois desse efeito:
        return function cleanup() {

        };
    },[]);

    return (<Grid item xs={12}>
        <FormControlLabel
            control={
                <Checkbox
                    color="secondary"
                    name="logActive"
                    checked={logStatus}
                    onClick={submitSettings} />}
            label="Enable logging on csv file"
        />
        <Button variant="outlined" onClick={downloadCsvFile}>Download csv file</Button>
    </Grid>);
}

