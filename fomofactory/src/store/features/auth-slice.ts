"use client"
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value:AuthState;
}

type AuthState = {
  coin: string;
}

const initialState = {
  value:{
    coin:localStorage?.getItem('coin') || 'Bitcoin', 
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {

    setCoin: (state, action: PayloadAction<string>) =>{
      return{
        value:{coin:action.payload}
      }
    },
  },
});

export const { setCoin } = auth.actions;
export default auth.reducer;
