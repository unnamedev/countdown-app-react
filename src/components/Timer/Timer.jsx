import React, {useEffect, useState} from "react"
import "./Timer.scss"
import {addZero, calculateTimeLeft} from "../../helpers/helpers"

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timerId = setInterval(() => setTimeLeft(calculateTimeLeft), 1000)
        return () => clearInterval(timerId)
    })

    return <div className="timer">
        {Object.keys(timeLeft).length !== 0 && (
            <ul className="timer__list">
                <li className="timer__item">
                    <p className="timer__value timer__days">{addZero(timeLeft.days)}</p>
                    <p className="timer__name">Days</p>
                </li>
                <li className="timer__item">
                    <p className="timer__value timer__hours">{addZero(timeLeft.hours)}</p>
                    <p className="timer__name">Hours</p>
                </li>
                <li className="timer__item">
                    <p className="timer__value timer__minutes">{addZero(timeLeft.minutes)}</p>
                    <p className="timer__name">Minutes</p>
                </li>
                <li className="timer__item">
                    <p className="timer__value timer__seconds">{addZero(timeLeft.seconds)}</p>
                    <p className="timer__name">Seconds</p>
                </li>
            </ul>
        )}
    </div>
}

export default Timer
