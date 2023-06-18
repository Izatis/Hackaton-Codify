export interface IUserAuthorization {
  email: string;
  password: string;
}

export interface IAuthorizationState {
  isToken: string;
  isLoading: boolean;
  error: string;
}
