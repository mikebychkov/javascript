import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const entityAdapter = createEntityAdapter();

const initialState = entityAdapter.getInitialState({
    token: localStorage.at,
    entityName: 'users',
    sidebar: true,
});

const entitySlice = createSlice({
    name: 'e',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setEntityName: (state, action) => {
            state.entityName = action.payload;
        },
        toggleSidebar: (state, action) => {
            state.sidebar = !state.sidebar;
        },
        entityUpdated: (state, action) => {
            entityAdapter.setOne(state, action.payload);
        },
        entitiesDeleted: (state, action) => {
            entityAdapter.removeMany(state, action.payload);
        },
        entitiesLoaded: (state, action) => {
            entityAdapter.setAll(state, action.payload);
        }
    }
});

export default entitySlice.reducer;

export const { setToken, setEntityName, toggleSidebar, entityUpdated, entitiesDeleted, entitiesLoaded } = entitySlice.actions;

export const { selectAll } = entityAdapter.getSelectors(store => store.e);