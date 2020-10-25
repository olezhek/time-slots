import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { stateSelector, setData } from './features/calendar/calendarSlice'
import initializeData from './utils/initializeData'
import DayOfWeek from './components/calendar/DayOfWeek'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    initializeData().then((data) => { dispatch(setData(data)) })
  }, [])

  const { data, reservations } = useSelector(stateSelector)
console.log(data)
  return (
    <div className="container">
      <header>
        <h1 className="text-center mt-5 mb-4">Time slots</h1>
        <div className="row d-flex justify-content-between">
          {data.map(({ name, id }) => (
            <div className="col-3 text-center" key={id}>
              <h5>{name}</h5>
              <div className="reservation">
                {/*TODO: adjust condition and grouping*/}
                {reservations[id] && <h5>Reservation</h5>}
                <span
                  dangerouslySetInnerHTML={reservations[id]
                    ? { __html: `${reservations[id].from} &ndash; ${reservations[id].to}` }
                    : { __html: '&mdash;' }} />
              </div>
            </div>
          ))}
        </div>
      </header>
      <div className="row d-flex justify-content-between">
        {data.map(({ timeSlots }) => (
          <div className="col-3">
            {Object.keys(timeSlots).map((date) => (
              <DayOfWeek
                key={date}
                date={date}
                timeSlots={timeSlots[date]}
                handleSlotClick={() => {}}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
