import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { stateSelector, setData, setReservation } from './features/calendar/calendarSlice'
import { initializeData } from './utils'
import { DayOfWeek, Reservation } from './components/calendar'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    initializeData().then((data) => { dispatch(setData(data)) })
  }, [])

  const { data, reservations } = useSelector(stateSelector)

  const renderReservationWrapper = ({ name, id }) => {

    const { start_time, end_time } = reservations[id] || {}

    return (
      <div className="col" key={id}>
        <h5 className="text-center mb-3">{name}</h5>
        <Reservation
          from={start_time}
          to={end_time}
        />
      </div>
    )
  }

  return (
    <div className="container">
      <header className="header sticky-top border-bottom">
        <h1 className="text-center mt-5 mb-4">Time slots</h1>
        <div className="row">
          {data.map(renderReservationWrapper)}
        </div>
      </header>
      <div className="row mt-4">
        {data.map(({ timeSlots, id }) => (
          <div className="col" key={id}>
            {Object.keys(timeSlots).map((date) => (
              <DayOfWeek
                key={date}
                date={date}
                timeSlots={timeSlots[date]}
                handleSlotClick={(slot) => { dispatch(setReservation({ id, slot })) }}
                companyId={id}
                selectedSlots={reservations}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
