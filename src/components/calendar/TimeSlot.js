import React from 'react'
import classnames from 'classnames'
import { formatTime } from '../../utils'

export default function TimeSlot({ from, to, disabled, active, onSlotClick }) {
  return (
    <button
      onClick={() => { onSlotClick({ start_time: from, end_time: to }) }}
      key={`${from}-${to}`}
      className={classnames('list-group-item', { active })}
      dangerouslySetInnerHTML={{ __html: `${formatTime(from)} &ndash; ${formatTime(to)}` }}
    />
  )
}