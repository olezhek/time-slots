import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { sortTimeSlots } from '../../utils'

export const slice = createSlice({
  name: 'calendar',
  initialState: {
    data: [],
    reservations: {
      // companyId: {
      //   start_time: null,
      //   end_time: null
      // },
      // ...
    }
  },
  reducers: {
    setData: (state, action) => {
      state.data = (action.payload || []).map(({ time_slots, ...companyInfo }) => {
        const timeSlots = ([...time_slots] || []).reduce((slots, slot) => {
          const date = moment(slot.start_time).format('YYYY-MM-DD')
          if (!slots[date]) {
            slots[date] = []
          }

          slots[date].push(slot)

          return slots
        }, {})

        Object.keys(timeSlots).forEach((day) => {
          timeSlots[day].sort(sortTimeSlots)
        })

        return {
          ...companyInfo,
          timeSlots
        }
      })
    },
    setReservation: (state, { payload }) => {
      state.reservations[payload.id] = payload.slot
    },
    removeReservation: (state, { payload }) => {
      delete state.reservations[payload]
    }
  }
})

export const { setData, setReservation, removeReservation } = slice.actions

export const stateSelector = (state) => state.calendar

export default slice.reducer