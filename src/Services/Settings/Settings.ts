import axios, { AxiosResponse } from 'axios'
import { Settings as Configs } from "../../Settings/index";
import { ISettings, ISettingsReturn } from './interfaces';

axios.defaults.baseURL = Configs.backend_endpoint

export default class Settings {
    async execute(data: ISettings): Promise<AxiosResponse<{ body: { _id: string } }>> {
        if (localStorage.getItem('settingsId')) {
            data._id = localStorage.getItem('settingsId')
        }
        const result = await axios.request({
            method: 'POST',
            url: 'settings',
            data
        })
        if (result.data.body._id) {
            localStorage.setItem('settingsId', result.data.body._id)
        }
        return result
    }
}