import { configureStore } from "@reduxjs/toolkit";
import reducer from './stateSlice';

const store = configureStore({
    reducer: {global: reducer},
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;