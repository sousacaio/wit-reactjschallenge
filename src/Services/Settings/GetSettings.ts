import axios, { AxiosResponse } from 'axios'
import { Settings as Configs } from "../../Settings/index";

axios.defaults.baseURL = Configs.backend_endpoint

export default class GetSettings {
    async execute(): Promise<AxiosResponse<{ body: { _id: string, logStatus: boolean } }>> {
        let _id: string | null = localStorage.getItem('settingsId')
        const result = await axios.request({ method: 'GET', url: `settings/${_id}` })
        if (result.data.body._id) {
            localStorage.setItem('settingsId', result.data.body._id)
        }
        return result
    }
}