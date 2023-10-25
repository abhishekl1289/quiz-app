import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  scoreVal: 0,
}

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    increaseScore : (state) =>{
        state.scoreVal+=1;
    },
    resetScore: (state) =>{
        state.scoreVal=0;
    }
  },
})

export const { increaseScore,resetScore } = scoreSlice.actions

export default scoreSlice.reducer