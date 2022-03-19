import { AxiosError, AxiosResponse } from "axios";
import { api } from "../services/api";
import { getToken } from "./getToken";

export const refreshToken = ((error: AxiosError) => {
    return new Promise((resolve, reject) => {
        try {
            const refreshToken = sessionStorage.getItem('refreshToken');

            const header = {
                'Content-Type': 'application/json',
                Authorization: getToken(),
            };

            const parameters = {
                method: 'POST',
                headers: header,
            };

            const body = {
                grant_type: 'refresh_token',
                refreshToken,
            };

            api.post('/refreshToken', 
                body, 
                { params: parameters },
            ).then(async (response: AxiosResponse) => {
                sessionStorage.setItem('TOKEN_KEY', response.data.token);
                sessionStorage.setItem('REFRESH_TOKEN', response.data.refreshToken);

                return resolve(response);
            }).catch((error: unknown) => {
                const catchError: string = String(error);
                throw new Error(catchError);
            });
        } catch (error: unknown) {
            return reject(error);
        }
    });
});