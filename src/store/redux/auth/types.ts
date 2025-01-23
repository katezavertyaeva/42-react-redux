export interface AuthSliceState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface AuthData {
  email: string;
  password: string
}