
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store'; 
import axios, { AxiosError } from 'axios';

export interface User {
    id: string;
    name: string;
    email: string;
    numberPhone: string;
    birthDate:Date;
    role: 'user' | 'admin';
}

export interface LogoutResult {
    status : 'success' | 'unLogged'
}

// Тип для ошибки, которую мы ожидаем от бэкенда
interface ErrorResponse {
    message: string;
    code?: string;
}

interface UserState {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    user :{
        id: '12345',
        name: 'Stepan',
        email: 'stepan@mail.ru)',
        numberPhone: '+790002209614',
        birthDate: new Date('12:05:2000'),
        role: 'user',
    },
    isAuthenticated: true,
    loading: false,
    error: null,
};

// --- Async Thunk ---
export const fetchUserMe = createAsyncThunk<
    User,
    void,
    { rejectValue: ErrorResponse } // Конфиг для thunkAPI
>(
    'user/fetchMe',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<User>(
                'https://SERVER/api/user/logout',
                { withCredentials: true }
            );
            return response.data;
        } catch (err) {
            const error = err as AxiosError<ErrorResponse>;
            if (error.response) {
                return thunkAPI.rejectWithValue(error.response.data);
            }
            return thunkAPI.rejectWithValue({ message: 'Не удалось загрузить данные пользователя' });
        }
    }
);

export const fetchUserLogout = createAsyncThunk<
    LogoutResult,
    void,
    { rejectValue: ErrorResponse } 
>(
    'user/fetchLogout',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<LogoutResult>(
                'https://SERVER/api/user/logout',
                { withCredentials: true } 
            );
            return response.data;
        } catch (err) {
            const error = err as AxiosError<ErrorResponse>;
            if (error.response) {
                return thunkAPI.rejectWithValue(error.response.data);
            }
            return thunkAPI.rejectWithValue({ message: 'Не получилось разлогиниться' });
        }
    }
);

// --- Slice ---
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserMe.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserMe.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(fetchUserMe.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                // Проверяем, есть ли кастомный payload от rejectWithValue
                if (action.payload) {
                    state.error = action.payload.message;
                } else {
                    state.error = action.error.message || 'Ошибка загрузки';
                }
            })
            .addCase(fetchUserLogout.pending, (state)=>{
                state.user = null
                state.loading = false
                state.isAuthenticated = false
            })
    },
});

export const { clearError } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
export const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated;
export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectUserError = (state: RootState) => state.user.error;

export default userSlice.reducer;