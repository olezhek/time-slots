import moment from 'moment'

export default function formatTime(date) {
  return moment(date).format('HH:mm')
}