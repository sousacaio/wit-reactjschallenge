import axios, { AxiosError, AxiosResponse } from 'axios'
import { HttpClient, HttpRequest, HttpResponse } from './interfaces'

export class AxiosHttpClient implements HttpClient {
    async request(data: HttpRequest): Promise<HttpResponse> {
        let axiosResponse: AxiosResponse
        try {
            axiosResponse = await axios.request({
                url: data.url,
                method: data.method,
                data: data.body,
                headers: data.headers
            })
        } catch (error: any | AxiosError) {
            axiosResponse = error.response
        }
        return {
            statusCode: axiosResponse.status,
            body: axiosResponse.data
        }
    }
}