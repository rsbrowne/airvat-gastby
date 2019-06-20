import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header>
      <div className="se-pre-con"></div>
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <img src="./assets/images/airvat-logo.svg" alt="AirVAT" />
          </Link>
        </div>
        <div className="js-menu-button menu-button">
          <img src="/assets/images/mobile-bar.svg" alt="Open" />
        </div>
        <div className="header__nav">
          <img className="header__close js-header__close" src="/assets/images/mobile-close.svg" alt="Close" />
          <ul className="nav">
            <li>
              <a href="#" className="nav__item nav__item--dropdown">UK</a>
              <ul className="submenu">
                <li>More countries are coming!</li>
              </ul>
            </li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#" className="button button--small">Get the App</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header