import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { stateSelector, setData, setReservation } from './features/calendar/calendarSlice'
import { initializeData, formatDate, formatTime } from './utils'
import DayOfWeek from './components/calendar/DayOfWeek'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    initializeData().then((data) => { dispatch(setData(data)) })
  }, [])

  const { data, reservations } = useSelector(stateSelector)

  return (
    <div className="container">
      <header className="header sticky-top border-bottom">
        <h1 className="text-center mt-5 mb-4">Time slots</h1>
        <div className="row">
          {data.map(({ name, id }) => (
            <div className="col" key={id}>
              <h5 className="text-center">{name}</h5>
              <div className="reservation text-center">
                {reservations[id] && <h5>Reservation on {formatDate(reservations[id].start_time)}</h5>}
                <div
                  dangerouslySetInnerHTML={reservations[id]
                    ? { __html: `${formatTime(reservations[id].start_time)} &ndash; ${formatTime(reservations[id].end_time)}` }
                    : { __html: '&mdash;' }} />
              </div>
            </div>
          ))}
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
