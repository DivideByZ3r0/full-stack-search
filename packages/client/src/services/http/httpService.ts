import axios, { AxiosInstance } from 'axios';
import {ENV} from '../constants/constants.ts'

const apiClient: AxiosInstance = axios.create({
    baseURL: `${ENV.API_URL}/api/v1/`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;