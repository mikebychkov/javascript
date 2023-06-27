import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';

const heroEntityAdapter = createEntityAdapter();

// const initialState = {
//     heroes: [],
//     heroesFetchStatus: 'idle'
// }

const initialState = heroEntityAdapter.getInitialState({
    heroesFetchStatus: 'idle'
});

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
        heroDeleted: (state, action) => {
            //state.heroes = state.heroes.filter(h => h.id !== action.payload);
            heroEntityAdapter.removeOne(state, action.payload);
        },
        heroPosted: (state, action) => {
            //state.heroes.push(action.payload);
            heroEntityAdapter.addOne(state, action.payload);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchHeroes.pending, (state, action) => {
                state.heroesFetchStatus = 'loading';
            })
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesFetchStatus = 'idle';
                //state.heroes = action.payload;
                heroEntityAdapter.setAll(state, action.payload);
            })
            .addCase(fetchHeroes.rejected, (state, action) => {
                state.heroesFetchStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

export default heroSlice.reducer;

export const { heroesFetched, heroDeleted, heroPosted } = heroSlice.actions;

const {selectAll} = heroEntityAdapter.getSelectors(state => state.h);
export const heroFilteredSelector = createSelector(
    selectAll,
    state => state.f.activeFilter,
    (heroes, activeFilter) => {
        if (activeFilter === 'all') {
            return heroes
        } else {
            return heroes.filter(h => h.element === activeFilter)
        }
    }
);