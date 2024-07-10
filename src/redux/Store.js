import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";

export const Store = configureStore({
    reducer:{
        Sayac : Slice.reducer
    }
})