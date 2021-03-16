import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: null,
  },
  reducers: {
    
    incrementByAmount: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { incrementByAmount } = appSlice.actions;

export const selectApp = state => state.app.user;

export default appSlice.reducer;
