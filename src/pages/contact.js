import React from 'react'

import Layout from '../components/layout'

import mailIcon from '../images/main-icon.svg'
import mapIcon from '../images/map-icon.svg'

const ContactPage = () => {
  return (
    <Layout>
      <div class="section section--banner section--contact">
        <div class="section__inner section__inner--contact">
          <h1>Contact Us</h1>
          <div class="contact__links">
            <div class="contact__link contact__link--email">
              <img src={mailIcon} alt="Email Us" />
              <a href="mailto:info@airvat.com">info@airvat.com</a>
            </div>
            <div class="contact__link contact__link--address">
              <img src={mapIcon} alt="Our Address" />
              <a href="mailto:info@airvat.com">20-22 Wenlock Road, London, N1 7GU,<br /> United Kingdom</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage