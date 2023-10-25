import { configureStore } from '@reduxjs/toolkit'
import gameStateReducer from './gameStateSlice';
import scoreReducer from './scoreSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    gameState:gameStateReducer,
    score:scoreReducer,
    user:userReducer,
  },
})