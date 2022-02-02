/**
 * Get calculate time left
 * @returns {{}}
 */
export const calculateTimeLeft = () => {
    const currentYear = new Date().getFullYear()
    const targetYear = new Date(`January 01 ${currentYear + 1} 00:00:00`)
    const currentTime = new Date()
    const difference = targetYear - currentTime
    let timeLeft = {}

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
    }
    return timeLeft
}

/**
 * Add zero to string
 * @param value
 * @returns {string|*}
 */
export const addZero = (value) => value < 10 ? `0${value}` : value