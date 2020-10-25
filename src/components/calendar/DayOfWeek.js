import React from 'react'
import moment from 'moment'
import TimeSlot from './TimeSlot'
import { formatDate } from '../../utils'

export default function DayOfWeek({ date, companyId, timeSlots, handleSlotClick, selectedSlots = {} }) {
  const selectedSlot = selectedSlots[companyId] || {}
  const isSlotActive = (from, to) => (selectedSlot.start_time === from && selectedSlot.end_time === to)
  const isSlotDisabled = (from, to) => (
    Object.keys(selectedSlots).reduce((shouldBeDisabled, id) => {
      return shouldBeDisabled
        || (
          moment(selectedSlots[id].start_time).isBefore(moment(from))
          && moment(selectedSlots[id].end_time).isAfter(moment(to))
        )
    }, false)
  )
console.log(companyId)
  return (
    <div className="card day-of-week">
      <div className="card-body">
        <h5 className="card-title text-center">{formatDate(date)}</h5>
        <div className="list-group">
          {timeSlots.map(({ start_time, end_time }) => (
            <TimeSlot
              key={`${start_time}-${end_time}`}
              from={start_time}
              to={end_time}
              active={isSlotActive(start_time, end_time)}
              disabled={isSlotDisabled(start_time, end_time)}
              onSlotClick={handleSlotClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}