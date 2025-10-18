import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { DiceRollState, type DiceState } from "../interfaces/dice";

const initState: DiceState = {
  value: 1,
  rollState: DiceRollState.AT_LEFT,
};

function getRandomNumber(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const diceReduxSlice = createSlice({
  name: "diceSlice",
  initialState: initState,
  reducers: {
    rollToRight: (state) => {
      state.rollState = DiceRollState.ROLLING_TO_RIGHT;
      state.value = getRandomNumber(1, 6);
    },
    
    rollToLeft: (state) => { // can pass payload (state, {payload: any, type: string})
      state.rollState = DiceRollState.ROLLING_TO_LEFT;
      state.value = getRandomNumber(1, 6);
    },

    setAtLeftEnd: (state) => {
      state.rollState = DiceRollState.AT_LEFT;
    },

    setAtRightEnd: (state) => {
      state.rollState = DiceRollState.AT_RIGHT;
    }
  },
});

export const diceReducer = diceReduxSlice.reducer;

export const { 
  rollToLeft,
  rollToRight,
  setAtLeftEnd,
  setAtRightEnd,
} = diceReduxSlice.actions;

export const mainReducer = combineReducers({
  dice: diceReducer,
});
