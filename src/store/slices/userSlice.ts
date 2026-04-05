import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store'; 
import axios, { AxiosError } from 'axios';
import { IProfileForm, IPasswordChangeForm } from '@/lib/validators';

// --- Типы ---
export interface User {
    id: string;
    name: string;
    email: string;
    numberPhone: string;
    birthDate: string;
    role: 'user' | 'admin';
}

export interface LogoutResult {
    status : 'success' | 'unLogged'
}

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
    user : null, // Изначально null, загрузится в layout
    isAuthenticated: false,
    loading: false,
    error: null,
};

const API_USER = 'https://SERVER/api/user/'

// --- Async Thunk: Обновление профиля ---
export const updateProfile = createAsyncThunk<
    User,
    Partial<IProfileForm>,
    { rejectValue: ErrorResponse }
>(
    'user/updateProfile',
    async (formData, thunkAPI) => {
        try {
            const response = await axios.patch<User>(
                `${API_USER}/changeData`,
                formData,
                { withCredentials: true }
            );
            return response.data;
        } catch (err) {
            const error = err as AxiosError<ErrorResponse>;
            if (error.response) {
                return thunkAPI.rejectWithValue(error.response.data);
            }
            return thunkAPI.rejectWithValue({ message: 'Не удалось обновить профиль' });
        }
    }
);

// --- Async Thunk: Смена пароля ---
export const changePassword = createAsyncThunk<
    { message: string },
    IPasswordChangeForm,
    { rejectValue: ErrorResponse }
>(
    'user/changePassword',
    async (formData, thunkAPI) => {
        try {
            const response = await axios.post<{ message: string }>(
                `${API_USER}/changePassword`,
                formData,
                { withCredentials: true }
            );
            return response.data;
        } catch (err) {
            const error = err as AxiosError<ErrorResponse>;
            if (error.response) {
                return thunkAPI.rejectWithValue(error.response.data);
            }
            return thunkAPI.rejectWithValue({ message: 'Не удалось сменить пароль' });
        }
    }
);

export const fetchUserMe = createAsyncThunk<
    User,
    void,
    { rejectValue: ErrorResponse }
>(
    'user/fetchMe',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<User>(
                `${API_USER}/me`,
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
                `${API_USER}/logout`,
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
            // Fetch Me
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
                // state.isAuthenticated = false; сейчас будет заглушка на время разработки 
                state.isAuthenticated = true;
                state.user = {
                    id: '123',
                    name: 'Степан',
                    email: 'stepan@gmail.com',
                    numberPhone: '+79002209614',
                    birthDate: '2007-05-12',
                    role: 'user'
                }
                if (action.payload) {
                    state.error = action.payload.message;
                } else {
                    state.error = action.error.message || 'Ошибка загрузки';
                }
            })
            // Logout
            .addCase(fetchUserLogout.pending, (state)=>{
                state.user = null
                state.loading = false
                state.isAuthenticated = false
            })
            // Update Profile
            .addCase(updateProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // Обновляем данные пользователя
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload.message;
                } else {
                    state.error = action.error.message || 'Ошибка обновления';
                }
            })
            // Change Password (не меняем стейт юзера, просто сбрасываем лоадер)
            .addCase(changePassword.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(changePassword.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload.message;
                } else {
                    state.error = action.error.message || 'Ошибка смены пароля';
                }
            });
    },
});

export const { clearError } = userSlice.actions;

// --- Selectors ---
export const selectUser = (state: RootState) => state.user.user;
export const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated;
export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectUserError = (state: RootState) => state.user.error;

export default userSlice.reducer;