import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer>
      <div class="footer__inner">
        <div class="footer__button">
          <a href="#" class="button button--negative">Download the App now</a>
        </div>
        <div class="bottom__content">
          <div class="footer__copyright">
            © Airvat 2019
          </div>
          <div class="footer__legal">
            <Link to="/legal">legal</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer