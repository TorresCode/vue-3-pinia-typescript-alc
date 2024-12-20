import axios, { AxiosInstance } from "axios";
import HttpClient from "./HttpClient";

class HttpClientAdapter implements HttpClient {
    private axiosInstance: AxiosInstance | null = null;
    private static instance: HttpClientAdapter | null = null;
    constructor () {
        const baseURL = 'http://localhost:89/'
        this.axiosInstance = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    static getInstance(): HttpClient
    {
        if (!this.instance) {
            this.instance = new HttpClientAdapter()
        }
        return this.instance
    }

    async get(url: string, configs?: object): Promise<any> {
        return await this.axiosInstance?.get(url, configs);
    }
    async post(url: string, body: any, configs?: object): Promise<any> {
        return await this.axiosInstance?.post(url, body, configs);
    }
    async put(url: string, body: any, configs?: object): Promise<any> {
        return await this.axiosInstance?.put(url, body, configs);
    }
    async delete(url: string, configs?: object): Promise<any> {
        return await this.axiosInstance?.delete(url, configs);
    }
}

export default HttpClientAdapter.getInstance()