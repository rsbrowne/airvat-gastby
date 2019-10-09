import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FormattedMessage } from "gatsby-plugin-intl"

import appStoreBadge from '../images/app-store-badge.svg'
import googleStoreBadge from '../images/google-play-badge.svg'

const Footer = () => {
  return (
    <footer>
      <div className="footer__inner">
        <div className="footer__button">
          <h2><FormattedMessage id="footerText" /></h2>
          <div className="footer__links" id="footer-links">
            <OutboundLink href="https://apps.apple.com/us/app/airvat-tax-refund/id1470497953" className="store-link">
              <img src={appStoreBadge} alt="Download from the App Store"/>
            </OutboundLink>
            <OutboundLink href="https://play.google.com/store/apps/details?id=com.airvat" className="store-link">
              <img src={googleStoreBadge} alt="Download from the Google Play Store"/>
            </OutboundLink>
          </div>
        </div>
        <div className="bottom__content">
          <div className="footer__copyright">
            © Airvat 2019
          </div>
          <div className="footer__legal">
            <Link to="/legal">legal</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer