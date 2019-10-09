import React from 'react'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import Layout from '../components/layout'
import TestimonialSlider from '../components/homepage-carousel'
import FeatureViewer from '../components/feature-viewer'

import bannerPhones from '../images/banner-phones.svg'
import bannerPhonesMobile from '../images/banner-phones-mobile.png'
import introImage from '../images/CTA-image.png'
import introImageMobile from '../images/introduction-mobile.png'
import taxIconMobile from '../images/tax-icon-mobile.png'
import shopIconMobile from '../images/shop-icon-mobile.png'
import paperworkIconMobile from '../images/paperwork-icon-mobile.png'

const IndexPage = () => {
  return (
    <Layout>
      <div className="section section--banner">
        <div className="section__inner">
          <div className="section__half section__half--left">
            <h1><FormattedMessage id="bannerTitle" /></h1>
            <a href="#footer-links" className="button"><FormattedMessage id="bannerGetTheApp" /></a>
          </div>
          <div className="section__half section__half--right">
            <img className="image--desktop" src={bannerPhones} alt="Airvat Phone Demo" />
            <img className="image--mobile" src={bannerPhonesMobile} alt="Airvat Phone Demo" />
          </div>
        </div>
      </div>
      <div className="section section--introduction">
        <div className="section__inner">
          <div className="section__half introduction--left">
            <img className="image--desktop" src={introImage} alt="Easy to use" />
            <img className="image--mobile" src={introImageMobile} alt="Easy to use" />
          </div>
          <div className="section__half introduction--right">
            <div className="introduction__content">
              <h2 className="gradient-bg"><FormattedMessage id="firstSectionTitle" /></h2>
              <div className="introduction__point">
                <img src={taxIconMobile} alt="Tax" className="mobile-icon" />
                <h3><FormattedMessage id="firstSectionFirstPointTitle" /></h3>
                <p className="large"><FormattedMessage id="firstSectionFirstPointBody" /></p>
              </div>
              <div className="introduction__point">
                <img src={shopIconMobile} alt="Tax" className="mobile-icon" />
                <h3><FormattedMessage id="firstSectionSecondPointTitle" /></h3>
                <p className="large"><FormattedMessage id="firstSectionSecondPointBody" /></p>
              </div>
              <div className="introduction__point">
                <img src={paperworkIconMobile} alt="Tax" className="mobile-icon" />
                <h3><FormattedMessage id="firstSectionThirdPointTitle" /></h3>
                <p className="large"><FormattedMessage id="firstSectionThirdPointBody" /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section--features">
        <div className="section__inner">
          <FeatureViewer></FeatureViewer>
        </div>
      </div>
      <div className="section section--testimonials">
        <div className="section__inner">
          <h2 className="gradient-bg"><FormattedMessage id="testimonialTitle" /></h2>
          <TestimonialSlider></TestimonialSlider>
        </div>
      </div>
    </Layout>
  )
}

export default injectIntl(IndexPage)