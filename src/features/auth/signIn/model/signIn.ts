export interface IUserAuthorization {
  email: string;
  password: string;
}

export interface IAuthorizationState {
  token: string;
  isLoading: boolean;
  error: string;
}
