import React from 'react'
import classnames from 'classnames'
import { formatTime } from '../../utils'

const TimeSlot = React.memo(({ from, to, disabled, active, onSlotClick }) => {
  return (
    <button
      onClick={() => { onSlotClick({ start_time: from, end_time: to }) }}
      key={`${from}-${to}`}
      className={classnames('list-group-item', { active, disabled })}
      dangerouslySetInnerHTML={{ __html: `${formatTime(from)} &ndash; ${formatTime(to)}` }}
    />
  )
})

export default TimeSlot