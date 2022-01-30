import { CalculateOperation, Param } from "./interfaces";
import axios from 'axios'
import { Settings } from "../../Settings/index";


axios.defaults.baseURL = Settings.backend_endpoint
export default class Calculator implements CalculateOperation {
    async execute(parameters: Param, operationType: string) {
        await axios.request({
            method: 'POST',
            url: operationType,
            data: parameters,
        })
    }
}