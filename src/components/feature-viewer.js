import React from 'react'

import receiptsPhone from '../images/phone-receipts.png'
import receiptsPhoneMobile from '../images/receipts-mobile.png'
import taxPhone from '../images/phone-print.png'
import taxPhoneMobile from '../images/tax-mobile.png'
import formPhone from '../images/phone-form.png'
import formPhoneMobile from '../images/form-mobile.png'
import refundPhone from '../images/phone-refund.png'
import refundPhoneMobile from '../images/refund-mobile.png'

const FeatureViewer = () => {
  return (
    <React.Fragment>
      <div className="section__half features--left">
        <div className="features__content">
          <h2 className="gradient-bg">It's never been this Easy !</h2>
          <div className="feature js-feature active" data-feature="receipts">
            <div className="feature__image">
              <img src={receiptsPhoneMobile} alt="recipts" />
            </div>
            <div className="feature__content">
              <h3>Upload Receipts</h3>
              <p className="large">Take pictures of all your shop receipts. We will process them for you into a single tax free form.</p>
            </div>
          </div>
          <div className="feature js-feature" data-feature="tax">
            <div className="feature__image">
              <img src={taxPhoneMobile} alt="tax" />
            </div>
            <div className="feature__content">
              <h3>Print your tax free form</h3>
              <p className="large">Finished shopping and ready to fly home? Print your tax free form before going to the airport!</p>
            </div>
          </div>
          <div className="feature js-feature" data-feature="form">
            <div className="feature__image">
              <img src={formPhoneMobile} alt="form" />
            </div>
            <div className="feature__content">
              <h3>Get your form stamped</h3>
              <p className="large">Follow the instructions within the app on how to get your form authorised by Customs at the airport.</p>
            </div>
          </div>
          <div className="feature js-feature" data-feature="refund">
            <div className="feature__image">
              <img src={refundPhoneMobile} alt="refund" />
            </div>
            <div className="feature__content">
              <h3>Get your refund</h3>
              <p className="large">Select your preferred payment method and we'll send you the money!</p>
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