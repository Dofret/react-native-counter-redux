import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:"sayac",
    initialState:{
        count:0,
    },
    reducers:{
        arttır(state){
        state.count++
    },
    azalt(state){
        state.count--
    },
    yenile(state){
        state.count=0
    }
    }

})

export default Slice
export const {arttır,azalt,yenile} = Slice.actions