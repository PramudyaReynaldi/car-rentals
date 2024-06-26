import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { showAlertSuccess, showAlertError } from "../components/Alert";

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    isLoggedIn: false,
};

export const LoginUser = createAsyncThunk(
    "user/LoginUser",
    async (user, thunkAPI) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/login`, {
                email: user.email,
                password: user.password,
            });
            showAlertSuccess("Login Successfull", "Anda akan diarahkan ke halaman utama");
            return response.data;
        } catch (error) {
            if (error.response) {
                const message = error.response.data.msg;
                showAlertError(`Login failed, ${message}`, "Back");
                return thunkAPI.rejectWithValue(message);
            }
        }
    }
);

export const RegisterUser = createAsyncThunk(
    "user/RegisterUser",
    async (user, thunkAPI) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/register`, {
                name: user.name,
                email: user.email,
                password: user.password,
                confPassword: user.confPassword,
                role: user.role,
            });
            showAlertSuccess("Registration Successful", "Anda dapat login sekarang");
            return response.data;
        } catch (error) {
            if (error.response) {
                const message = error.response.data.msg;
                showAlertError(`Registration failed, ${message}`, "Back");
                return thunkAPI.rejectWithValue(message);
            }
        }
    }
);

export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/me`);
        return response.data
    } catch (error) {
        if (error.response) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const LogOut = createAsyncThunk("user/LogOut", async () => {
    await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/v1/logout`);
    showAlertSuccess("Logout Successfull", "Terimakasih sudah mengunjungi website kami");
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(LoginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isLoggedIn = true;
            state.user = action.payload;
        });
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // Get User Login
        builder.addCase(getMe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // Register User
        builder.addCase(RegisterUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(RegisterUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(RegisterUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // Logout User
        builder.addCase(LogOut.fulfilled, (state) => {
            state.user = null;
            state.isLoggedIn = false;
        })
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
