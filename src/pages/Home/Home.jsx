import React from "react"
// 💡 Style
import "./Home.scss"
import {motion} from "framer-motion"
// 💡 Data
import {data} from "../../data/data"
// 💡 Component
import Timer from "../../components/Timer/Timer"

const Home = () => {
    const {home: {title, subtitle, form, info}} = data

    return <section className="home">
        <div className="home__container">
            <motion.h1 className="title home__title"
                       initial={{y: 30, opacity: 0}}
                       animate={{y: 0, opacity: 1}}
                       transition={{duration: 1, delay: 1}}
            >{title}</motion.h1>

            <Timer/>

            <motion.p className="home__subtitle"
                      initial={{y: 30, opacity: 0}}
                      animate={{y: 0, opacity: 1}}
                      transition={{duration: 1, delay: 2}}
            >{subtitle}</motion.p>

            <motion.div
                initial={{y: 30, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 1, delay: 2}}
            >
                <form className="home__form">
                    <label className="home__form-label">
                        <input type="email" className="home__form-input" required placeholder={form.placeholder}/>
                    </label>
                    <button className="home__form-button" type="submit">{form.button}</button>
                </form>
                <p className="home__info">{info}</p>
            </motion.div>
        </div>
    </section>
}

export default Home
