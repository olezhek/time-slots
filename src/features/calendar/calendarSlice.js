import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'calendar',
  initialState: {
    data: [],
    reservations: {
      // companyId: {
      //   from: null,
      //   to: null
      // }
    }
  },
  reducers: {
    setData: (state, action) => {
      console.log('action', action)
      state.data = action.payload
    },

  }
})

export const { setData } = slice.actions

export const stateSelector = (state) => state.calendar

export default slice.reducer