import React from 'react'
import classnames from 'classnames'
import { formatDate, formatTime } from '../../utils'
import './Reservation.css'

const Reservation = ({ from, to, handleRemove }) => {

  const removeReservation = (e) => {
    e.preventDefault()
    handleRemove()
  }

  const hasData = from && to

  const wrapperClasses = classnames(
    'reservation d-flex align-items-center mx-2',
    {
      'justify-content-between': hasData,
      'justify-content-center': !hasData
    }
  )

  return (
    <div className={wrapperClasses}>
      {hasData
        ? <>
            <div>
              <h5 className="m-0">Reservation on {formatDate(from)}</h5>
              <p className="text-muted m-0">{formatTime(from)} &ndash; {formatTime(to)}</p>
            </div>
            <a href="#" onClick={removeReservation} className="btn btn-danger py-0 px-2">&times;</a>
          </>
        : <p className="m-0">&mdash;</p>
      }
    </div>
  )
}

export default Reservation