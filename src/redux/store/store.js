import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {newsReducer} from "../slices/news.slice";


const rootReducer = combineReducers({
    newsReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer,
});


export {setupStore};