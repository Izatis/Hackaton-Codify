import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { REGISTER_MODEL, REGISTER_RESPONSE } from '../model/types';
import { API_URL } from 'shared/config/env-config';

export const REGISTER_API_REDUCER_KEY = 'register';
export const registerApi = createApi({
    reducerPath: REGISTER_API_REDUCER_KEY,
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    
    endpoints: ({ mutation }) => ({

        register: mutation<REGISTER_RESPONSE, REGISTER_MODEL>({
            query: (body) => ({
                url: 'v1/users/register/',
                method: 'POST',
                body,
            }),
        }),

    }),
});

export const {
    useRegisterMutation
} = registerApi;