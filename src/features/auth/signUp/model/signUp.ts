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
  isLoading: boolean;
  isToken: string;
  error: string;
}
