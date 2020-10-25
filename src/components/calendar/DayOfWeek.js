import React from 'react'
import moment from 'moment'
import TimeSlot from './TimeSlot'

export default function DayOfWeek({ date, timeSlots, handleSlotClick, selectedSlot = {} }) {
  const isSlotActive = (from, to) => (selectedSlot.start_time === from && selectedSlot.end_time === to)

  return (
    <div className="card day-of-week">
      <div className="card-body">
        <h5 className="card-title text-center">{moment(date).format('ddd, MMM Do')}</h5>
        <div className="list-group">
          {timeSlots.map(({ start_time, end_time }) => (
            <TimeSlot
              key={`${start_time}-${end_time}`}
              from={start_time}
              to={end_time}
              active={isSlotActive(start_time, end_time)}
              onSlotClick={handleSlotClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}