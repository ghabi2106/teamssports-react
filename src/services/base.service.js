import { authHeader } from '../utils/auth-header';
import axios from '../utils/config';


export class BaseService {
    constructor(
        url
    ) {
        this.serviceUrl = url;
        this.requestOptions = {
            headers: authHeader()
            // responseType: 'blob'
        };
        this.axios = axios;
    }

    getAll() {
        return axios.get(`${this.serviceUrl}`, this.requestOptions);
    }

    get(id) {
        return axios.get(`${this.serviceUrl}/${id}`, this.requestOptions);
    }

    post(data) {
        return axios.post(`${this.serviceUrl}`, data, this.requestOptions);
    }

    put(data) {
        return axios.put(`${this.serviceUrl}`, data, this.requestOptions);
    }

    delete(id) {
        return axios.delete(`${this.serviceUrl}/${id}`, this.requestOptions);
    }

}