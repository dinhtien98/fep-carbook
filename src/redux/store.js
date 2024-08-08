import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./carsSlice";
import cartSlice from "./cartSlice";

const store=configureStore({
    reducer:{
        cars:carsSlice,
        cart:cartSlice,
    }
})
export default store