import React, {useEffect, useState} from "react"
import {motion} from "framer-motion"
// 💡 Style
import "./Timer.scss"
// 💡 Data
import {addZero, calculateTimeLeft} from "../../helpers/helpers"

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timerId = setInterval(() => setTimeLeft(calculateTimeLeft), 1000)
        return () => clearInterval(timerId)
    })

    return <motion.div
        className="timer"
        initial={{y: 30, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 1, delay: 1.5}}
    >
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
    </motion.div>
}

export default Timer
