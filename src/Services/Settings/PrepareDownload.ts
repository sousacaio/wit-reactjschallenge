import axios from 'axios'
import { Settings as Configs } from "../../Settings/index";

axios.defaults.baseURL = Configs.backend_endpoint

export default class PrepareDownload {
    async execute(): Promise<void> {
        await axios.request({
            method: 'GET',
            url: 'prepare',            
        })
    }
}