/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGroups = createAsyncThunk('sports/fetchGroups', async () => {
  const response = await axios.get('https://sports.api.decathlon.com/groups');
  return response.data.data;
});

export const sportsGroupsSlice = createSlice({
  name: 'groups',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGroups.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchGroups.fulfilled, (state, action) => {
        state.entities = [...action.payload];
        state.loading = 'idle';
      });
  },
});

export default sportsGroupsSlice.reducer;
