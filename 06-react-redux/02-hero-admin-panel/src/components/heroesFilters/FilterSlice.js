import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filters: [],
    activeFilter: 'all'
}

const filterSlice = createSlice({
    name: 'f',
    initialState,
    reducers: {
        filtersFetched: (state, action) => {
            state.filters = action.payload;
        },
        activeFilterSet: (state, action) => {
            state.activeFilter = action.payload
        }
    }
});

export default filterSlice.reducer;

export const {filtersFetched, activeFilterSet} = filterSlice.actions;