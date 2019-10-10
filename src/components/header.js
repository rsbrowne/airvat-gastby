import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

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
            <li><Link to="/en" className="nav__item nav__item--lang"><span className="link-flag link-flag--uk"></span> EN</Link></li>
            <li><Link to="/ru" className="nav__item nav__item--lang"><span className="link-flag link-flag--ru"></span> RU</Link></li>
            <li><Link to="/zh" className="nav__item nav__item--lang"><span className="link-flag link-flag--ch"></span> 中文</Link></li>
            <li><Link to="/faq" className="nav__item"><FormattedMessage id="menuFAQ" /></Link></li>
            <li><Link to="/contact" className="nav__item"><FormattedMessage id="menuContact" /></Link></li>
            <li><Link to="/blog" className="nav__item"><FormattedMessage id="menuBlog" /></Link></li>
            <li>
              <a href="#footer-links" className="button button--small button--header"><FormattedMessage id="menuGetTheApp" /></a>
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