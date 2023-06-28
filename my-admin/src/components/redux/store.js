import { configureStore } from "@reduxjs/toolkit";

import entityReducer from './entitySlice';

const store = configureStore({
    reducer: {e: entityReducer},
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;