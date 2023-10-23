import { createSlice } from "@reduxjs/toolkit";

const quizSlice=createSlice({
    name:"quiz",
    initialState:{position:"front"},
    reducers:{
        changePosition:(state,action)=>{
            state.position=action.payload
        }
    }
})
export const {changePosition}=quizSlice.actions
export default quizSlice.reducer