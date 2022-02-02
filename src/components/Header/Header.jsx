import React from 'react';
import {data} from "../../data/data";
import {Link} from "react-router-dom";
import "./Header.scss"
const Header = () => {
    const {header: {menu,download}} = data
    return <header className="header">
        <nav className="header__nav">
            {/* Logo */}
            <Link className="logo header__logo" to="/"/>
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

            </button>
        </nav>
    </header>
};

export default Header;
