import React from 'react'

import receiptsPhone from '../images/phone-receipts.png'
import receiptsPhoneMobile from '../images/receipts-mobile.png'
import taxPhone from '../images/phone-print.png'
import taxPhoneMobile from '../images/tax-mobile.png'
import formPhone from '../images/phone-form.png'
import formPhoneMobile from '../images/form-mobile.png'
import refundPhone from '../images/phone-refund.png'
import refundPhoneMobile from '../images/refund-mobile.png'
import visaLogo from '../images/visa-logo.svg'
import mastercardLogo from '../images/mastercard-logo.svg'
import paypalLogo from '../images/paypal-logo.svg'
import wechatLogo from '../images/wechat-logo.svg'

const FeatureViewer = () => {

  const handleClick = (e) => {
    const features = document.querySelectorAll('.js-feature');
    const featureImg = document.querySelectorAll('.features--right img');
    const clickedFeature = e.currentTarget;
  
    if (!clickedFeature.classList.contains('active')) {
      const clickedFeatureAttr = clickedFeature.getAttribute('data-feature');
  
      features.forEach(feature => {
        feature.classList.remove('active');
      });
  
      clickedFeature.classList.add('active');
  
      featureImg.forEach(featureImg => {
        if (featureImg.getAttribute('data-feature') === clickedFeatureAttr) {
          featureImg.classList.add('active');
        } else {
          featureImg.classList.remove('active');
        }
      });
    }
  }
  
  return (
    <React.Fragment>
      <div className="section__half features--left">
        <div className="features__content">
          <h2 className="gradient-bg">It's never been this Easy !</h2>
          <div className="feature js-feature active" data-feature="receipts" onClick={handleClick}>
            <div className="feature__image">
              <img src={receiptsPhoneMobile} alt="recipts" />
            </div>
            <div className="feature__content">
              <h3>UPLOAD RECEIPTS</h3>
              <p className="large">Take pictures of all your shop receipts. We will process them for you into a single tax free form.</p>
            </div>
          </div>
          <div className="feature js-feature" data-feature="tax" onClick={handleClick}>
            <div className="feature__image">
              <img src={taxPhoneMobile} alt="tax" />
            </div>
            <div className="feature__content">
              <h3>PRINT YOUR TAX FREE FORM</h3>
              <p className="large">Finished shopping and ready to fly home? Print your tax free form before going to the airport!</p>
            </div>
          </div>
          <div className="feature js-feature" data-feature="form" onClick={handleClick}>
            <div className="feature__image">
              <img src={formPhoneMobile} alt="form" />
            </div>
            <div className="feature__content">
              <h3>GET YOUR FORM STAMPED</h3>
              <p className="large">Follow the instructions within the app on how to get your form authorised by Customs at the airport.</p>
            </div>
          </div>
          <div className="feature js-feature" data-feature="refund" onClick={handleClick}>
            <div className="feature__image">
              <img src={refundPhoneMobile} alt="refund" />
            </div>
            <div className="feature__content">
              <h3>GET YOUR REFUND</h3>
              <p className="large">Select your preferred payment method and we'll send you the money!</p>
              <div className="feature__logos">
                <div className="feature__logo">
                  <img src={visaLogo} alt="visa" />
                </div>
                <div className="feature__logo">
                  <img src={mastercardLogo} alt="visa" />
                </div>
                <div className="feature__logo">
                  <img src={paypalLogo} alt="visa" />
                </div>
                <div className="feature__logo">
                  <img src={wechatLogo} alt="visa" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section__half features--right">
        <img className="active" src={receiptsPhone} alt="Upload Receipts" data-feature="receipts" />
        <img src={taxPhone} alt="Print Tax Form" data-feature="tax" />
        <img src={formPhone} alt="Stamp Form" data-feature="form" />
        <img src={refundPhone} alt="Get Refund" data-feature="refund" />
      </div>
    </React.Fragment>
  );
}

export default FeatureViewer