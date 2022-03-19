import axios, { AxiosError, AxiosResponse } from 'axios';
import { getToken } from '../utils/getToken';
import { refreshToken } from '../utils/refreshToken';

export const api = axios.create({
    baseURL: process.env.API_BASE_URL,
});

api.interceptors.request.use((response: AxiosResponse) => {
    response.config.headers['Authorization'] = getToken();
    response.config.baseURL = process.env.API_BASE_URL;

    return response;
}, ((error: AxiosError) => {
    refreshToken(error);
    return error;
}));