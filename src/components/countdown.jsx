import React from 'react'
import PropTypes from 'prop-types'
import './countdown.module.scss'
import { compose, pure, mapProps } from 'recompose'
import {
  isAfter,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  addHours,
  addMinutes,
} from 'date-fns'

const enhance = compose(
  pure,
  mapProps(({ fromDate, toDate }) => {
    if (isAfter(fromDate, toDate)) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    let offsetDate = fromDate
    const days = differenceInDays(toDate, offsetDate)
    // Don't use addDays since it won't handle daylight savings time
    offsetDate = addHours(offsetDate, days * 24)
    const hours = differenceInHours(toDate, offsetDate)
    offsetDate = addHours(offsetDate, hours)
    const minutes = differenceInMinutes(toDate, offsetDate)
    offsetDate = addMinutes(offsetDate, minutes)
    const seconds = differenceInSeconds(toDate, offsetDate)
    return { days, hours, minutes, seconds }
  })
)

export const Countdown = enhance(({ days, hours, minutes, seconds }) => (
  <>
    <div styleName="countdown">
      {/* Days */}
      <div styleName="dash">
        <div styleName="digits">{days}</div>
        <span styleName="title">Days</span>
      </div>

      {/* Hours */}
      <div styleName="dash">
        <div styleName="digits">{hours}</div>
        <span styleName="title">Hours</span>
      </div>

      {/* Minutes */}
      <div styleName="dash">
        <div styleName="digits">{minutes}</div>
        <span styleName="title">Minutes</span>
      </div>

      {/* Seconds */}
      <div styleName="dash">
        <div styleName="digits">{seconds}</div>
        <span styleName="title">Seconds</span>
      </div>
    </div>
  </>
))

Countdown.propTypes = {
  toDate: PropTypes.instanceOf(Date),
  fromDate: PropTypes.instanceOf(Date),
}
