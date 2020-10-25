import React from 'react'
import moment from 'moment'
import TimeSlot from './TimeSlot'

export default function DayOfWeek({ date, timeSlots, handleSlotClick }) {
  console.log(date)
  return (
    <div className="card day-of-week">
      <div className="card-body">
        <h5 className="card-title text-center">{moment(date).format('ddd, MMM Do')}</h5>
        <ul className="list-group">
          {timeSlots.map(({ start_time, end_time }) => (
            <li className="list-group-item">
              <TimeSlot
                key={`${start_time}-${end_time}`}
                from={start_time}
                to={end_time}
                onClick={handleSlotClick}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}