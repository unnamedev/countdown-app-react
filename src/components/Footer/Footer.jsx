import React from "react"
import {Link} from "react-router-dom"
import {GrFacebook, GrInstagram, GrLinkedin} from "react-icons/gr"
// 💡 Style
import "./Footer.scss"
// 💡 Data
import {data} from "../../data/data"

const Footer = () => {
    const {footer: {privacy}} = data

    return <footer className="footer">
        <div className="footer__container">
            <Link to="/">{privacy}</Link>

            <ul className="social footer__social">
                <li className="social__item">
                    <a href="/#" className="social__link">
                        <GrFacebook size={25}/>
                    </a>
                </li>
                <li className="social__item">
                    <GrLinkedin size={25}/>
                </li>
                <li className="social__item">
                    <GrInstagram size={25}/>
                </li>
            </ul>
        </div>
    </footer>
}

export default Footer
