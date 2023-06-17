import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store/store';
import { REGISTER_RESPONSE, TOKENS_MODEL } from '../model/types';

const initialState: REGISTER_RESPONSE = {
    email: null,
    tokens: null,
    phone_number: null,
    region: null,
    city_district: null,
    address: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (
            state: REGISTER_RESPONSE,
            action: PayloadAction<{
                email: string
                tokens: TOKENS_MODEL
                phone_number: string
                region: string
                city_district: string
                address: string
            }>
        ) => {
            const 
            { 
                email, 
                tokens, 
                phone_number, 
                region, 
                city_district, 
                address 
            } = action.payload;
            state.email = email
            state.tokens = tokens
            state.phone_number = phone_number
            state.region = region
            state.city_district = city_district
            state.address = address
        },

        logOut: (state: REGISTER_RESPONSE) => {
            state.email = null
            state.tokens = null
            state.phone_number = null
            state.region = null
            state.city_district = null
            state.address = null
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectEmail = (state: RootState): string | null => state.auth.email;
export const selectTokens = (state: RootState): TOKENS_MODEL | null => state.auth.tokens;
export const selectPhoneNumber = (state: RootState): string | null => state.auth.phone_number;
export const selectRegion = (state: RootState): string | null => state.auth.region
export const selectDistrict = (state: RootState): string | null => state.auth.city_district
export const selectAddress = (state: RootState): string | null => state.auth.address