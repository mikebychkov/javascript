import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import DataService from '../services/data-service';

const initialState = {
    token: '',
}

export const fetchToken = createAsyncThunk(
    'global/fetchToken',
    () => {
        return DataService()
                .getToken()
                .then(j => j.token);
    }
);

const stateSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchToken.pending, (state, action) => {
                state.tokenFetchStatus = 'idle';
            })
            .addCase(fetchToken.fulfilled, (state, action) => {
                state.tokenFetchStatus = 'loading';
                state.token = action.payload;
            })
            .addCase(fetchToken.rejected, (state, action) => {
                state.tokenFetchStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

export default stateSlice.reducer;

export const { setToken } = stateSlice.actions;