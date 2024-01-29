import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

const initialState = {
  value: 0,
  data:[]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    adddata:(state,action)=>{
        state.data=action.payload
    }
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,adddata } = counterSlice.actions

export default counterSlice.reducer