/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSports = createAsyncThunk('sports/fetchSports', async () => {
  const response = await axios.get('https://sports.api.decathlon.com/sports');
  return response.data.data;
});

export const sportsListSlice = createSlice({
  name: 'sports',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSports.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchSports.fulfilled, (state, action) => {
        state.entities = [...action.payload];
        state.loading = 'idle';
      });
  },
});

export default sportsListSlice.reducer;
