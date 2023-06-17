export interface IUserAuthorization {
  username: string;
  password: string;
}

export interface IAuthorizationState {
  token: string;
  isLoading: boolean;
  error: string;
}
