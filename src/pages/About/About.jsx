import React from "react"
import {motion} from "framer-motion"
// 💡 Style
import "./About.scss"

const About = () =>
    <section className="about">
        <motion.div
            className="about__container"
            initial={{y: 30, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 1, delay: 1}}
        >
            <h1 className="title home__title">About</h1>
            <p>Countdown application</p>
            <p>Version: 1.0.0</p>
        </motion.div>
    </section>

export default About
