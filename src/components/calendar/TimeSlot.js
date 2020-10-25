import React from 'react'
import classnames from 'classnames'

export default function TimeSlot({ from, to, disabled }) {
  return (
    <div className={classnames("d-flex align-items-center justify-content-between", { disabled })}>
      <div className="d-flex flex-column">
        <div><span>From:</span> {from}</div>
        <div><span>To:</span> {to}</div>
      </div>
    </div>
  )
}