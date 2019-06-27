import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/airvat-logo.svg'
import mobileBar from '../images/mobile-bar.svg'
import mobileClose from '../images/mobile-close.svg'

const Header = () => {
  const mobileNav = React.createRef();
  const dropdownNav = React.createRef();
  const bodySelector = document.body;
  const htmlSelector = document.documentElement;

  const openMenu = () => {
    if (!mobileNav.current.classList.contains('active')) {
      mobileNav.current.classList.add('active');
      bodySelector.classList.add('no-scroll');
      htmlSelector.classList.add('no-scroll');
    }
  }

  const closeMenu = () => {
    if (mobileNav.current.classList.contains('active')) {
      mobileNav.current.classList.remove('active');
      bodySelector.classList.remove('no-scroll');
      htmlSelector.classList.remove('no-scroll');
    }
  }

  const toggleDropdown = (e) => {
    e.preventDefault();

    if (dropdownNav.current.classList.contains('active')) {
      dropdownNav.current.classList.remove('active');
    } else {
      dropdownNav.current.classList.add('active');
    }
  }

  return (
    <header>
      <div className="se-pre-con"></div>
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="AirVAT" />
          </Link>
        </div>
        <div className="js-menu-button menu-button" onClick={openMenu}>
          <img src={mobileBar} alt="Open" />
        </div>
        <div className="header__nav" ref={mobileNav}>
          <img className="header__close js-header__close" src={mobileClose} alt="Close" onClick={closeMenu} />
          <ul className="nav">
            <li>
              <Link to="#" className="nav__item nav__item--dropdown" onClick={toggleDropdown}>UK</Link>
              <ul className="submenu" ref={dropdownNav}>
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