import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <div class="section section--banner">
        <div class="section__inner">
          <div class="section__half section__half--left">
            <h1>Tax Free Shopping on your mobile</h1>
            <a href="#" class="button">Get the App</a>
          </div>
          <div class="section__half section__half--right">
            <img class="image--desktop" src="/assets/images/banner-phones.svg" alt="Airvat Phone Demo" />
            <img class="image--mobile" src="/assets/images/banner-phones-mobile.png" alt="Airvat Phone Demo" />
          </div>
        </div>
      </div>
      <div class="section section--introduction">
        <div class="section__inner">
          <div class="section__half introduction--left">
            <img class="image--desktop" src="/assets/images/CTA-image.png" alt="Easy to use" />
            <img class="image--mobile" src="/assets/images/introduction-mobile.png" alt="Easy to use" />
          </div>
          <div class="section__half introduction--right">
            <div class="introduction__content">
              <h2 class="gradient-bg">We're making tax free shopping better for non-EU residents visiting the UK!</h2>
              <div class="introduction__point">
                <img src="/assets/images/tax-icon-mobile.png" alt="Tax" class="mobile-icon" />
                <h3>Get more tax back</h3>
                <p class="large">In-store tax refund companies charge you up to 50% in comissions, fees, and exchange rates. We charge you much less, so you get more tax back!</p>
              </div>
              <div class="introduction__point">
                <img src="/assets/images/shop-icon-mobile.png" alt="Tax" class="mobile-icon" />
                <h3>Shop at any store</h3>
                <p class="large">Use our refund app for any physical shop in the UK. Enjoy the same service whether you are in a luxury department store or a small souvenir shop!</p>
              </div>
              <div class="introduction__point">
                <img src="/assets/images/paperwork-icon-mobile.png" alt="Tax" class="mobile-icon" />
                <h3>We do the boring paperwork for you</h3>
                <p class="large">Forget manually filling in multiple forms from different stores. We put all your receipts together into one tax free form.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section--features">
        <div class="section__inner">
          <div class="section__half features--left">
            <div class="features__content">
              <h2 class="gradient-bg">It's never been this Easy !</h2>
              <div class="feature js-feature active" data-feature="receipts">
                <div class="feature__image">
                  <img src="/assets/images/receipts-mobile.png" alt="recipts" />
                </div>
                <div class="feature__content">
                  <h3>Upload Receipts</h3>
                  <p class="large">Take pictures of all your shop receipts. We will process them for you into a single tax free form.</p>
                </div>
              </div>
              <div class="feature js-feature" data-feature="tax">
                <div class="feature__image">
                  <img src="/assets/images/tax-mobile.png" alt="tax" />
                </div>
                <div class="feature__content">
                  <h3>Print your tax free form</h3>
                  <p class="large">Finished shopping and ready to fly home? Print your tax free form before going to the airport!</p>
                </div>
              </div>
              <div class="feature js-feature" data-feature="form">
                <div class="feature__image">
                  <img src="/assets/images/form-mobile.png" alt="form" />
                </div>
                <div class="feature__content">
                  <h3>Get your form stamped</h3>
                  <p class="large">Follow the instructions within the app on how to get your form authorised by Customs at the airport.</p>
                </div>
              </div>
              <div class="feature js-feature" data-feature="refund">
                <div class="feature__image">
                  <img src="/assets/images/refund-mobile.png" alt="refund" />
                </div>
                <div class="feature__content">
                  <h3>Get your refund</h3>
                  <p class="large">Select your preferred payment method and we'll send you the money!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="section__half features--right">
            <img class="active" src="/assets/images/phone-receipts.png" alt="Upload Receipts" data-feature="receipts" />
            <img src="/assets/images/phone-print.png" alt="Print Tax Form" data-feature="tax" />
            <img src="/assets/images/phone-form.png" alt="Stamp Form" data-feature="form" />
            <img src="/assets/images/phone-refund.png" alt="Get Refund" data-feature="refund" />
          </div>
        </div>
      </div>
      <div class="section section--testimonials">
        <div class="section__inner">
          <h2 class="gradient-bg">What our users say</h2>
          <div class="testimonials__slider">
            <div class="slider__button slider__button--prev"></div>
            <div class="js-testimonials-slider">
              <div class="testimonial">
                <div class="testimonial__content">
                  <img src="/assets/images/testimonial-1.png" alt="Testimonial 1" />
                  <h3 class="testimonial__name">Fang H. <span class="flag flag-ch"></span></h3>
                  <p class="testimonial__quote">I received over £200 extra refund and Airvat did all the paperwork! ⭐️⭐️⭐️⭐️⭐️</p>
                </div>
              </div>
              <div class="testimonial">
                <div class="testimonial__content">
                  <img src="/assets/images/testimonial-2.png" alt="Testimonial 2" />
                  <h3 class="testimonial__name">Wang W. <span class="flag flag-ch"></span></h3>
                  <p class="testimonial__quote">This works in every shop! I’ll never look back - this app has made tax refund so easy.</p>
                </div>
              </div>
              <div class="testimonial">
                <div class="testimonial__content">
                  <img src="/assets/images/testimonial-3.png" alt="Testimonial 3" />
                  <h3 class="testimonial__name">Fernanda F. <span class="flag flag-br"></span></h3>
                  <p class="testimonial__quote">Finally I was able to get tax refund on my phone without manually filling long forms from all the shops. Great service!</p>
                </div>
              </div>
              <div class="testimonial">
                <div class="testimonial__content">
                  <img src="/assets/images/testimonial-4.png" alt="Testimonial 4" />
                  <h3 class="testimonial__name">Fatima A. <span class="flag flag-uae"></span></h3>
                  <p class="testimonial__quote">Fantastic service - I found the app very straightforward and easy to use.</p>
                </div>
              </div>
              <div class="testimonial">
                <div class="testimonial__content">
                  <img src="/assets/images/testimonial-5.png" alt="Testimonial 5" />
                  <h3 class="testimonial__name">Olivia S. <span class="flag flag-us"></span></h3>
                  <p class="testimonial__quote">Fast and efficient. I love that I can manage all of my tax-free shopping from my phone!</p>
                </div>
              </div>
              <div class="testimonial">
                <div class="testimonial__content">
                  <img src="/assets/images/testimonial-6.png" alt="Testimonial 6" />
                  <h3 class="testimonial__name">Grace Y. <span class="flag flag-can"></span></h3>
                  <p class="testimonial__quote">With this app I've been able to claim tax back for all my shopping and not just items from the big stores 😊</p>
                </div>
              </div>
              <div class="testimonial">
                <div class="testimonial__content">
                  <img src="/assets/images/testimonial-7.png" alt="Testimonial 7" />
                  <h3 class="testimonial__name">Yulia B. <span class="flag flag-rus"></span></h3>
                  <p class="testimonial__quote">Very handy, I am a frequent traveller and this keeps track of all my refunds in one place.</p>
                </div>
              </div>
            </div>
            <div class="slider__button slider__button--next"></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage