import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshToken, register } from './actions';
import { IInitialState } from './types';

const initialState: IInitialState = {
 user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null,
 isLoading: false
}

export const userSlice = createSlice({
 name: 'user',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(register.pending, (state) => {
   state.isLoading = true
  })
   .addCase(register.fulfilled, (state, { payload }) => {
    state.isLoading = false,
     state.user = payload.user
   })
   .addCase(register.rejected, (state) => {
    state.isLoading = false
   })
   .addCase(login.pending, (state) => {
    state.isLoading = true
   })
   .addCase(login.fulfilled, (state, { payload }) => {
    state.isLoading = false,
     state.user = payload.user
   })
   .addCase(login.rejected, (state) => {
    state.isLoading = false
    state.user = null
   })
   .addCase(logout.pending, (state) => {
    state.isLoading = true
   })
   .addCase(logout.fulfilled, (state, { payload }) => {
    state.isLoading = false,
     state.user = null
   })
   .addCase(logout.rejected, (state) => {
    state.isLoading = false
    state.user = null
   })
   .addCase(refreshToken.pending, (state) => {
    state.isLoading = true
   })
   .addCase(refreshToken.fulfilled, (state, { payload }) => {
    state.isLoading = false,
     state.user = payload.user
   })
   .addCase(refreshToken.rejected, (state) => {
    state.isLoading = false
    state.user = null
   })
 }
})

