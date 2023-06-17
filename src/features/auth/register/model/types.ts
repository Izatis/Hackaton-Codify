export interface REGISTER_MODEL {
    email: string
    password: string
    phone_number: string
    region: string
    city_district: string
    address: string
}

export interface REGISTER_RESPONSE {
    email: string | null
    tokens: TOKENS_MODEL | null
    phone_number: string | null
    region: string | null
    city_district: string | null
    address: string | null
}

export interface TOKENS_MODEL {
    refresh: string 
    access: string
}