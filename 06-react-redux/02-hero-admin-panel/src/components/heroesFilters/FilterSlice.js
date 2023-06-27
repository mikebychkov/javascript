import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';

const filterEntityAdapter = createEntityAdapter();

// const initialState = {
//     filters: [],
//     filtersFetchStatus: 'idle',
//     activeFilter: 'all'
// }

const initialState = filterEntityAdapter.getInitialState({
    filtersFetchStatus: 'idle',
    activeFilter: 'all'    
});

export const fetchFilters = createAsyncThunk(
    'f/fetchFilters',
    () => {
        const { request } = useHttp();
        return request("http://localhost:3001/filters");
    }
);

const filterSlice = createSlice({
    name: 'f',
    initialState,
    reducers: {
        activeFilterSet: (state, action) => {
            state.activeFilter = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFilters.pending, (state, action) => {
                state.filtersFetchStatus = 'loading';
            })
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.filtersFetchStatus = 'idle';
                //state.filters = action.payload;
                filterEntityAdapter.setAll(state, action.payload);
            })
            .addCase(fetchFilters.rejected, (state, action) => {
                state.filtersFetchStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

export default filterSlice.reducer;

export const {filtersFetched, activeFilterSet} = filterSlice.actions;

export const {selectAll} = filterEntityAdapter.getSelectors(state => state.f);