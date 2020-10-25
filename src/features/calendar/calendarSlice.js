import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

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
      state.data = (action.payload || []).map(({ time_slots, ...companyInfo }) => {
        const timeSlots = (time_slots || []).reduce((slots, slot) => {
          const date = moment(slot.start_time).format('YYYY-MM-DD')
          if (!slots[date]) {
            slots[date] = []
          }

          slots[date].push(slot)

          return slots
        }, {})

        return {
          ...companyInfo,
          timeSlots
        }
      })
    },
    setReservation: (state, { payload, ...rest }) => {
      console.log(payload, rest)
      state.reservations[payload.id] = payload.slot
    }
  }
})

export const { setData, setReservation } = slice.actions

export const stateSelector = (state) => state.calendar

export default slice.reducer