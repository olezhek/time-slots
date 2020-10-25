import React from 'react'
import TimeSlot from "../../components/calendar/TimeSlot";

export default function Header({ data }) {
  console.log('header', data)
  return (
    <header className="header">
      <h1 className="text-center mt-4">Time slots</h1>
      {data.map(({ name, reservation }) => (
        <div>
          <h3>{name}</h3>
          <TimeSlot from={reservation.from} to={reservation.to} />
        </div>
      ))}
    </header>
  )
}