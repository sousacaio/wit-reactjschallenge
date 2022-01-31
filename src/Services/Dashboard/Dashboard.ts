import axios, { Axios, AxiosResponse } from 'axios'
import { Settings } from "../../Settings/index";
import { IDashboard } from './interfaces';

axios.defaults.baseURL = Settings.backend_endpoint
export default class GetDashboardInfo {
    async execute(): Promise<AxiosResponse<IDashboard>> {
        return await axios.request({
            method: 'GET',
            url: 'dashboard',
        })
    }
}