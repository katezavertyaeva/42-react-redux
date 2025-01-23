import { createAppSlice } from "../../createAppSlice";
import { AuthData, AuthSliceState } from "./types";

const authInitialState: AuthSliceState = {
  token: localStorage.getItem('authToken') || null,
  isAuthenticated: !!localStorage.getItem('authToken'),
  loading: false,
  error: null,
};

// Имитация запроса на сервер
const loginApi = async (email: string, password: string): Promise<string> => {
  if (email === 'test@example.com' && password === 'password123') {
    return 'mockAuthToken12345';
  }
  throw new Error('Неверный email или пароль');
};

export const authSlice = createAppSlice({
  name: 'AUTH',
  initialState: authInitialState,
  reducers: create => ({
    login: create.asyncThunk(async ({ email, password }: AuthData, { rejectWithValue }) => {
      try {
        const token = await loginApi(email, password);
        return token;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    },
      {
        pending: (state: AuthSliceState) => {
          state.loading = true;
          state.error = null;
        },
        fulfilled: (state: AuthSliceState, action: any) => {
          state.token = action.payload;
          state.isAuthenticated = true;
          state.loading = false;
          localStorage.setItem('authToken', action.payload);// Добавление токена из localStorage
        },
        rejected: (state: AuthSliceState, action: any) => {
          state.loading = false;
          state.error = action.payload;
        }
      }
    ),
    logout: create.reducer((state: AuthSliceState) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('authToken'); // Удаление токена из localStorage
    }),
  }),
  selectors: { stateData: (state: AuthSliceState) => state }

});

export const authSliceActions = authSlice.actions;
export const authSliceSelectors = authSlice.selectors;