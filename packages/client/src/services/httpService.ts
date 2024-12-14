import axios, { AxiosInstance } from 'axios';

// can be encapsulated so a library can be switched later.
const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://api.example.com', // dodaj url searcha
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;