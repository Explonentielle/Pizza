import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    order: []
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
       
    }
})


export const {  } = dataSlice.actions;

export default dataSlice.reducer;