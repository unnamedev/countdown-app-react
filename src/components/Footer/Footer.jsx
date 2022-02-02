import React from "react"
import {Link} from "react-router-dom"
import {GrFacebook, GrInstagram, GrLinkedin} from "react-icons/gr"
import {motion} from "framer-motion"
// 💡 Style
import "./Footer.scss"
// 💡 Data
import {data} from "../../data/data"

const Footer = () => {
    const {footer: {privacy}} = data

    return <motion.footer className="footer"
                   initial={{y: 30, opacity: 0}}
                   animate={{y: 0, opacity: 1}}
                   transition={{duration: 1, delay: 2.5}}
    >
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
    </motion.footer>
}

export default Footer
