import React from 'react'
import {data} from "../../data/data"
import {Link} from "react-router-dom"
import {AiFillApple} from "react-icons/ai"
import {IoLogoAppleAr} from "react-icons/io5"
import {motion} from "framer-motion"
// 💡 Style
import "./Header.scss"

const Header = () => {
    const {header: {menu, download}} = data
    return <motion.header
        className="header"
        initial={{y: 30, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 1}}
    >
        <nav className="header__nav">
            {/* Logo */}
            <Link className="logo header__logo" to="/">
                <IoLogoAppleAr size={30}/>
            </Link>
            {/* Menu */}
            <ul className="menu header__menu">
                {menu.map((item, idx) => (
                    <li className="menu__item" key={idx}>
                        <Link to={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>
            {/* Download */}
            <button className="header__download">
                <AiFillApple className="header__download-ico" size={30}/>
                <span className="header__download-side">
                    <span className="header__download-top">{download.label}</span>
                    <span className="header__download-bottom">{download.platform}</span>
                </span>
            </button>
        </nav>
    </motion.header>
}

export default Header
