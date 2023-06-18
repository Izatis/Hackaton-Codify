import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import type { AxiosRequestConfig, AxiosError } from 'axios'
import { store } from 'app/store/store'

import axios from 'axios'

const axiosBaseQuery = (

    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
): BaseQueryFn<
    {
        url: string
        method: AxiosRequestConfig['method']
        data?: AxiosRequestConfig['data']
        params?: AxiosRequestConfig['params']
    },
    unknown,
    unknown
> =>
    async ({ url, method, data, params }) => {
        try {
            const parsedToken = JSON.parse(localStorage.getItem("token") as string);
            // const accessToken = store.getState()?.auth.token?.token;
            const config: AxiosRequestConfig = {
                url: baseUrl + url,
                method,
                data,
                params,
                headers: {
                    'Authorization': `Bearer ${parsedToken}`,
                    'Content-Type': 'application/json',
                },
            }
            const result = await axios(config)
            return { data: result.data }
        } catch (axiosError) {
            let err = axiosError as AxiosError
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            }
        }
    }

export default axiosBaseQuery;