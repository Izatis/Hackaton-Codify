export interface IUserRegistration {
  email: string;
  password: string;
  passwordСonfirmation: string;
  phone_number: string;
  region: string;
  city_district: string;
  address: string;
}

export interface IRegisterState {
  token: string;
  isLoading: boolean;
  error: string;
}
