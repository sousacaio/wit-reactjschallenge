import axios, { AxiosResponse } from 'axios'
import { Settings } from "../../Settings/index";

axios.defaults.baseURL = Settings.backend_endpoint
export default class GetDashboardInfo {
    async execute(): Promise<AxiosResponse<any>> {
        return await axios.request({
            method: 'GET',
            url: 'dashboard',
        })
    }
}