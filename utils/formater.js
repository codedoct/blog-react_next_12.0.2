require('dayjs/locale/id')
const utc = require('dayjs/plugin/utc')
import * as dayjs from 'dayjs'
dayjs.extend(utc)
dayjs.locale('id')

// Date & Time
export const datetimeDash = (date, formatLocal = true) => {
  if (date) {
    if (formatLocal) {
      return dayjs(date).format('DD-MM-YYYY, HH:mm')
    }
    return dayjs.utc(date).format('DD-MM-YYYY, HH:mm')
  }
  return null
}
export const dateSpace = (date) => {
  if (date) return dayjs(date).format('DD MMMM YYYY')
  return null
}
export const dateDash = (date) => {
  if (date) return dayjs(date).format('YYYY-MM-DD')
  return null
}
export const timeDot = (date) => {
  if (date) return dayjs(date).format('HH:mm')
  return null
}
export const isDateGreater = (from, to) => {
  if (from && to) return dayjs(to).diff(from, 'ms', true)
  return null
}

// Price IDR
export const convertToRupiah = (num) => {
  let rupiah = ''
  if (num) {
    let angkarev = num.toString().split('').reverse().join('')
    for (var i = 0; i < angkarev.length; i++) if (i%3 == 0) rupiah += angkarev.substr(i,3)+'.'
    return 'Rp'+ rupiah.split('',rupiah.length-1).reverse().join('')
  }
  return 0
}
