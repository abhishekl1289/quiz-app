import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  position: "menu",
}

export const gameStateSlice = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    changeGameState : (state,action) =>{
        state.position=action.payload;
    }
  },
})

export const { changeGameState } = gameStateSlice.actions

export default gameStateSlice.reducer