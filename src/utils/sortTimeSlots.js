import moment from 'moment'

export default function sortTimeSlots(left, right) {
  const leftDate = moment((left || {}).end_time)
  const rightDate = moment((right || {}).end_time)

  if (!leftDate.isValid() || !rightDate.isValid() || leftDate.isSame(rightDate)) {
    return 0
  }

  if (leftDate.isBefore(rightDate)) {
    return -1
  }

  if (leftDate.isAfter(rightDate)) {
    return 1
  }
}
