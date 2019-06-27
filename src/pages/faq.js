import React from 'react'

import Layout from '../components/layout'

const FaqPage = () => {

  const handleClick = (e) => {
    const clickedQuestion = e.currentTarget;
    const parentNode = e.currentTarget.parentElement;
    const relatedAnswer = parentNode.querySelector('.answer');
    
    if (clickedQuestion.classList.contains('active')) {
      clickedQuestion.classList.remove('active');
      relatedAnswer.classList.remove('active');
    } else {
      clickedQuestion.classList.add('active');
      relatedAnswer.classList.add('active');
    }
  }

  return (
    <Layout>
      <div className="section section--banner section--faq">
        <div className="section__inner section__inner--faq">
          <h1>How can we help you?</h1>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                How to shop tax free with AIRVAT?
              </h3>
            </div>
            <div className="answer">
              <ul>
                <li>Shop in any UK physical store with cash or card;</li>
                <li>Take pictures of your purchase receipts within the app with your phone camera;</li>
                <li>We will process all of your receipts into one tax free form and email it to you;</li>
                <li>Print your tax free form before flying back home;</li>
                <li>Follow the instruction in the app of where to get a Customs stamp at your departure airport;</li>
                <li>Receive your refund 2-6 weeks after the departure.</li>
              </ul>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                Who can shop tax free?
              </h3>
            </div>
            <div className="answer">
              <ul>
                <li>Non-EU residents;</li>
                <li>EU residents living outside the EU for 12 months or more (note: you will need to provide proof of residency e.g. visa or residence permit);</li>
                <li>Anyone studying or working in the EU can get a tax refund on purchases made in the final 3 months before going home.</li>
              </ul>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                What purchases qualify for tax refund?
              </h3>
            </div>
            <div className="answer">
              <ul>
                <li>Goods purchased in physical retail stores only;</li>
                <li>Purchases must be for personal use and taken back to your home country in your luggage within 3 months of buying;</li>
                <li>Your shopping must be unused and still in its original packaging when leaving the EU.</li>
              </ul>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                What purchases DON’T qualify for tax refund?
              </h3>
            </div>
            <div className="answer">
              <p>
                Online shopping or services (e.g. taxies, concert tickets, hotel bills, or restaurant meals) do not qualify for tax refund.
              </p>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                Is my tax refund guaranteed?
              </h3>
            </div>
            <div className="answer">
              <p>
                Yes, provided you get your tax free form stamped by Customs before leaving the EU. Select your departure airport within the app to get instructions on where to go.
              </p>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                Purchasing goods over £250?
              </h3>
            </div>
            <div className="answer">
              <p>
                Ask the shop assistant to issue a business VAT invoice addressed: <br />
                <strong>AIRVAT ltd <br />
                20-22 Wenlock Road, <br />
                London, N1 7GU, UK <br />
                VAT number 312 0922 50 <br /></strong>
                Shops are required to do this if requested, however, if you are having difficulties, please let us know and we will help you by contacting the shop.              
              </p>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                I already received a tax free form instore
              </h3>
            </div>
            <div className="answer">
              <p>
                Return the tax free form back to the shop and replace it with a standard till receipt so that you can get your tax refund with AIRVAT. 
              </p>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                Customs inspection
              </h3>
            </div>
            <div className="answer">
              <p>
                Customs may inspect your shopping, especially high value items such as electronics, jewelry, and watches. Therefore your shopping must be unused and in it original packaging to ensure you get your tax free form stamped.
              </p>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                A shop emailed me an e-receipt
              </h3>
            </div>
            <div className="answer">
              <p>
                Forward us your e-receipts to info@airvat.com.
              </p>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                I am visiting another EU country before flying home 
              </h3>
            </div>
            <div className="answer">
              <p>
                If the UK is not your last departure point from the EU, get Customs authorisation at your final EU departure airport and post the original stamped form to us: <br />
                <strong>AIRVAT ltd <br />
                20-22 Wenlock Road, <br />
                London, N1 7GU, <br />
                United Kingdom</strong>
              </p>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                I have a connecting flight before leaving the EU
              </h3>
            </div>
            <div className="answer">
              <p>
                UK Customs will stamp your tax free form if your connecting flight leaves the EU within 24 hours after you left the UK.
              </p>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                In which countries can I use AIRVAT?
              </h3>
            </div>
            <div className="answer">
              <p>
                On purchases made in the UK only, but you can arrive in and depart from any other EU countries during your visit to the EU.
              </p>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                Does AIRVAT charge fees?
              </h3>
            </div>
            <div className="answer">
              <p>
                Yes. Your tax free form will state the exact amount of admin fees charged. We will always charge you less than when getting your refund from the shop where you bought the goods.
              </p>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                When will I receive my refund?
              </h3>
            </div>
            <div className="answer">
              <p>
                Usually 2-6 weeks after your departure depending on your airport.
              </p>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                Where can I print my tax free form?
              </h3>
            </div>
            <div className="answer">
              <p>Ask at your hotel reception, find an internet cafe, or go to the nearest Ryman stationery shop.</p>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                What is VAT?
              </h3>
            </div>
            <div className="answer">
              <p>
                VAT is a sales tax already included in the price of your purchase. This tax is charged by the UK Government at 20% of the net and 16.67% of the gross goods value. Non-EU residents are entitled to claim their tax on goods they take home from the EU at the end of their visit. See full details on the UK government website <a href="https://www.gov.uk/guidance/claim-vat-back-on-tax-free-shopping-in-the-uk-notice-7041">https://www.gov.uk/guidance/claim-vat-back-on-tax-free-shopping-in-the-uk-notice-7041</a>
              </p>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                Any other questions?
              </h3>
            </div>
            <div className="answer">
              <p>
                Email us on info@airvat.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FaqPage