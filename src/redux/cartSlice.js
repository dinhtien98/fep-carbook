import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  listPickCar: localStorage.getItem("listPickCar")
    ? JSON.parse(localStorage.getItem("listPickCar"))
    : [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addNewCar: (state, action) => {
      if (!Array.isArray(state.listPickCar)) {
        state.listPickCar = [];
      }
      
      const maxId = state.listPickCar.reduce((max, item) => {
        const id = Number(item.id); 
        return !isNaN(id) ? Math.max(max, id) : max;
      }, 0);
      
      state.listPickCar.push({
        id: maxId + 1,
        pickUpLocation: action.payload.pickUpLocation,
        dropOffLocation: action.payload.dropOffLocation,
        pickUpDate: action.payload.pickUpDate,
        dropOffDate: action.payload.dropOffDate,
        car: action.payload.car,
        price: action.payload.price,
      });

      localStorage.setItem("listPickCar", JSON.stringify(state.listPickCar));
    },
    deleteCar: (state, action) => {
      if (!Array.isArray(state.listPickCar)) {
        state.listPickCar = [];
      }
      
      state.listPickCar = state.listPickCar.filter(item => item.id !== action.payload.id);
      localStorage.setItem("listPickCar", JSON.stringify(state.listPickCar));
    },
    editCar: (state, action) => {
      if (!Array.isArray(state.listPickCar)) {
        state.listPickCar = [];
      }
      
      state.listPickCar = state.listPickCar.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              pickUpLocation: action.payload.pickUpLocation,
              dropOffLocation: action.payload.dropOffLocation,
              pickUpDate: action.payload.pickUpDate,
              dropOffDate: action.payload.dropOffDate,
            }
          : item
      );

      localStorage.setItem("listPickCar", JSON.stringify(state.listPickCar));
    },
  },
});

export const { addNewCar, deleteCar, editCar } = cartSlice.actions;
export default cartSlice.reducer;
