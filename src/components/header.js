import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import logo from '../images/airvat-logo.svg'
import mobileBar from '../images/mobile-bar.svg'
import mobileClose from '../images/mobile-close.svg'
import appStoreBadge from '../images/app-store-badge.svg'
import googleStoreBadge from '../images/google-play-badge.svg'

const Header = () => {
  const mobileNav = React.createRef();
  const dropdownNav = React.createRef();
  const dropdownContainer = React.createRef();

  const openMenu = () => {
    if (!mobileNav.current.classList.contains('active')) {
      mobileNav.current.classList.add('active');
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');
    }
  }

  const closeMenu = () => {
    if (mobileNav.current.classList.contains('active')) {
      mobileNav.current.classList.remove('active');
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
    }
  }

  const toggleDropdown = e => {
    e.preventDefault();

    if (dropdownNav.current.classList.contains('active')) {
      dropdownNav.current.classList.remove('active');
    } else {
      dropdownNav.current.classList.add('active');
    }
  }

  const closeDropdown = e => {
    const clickClassList = e.target.classList;
    if (!clickClassList.contains('nav__item--dropdown') && !clickClassList.contains('submenu')) {
      dropdownNav.current.classList.remove('active');
    }
  };

  useEffect(() => {
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <header>
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
            <li ref={dropdownContainer}>
              <Link to="/" className="nav__item nav__item--dropdown" onClick={toggleDropdown}>UK</Link>
              <ul className="submenu" ref={dropdownNav}>
                <li>More countries are coming!</li>
              </ul>
            </li>
            <li><Link to="/faq" className="nav__item">FAQ</Link></li>
            <li><Link to="/contact" className="nav__item">Contact</Link></li>
            <li><Link to="/blog" className="nav__item">Blog</Link></li>
            <li>
              <a href="#footer-links" className="button button--small button--header">Get the App</a>
              <div className="header-badges">
              <OutboundLink href="https://apps.apple.com/us/app/airvat-tax-refund/id1470497953" className="store-link">
                <img src={appStoreBadge} alt="Download from the App Store"/>
              </OutboundLink>
              <OutboundLink href="https://play.google.com/store/apps/details?id=com.airvat" className="store-link">
                <img src={googleStoreBadge} alt="Download from the Google Play Store"/>
              </OutboundLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header