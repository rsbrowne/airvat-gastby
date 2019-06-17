import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header>
      <div class="se-pre-con"></div>
      <div class="header">
        <div class="header__logo">
          <Link to="/">
            <img src="./assets/images/airvat-logo.svg" alt="AirVAT" />
          </Link>
        </div>
        <div class="js-menu-button menu-button">
          <img src="/assets/images/mobile-bar.svg" alt="Open" />
        </div>
        <div class="header__nav">
          <img class="header__close js-header__close" src="/assets/images/mobile-close.svg" alt="Close" />
          <ul class="nav">
            <li>
              <a href="#" class="nav__item nav__item--dropdown">UK</a>
              <ul class="submenu">
                <li>More countries are coming!</li>
              </ul>
            </li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#" class="button button--small">Get the App</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header