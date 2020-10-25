import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { stateSelector, setData } from './features/calendar/calendarSlice'
import initializeData from './utils/initializeData'
// import Header from './features/header/Header'
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
      <header>
        <h1 className="text-center mt-5 mb-4">Time slots</h1>
        <div className="row d-flex justify-content-between">
          {data.map(({ name, id }) => (
            <div className="col-3">
              <h5>{name}</h5>
              <div className="reservation text-center">
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
    </div>
  )
}

export default App
