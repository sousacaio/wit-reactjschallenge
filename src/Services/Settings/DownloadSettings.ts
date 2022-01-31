import axios, { AxiosError } from 'axios'
import { successModal } from '../../Helpers/Modals';
import { Settings as Configs } from "../../Settings/index";

axios.defaults.baseURL = Configs.backend_endpoint

export default class DownloadSettings {
    async execute(): Promise<void> {
        try {
            const result = await axios.request({
                method: 'GET',
                url: 'download-settings/',
                responseType: 'blob'
            })
            const url = window.URL.createObjectURL(new Blob([result.data]))
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'logfile.csv');
            document.body.appendChild(link);
            link.click();
        } catch (error: any | AxiosError) {
            if (error.response.status === 404) {
                await successModal({ text: 'Logfile does not exists yet!', title: 'Your operation gone wrong!' })
            }
        }

    }
}