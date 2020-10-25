import React from 'react'
import moment from 'moment'
import TimeSlot from './TimeSlot'
import { formatDate } from '../../utils'

export default function DayOfWeek({ date, companyId, timeSlots, handleSlotClick, selectedSlots = {} }) {
  const selectedSlot = selectedSlots[companyId] || {}
  const slotShouldBeActive = (from, to) => (selectedSlot.start_time === from && selectedSlot.end_time === to)
  const slotShouldBeDisabled = (from, to) => (
    Object.keys(selectedSlots).reduce((disabled, id) => {
      return disabled
        || (
          moment(selectedSlots[id].start_time).isSameOrBefore(moment(from))
          && moment(selectedSlots[id].end_time).isSameOrAfter(moment(to))
        )
    }, false)
  )

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
              active={slotShouldBeActive(start_time, end_time)}
              disabled={slotShouldBeDisabled(start_time, end_time)}
              onSlotClick={handleSlotClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}