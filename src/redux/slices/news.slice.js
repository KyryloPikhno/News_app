import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../services";


const initialState = {
    news: [],
    loading: false,
    error: null,
};

const getAll = createAsyncThunk(
    'newsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postService.getAll()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const newsSlice = createSlice({
    name: 'newsSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.news = action.payload
                state.error = null
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
                state.error = null
            })
});

const {reducer: newsReducer} = newsSlice;

const newsActions = {
    getAll
};

export {newsReducer, newsActions};