import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import bannerPhones from '../images/banner-phones.svg'
import bannerPhonesMobile from '../images/banner-phones-mobile.png'

const IndexPage = () => {
  return (
    <Layout>
      <div className="section section--banner">
        <div className="section__inner">
          <div className="section__half section__half--left">
            <h1>Tax Free Shopping on your mobile</h1>
            <Link to="#" className="button">Get the App</Link>
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
            <img className="image--desktop" src="../images/CTA-image.png" alt="Easy to use" />
            <img className="image--mobile" src="../images/introduction-mobile.png" alt="Easy to use" />
          </div>
          <div className="section__half introduction--right">
            <div className="introduction__content">
              <h2 className="gradient-bg">We're making tax free shopping better for non-EU residents visiting the UK!</h2>
              <div className="introduction__point">
                <img src="../images/tax-icon-mobile.png" alt="Tax" className="mobile-icon" />
                <h3>Get more tax back</h3>
                <p className="large">In-store tax refund companies charge you up to 50% in comissions, fees, and exchange rates. We charge you much less, so you get more tax back!</p>
              </div>
              <div className="introduction__point">
                <img src="../images/shop-icon-mobile.png" alt="Tax" className="mobile-icon" />
                <h3>Shop at any store</h3>
                <p className="large">Use our refund app for any physical shop in the UK. Enjoy the same service whether you are in a luxury department store or a small souvenir shop!</p>
              </div>
              <div className="introduction__point">
                <img src="../images/paperwork-icon-mobile.png" alt="Tax" className="mobile-icon" />
                <h3>We do the boring paperwork for you</h3>
                <p className="large">Forget manually filling in multiple forms from different stores. We put all your receipts together into one tax free form.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section--features">
        <div className="section__inner">
          <div className="section__half features--left">
            <div className="features__content">
              <h2 className="gradient-bg">It's never been this Easy !</h2>
              <div className="feature js-feature active" data-feature="receipts">
                <div className="feature__image">
                  <img src="../images/receipts-mobile.png" alt="recipts" />
                </div>
                <div className="feature__content">
                  <h3>Upload Receipts</h3>
                  <p className="large">Take pictures of all your shop receipts. We will process them for you into a single tax free form.</p>
                </div>
              </div>
              <div className="feature js-feature" data-feature="tax">
                <div className="feature__image">
                  <img src="../images/tax-mobile.png" alt="tax" />
                </div>
                <div className="feature__content">
                  <h3>Print your tax free form</h3>
                  <p className="large">Finished shopping and ready to fly home? Print your tax free form before going to the airport!</p>
                </div>
              </div>
              <div className="feature js-feature" data-feature="form">
                <div className="feature__image">
                  <img src="../images/form-mobile.png" alt="form" />
                </div>
                <div className="feature__content">
                  <h3>Get your form stamped</h3>
                  <p className="large">Follow the instructions within the app on how to get your form authorised by Customs at the airport.</p>
                </div>
              </div>
              <div className="feature js-feature" data-feature="refund">
                <div className="feature__image">
                  <img src="../images/refund-mobile.png" alt="refund" />
                </div>
                <div className="feature__content">
                  <h3>Get your refund</h3>
                  <p className="large">Select your preferred payment method and we'll send you the money!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="section__half features--right">
            <img className="active" src="../images/phone-receipts.png" alt="Upload Receipts" data-feature="receipts" />
            <img src="../images/phone-print.png" alt="Print Tax Form" data-feature="tax" />
            <img src="../images/phone-form.png" alt="Stamp Form" data-feature="form" />
            <img src="../images/phone-refund.png" alt="Get Refund" data-feature="refund" />
          </div>
        </div>
      </div>
      <div className="section section--testimonials">
        <div className="section__inner">
          <h2 className="gradient-bg">What our users say</h2>
          <div className="testimonials__slider">
            <div className="slider__button slider__button--prev"></div>
            <div className="js-testimonials-slider">
              <div className="testimonial">
                <div className="testimonial__content">
                  <img src="../images/testimonial-1.png" alt="Testimonial 1" />
                  <h3 className="testimonial__name">Fang H. <span className="flag flag-ch"></span></h3>
                  <p className="testimonial__quote">I received over £200 extra refund and Airvat did all the paperwork! ⭐️⭐️⭐️⭐️⭐️</p>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial__content">
                  <img src="../images/testimonial-2.png" alt="Testimonial 2" />
                  <h3 className="testimonial__name">Wang W. <span className="flag flag-ch"></span></h3>
                  <p className="testimonial__quote">This works in every shop! I’ll never look back - this app has made tax refund so easy.</p>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial__content">
                  <img src="../images/testimonial-3.png" alt="Testimonial 3" />
                  <h3 className="testimonial__name">Fernanda F. <span className="flag flag-br"></span></h3>
                  <p className="testimonial__quote">Finally I was able to get tax refund on my phone without manually filling long forms from all the shops. Great service!</p>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial__content">
                  <img src="../images/testimonial-4.png" alt="Testimonial 4" />
                  <h3 className="testimonial__name">Fatima A. <span className="flag flag-uae"></span></h3>
                  <p className="testimonial__quote">Fantastic service - I found the app very straightforward and easy to use.</p>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial__content">
                  <img src="../images/testimonial-5.png" alt="Testimonial 5" />
                  <h3 className="testimonial__name">Olivia S. <span className="flag flag-us"></span></h3>
                  <p className="testimonial__quote">Fast and efficient. I love that I can manage all of my tax-free shopping from my phone!</p>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial__content">
                  <img src="../images/testimonial-6.png" alt="Testimonial 6" />
                  <h3 className="testimonial__name">Grace Y. <span className="flag flag-can"></span></h3>
                  <p className="testimonial__quote">With this app I've been able to claim tax back for all my shopping and not just items from the big stores 😊</p>
                </div>
              </div>
              <div className="testimonial">
                <div className="testimonial__content">
                  <img src="../images/testimonial-7.png" alt="Testimonial 7" />
                  <h3 className="testimonial__name">Yulia B. <span className="flag flag-rus"></span></h3>
                  <p className="testimonial__quote">Very handy, I am a frequent traveller and this keeps track of all my refunds in one place.</p>
                </div>
              </div>
            </div>
            <div className="slider__button slider__button--next"></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage