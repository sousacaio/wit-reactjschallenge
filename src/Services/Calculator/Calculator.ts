import { CalculateOperation, Param } from "./interfaces";
import axios, { AxiosResponse } from 'axios'
import { Settings } from "../../Settings/index";

axios.defaults.baseURL = Settings.backend_endpoint
export default class Calculator implements CalculateOperation {
    async execute(parameters: Param, operationType: string): Promise<AxiosResponse<{ body: { result: number } }>> {
        let _id = localStorage.getItem('settingsId') as string | number | boolean
        return await axios.request({
            method: 'POST',
            url: operationType,
            data: parameters,
            headers: { _id }
        })
    }
}