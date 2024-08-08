import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  item: [],
  itemAll: [],
  status: "start",
  error: null,
  currentPage: 1,
  totalPages: 0,
  pickUpLocation: "",
  dropOffLocation: "",
  pickUpDate: "",
  dropOffDate: "",
  flag: false,
};

const url = "https://66a7ab4f53c13f22a3d0a928.mockapi.io/CarBook";

export const fetchDataAll = createAsyncThunk("cars/fetchDataAll", async () => {
  const res = await axios.get(url);
  return {
    items: res.data,
    totalPages: Math.ceil(res.data.length / 6),
  };
});

export const fetchDataId = createAsyncThunk("cars/fetchDataId", async (id) => {
  const res = await axios.get(`${url}/${id}`);
  return {
    items: res.data,
  };
});

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPickUpLocation: (state, action) => {
      state.pickUpLocation = action.payload;
    },
    setDropOffLocation: (state, action) => {
      state.dropOffLocation = action.payload;
    },
    setPickUpDate: (state, action) => {
      state.pickUpDate = action.payload;
    },
    setDropOffDate: (state, action) => {
      state.dropOffDate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAll.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataId.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataAll.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.itemAll = action.payload.items;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchDataId.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.item = action.payload.items;
      })
      .addCase(fetchDataAll.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDataId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  setCurrentPage,
  setPickUpLocation,
  setDropOffLocation,
  setPickUpDate,
  setDropOffDate,
} = carsSlice.actions;
export default carsSlice.reducer;
