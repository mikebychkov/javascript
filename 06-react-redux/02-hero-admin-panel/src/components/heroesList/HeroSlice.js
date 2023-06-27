import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';

const initialState = {
    heroes: [],
    heroesFetchStatus: 'idle'
}

export const fetchHeroes = createAsyncThunk(
    'h/fetchHeroes',
    () => {
        const { request } = useHttp();
        return request("http://localhost:3001/heroes");
    }
);

const heroSlice = createSlice({
    name: 'h',
    initialState,
    reducers: {
        // heroesFetched: (state, action) => {
        //     state.heroes = action.payload;
        // },
        heroDeleted: (state, action) => {
            state.heroes = state.heroes.filter(h => h.id !== action.payload);
        },
        heroPosted: (state, action) => {
            state.heroes.push(action.payload);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchHeroes.pending, (state, action) => {
                state.heroesFetchStatus = 'loading';
            })
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesFetchStatus = 'idle';
                state.heroes = action.payload;
            })
            .addCase(fetchHeroes.rejected, (state, action) => {
                state.heroesFetchStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

export default heroSlice.reducer;

export const { heroesFetched, heroDeleted, heroPosted } = heroSlice.actions;