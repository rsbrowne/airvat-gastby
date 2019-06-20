import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/airvat-logo.svg'
import mobileBar from '../images/mobile-bar.svg'
import mobileClose from '../images/mobile-close.svg'

const Header = () => {
  return (
    <header>
      <div className="se-pre-con"></div>
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="AirVAT" />
          </Link>
        </div>
        <div className="js-menu-button menu-button">
          <img src={mobileBar} alt="Open" />
        </div>
        <div className="header__nav">
          <img className="header__close js-header__close" src={mobileClose} alt="Close" />
          <ul className="nav">
            <li>
              <Link to="#" className="nav__item nav__item--dropdown">UK</Link>
              <ul className="submenu">
                <li>More countries are coming!</li>
              </ul>
            </li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="#" className="button button--small">Get the App</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header