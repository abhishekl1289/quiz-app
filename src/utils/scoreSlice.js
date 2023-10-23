import { createSlice } from "@reduxjs/toolkit";

const scoreSlice=createSlice({
    name:"score",
    initialState:{value:0},
    reducers:{
        changeValue:(state)=>{
            state.value+=1
        },
        resetValue:(state)=>{
            state.value=0;
        }
    }
})
export const {changeValue,resetValue}=scoreSlice.actions
export default scoreSlice.reducer