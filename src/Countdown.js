import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
// 💡 Components
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

const Countdown = () =>
    <div className="countdown">
        <Router>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/about" exact element={<About/>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>

export default Countdown
