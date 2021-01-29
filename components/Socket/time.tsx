import React, { useEffect, useState } from 'react'
import moment, { now } from 'moment'
import { TimeProps } from 'components/socket'

const Time: React.FC<TimeProps> = props => {
  const [time, setTime] = useState<string>(moment(now()).format('HH:mm'))
  const { className } = props

  useEffect(() => {
    let timeInterval = setInterval(() => {
      setTime(moment(now()).format('HH:mm'))
    }, 1000)

    return () => {
      clearInterval(timeInterval)
    }
  }, [time])

  return <div className={className}>
    { time }
  </div>
}

export default Time
