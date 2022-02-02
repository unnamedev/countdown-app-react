import React from "react"
// 💡 Style
import "./Home.scss"
// 💡 Data
import {data} from "../../data/data"
// 💡 Component
import Timer from "../../components/Timer/Timer"


const Home = () => {
    const {home: {title, subtitle, form, info}} = data

    return <section className="home">
        <div className="home__container">
            <h1 className="title home__title">{title}</h1>

            <Timer/>

            <p className="home__subtitle">{subtitle}</p>
            <form className="home__form">
                <label className="home__form-label">
                    <input type="email" className="home__form-input" required placeholder={form.placeholder}/>
                </label>
                <button className="home__form-button" type="submit">{form.button}</button>
            </form>
            <p className="home__info">{info}</p>
        </div>
    </section>
}

export default Home
