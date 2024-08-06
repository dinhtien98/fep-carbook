import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    item: [],
    status: 'start',
    error: null,
    totalPages: 0,
    currentPage: 1,
};

const url = 'https://66a7ab4f53c13f22a3d0a928.mockapi.io/CarBook';

export const fetchDataAll = createAsyncThunk('cars/fetchDataAll', async () => {
    const res = await axios.get(url);
    return {
        totalPages: parseInt(res.data.length / 6) + 1 
    };
});

export const fetchData = createAsyncThunk('cars/fetchData', async (page = 1) => {
    const res = await axios.get(`${url}?page=${page}&limit=6`);
    return {
        items: res.data,
    };
});

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDataAll.fulfilled,(state,action)=>{
                state.status = 'succeeded';
                state.totalPages = action.payload.totalPages;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.item = action.payload.items;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setCurrentPage } = carsSlice.actions;
export default carsSlice.reducer;
