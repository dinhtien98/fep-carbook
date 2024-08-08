import { createSlice } from "@reduxjs/toolkit";
let initialState = {};
if (localStorage.getItem("listPickCar")) {
  initialState = JSON.parse(localStorage.getItem("listPickCar"));
} else {
  initialState = {
    listPickCar: [],
  };
}

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addNewCar: (state, action) => {
      let MaxId = state.listPickCar.reduce((current, item) =>
        Math.max((current, item.id), 0)
      );
      state.listPickCar = [
        ...state.listPickCar,
        {
          id: MaxId<=0?0:MaxId+1,
          pickUpLocation: action.payload.pickUpLocation,
          dropOffLocation: action.payload.dropOffLocation,
          pickUpDate: action.payload.pickUpDate,
          dropOffDate: action.payload.dropOffDate,
          car: action.payload.car,
        },
      ];
      localStorage.setItem("listPickCar", JSON.stringify(state));
    },
    deleteCar: (state, action) => {
      state.listPickCar = state.listPickCar.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("listPickCar", JSON.stringify(state));
    },
    editCar: (state, action) => {
      state.listPickCar = state.listPickCar.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              pickUpLocation: action.payload.pickUpLocation,
              dropOffLocation: action.payload.dropOffLocation,
              pickUpDate: action.payload.pickUpDate,
              dropOffDate: action.payload.dropOffDate,
              car: action.payload.car,
            }
          : item
      );
      localStorage.setItem("listPickCar", JSON.stringify(state));
    },
  },
});
export const { addNewCar, deleteCar, editCar } = cartSlice.actions;
export default cartSlice.reducer;
