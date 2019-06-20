import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer>
      <div className="footer__inner">
        <div className="footer__button">
          <a href="#" className="button button--negative">Download the App now</a>
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