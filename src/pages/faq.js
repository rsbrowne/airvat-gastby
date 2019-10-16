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
                <li>Shop in any UK store but don’t take an in-store tax refund form;</li>
                <li>Take pictures inside the app of all your till receipts within 14 days of purchase;</li>
                <li>All your verified receipts will be consolidated into one tax free form issued by Airvat;</li>
                <li>Print your Airvat tax free form before going to the airport;</li>
                <li>Follow the instructions inside the app of where to get your Airvat tax refund form authorised by Customs at the airport;</li>
                <li>Receive your refund 2-8 weeks after your departure.</li>
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
                <li>EU nationals living outside the EU for 12 months or more (Note: you will need to provide proof of your non-EU residency e.g. foreign visa, residence permit, or evidence of occupation);</li>
                <li>Anyone studying or working in the EU can get a tax refund on purchases made in the final 3 months before permanently going back home (Note: you will need to demonstrate to Customs that: 1. you are not returning back to the EU for at least 12 months, 2. evidence that your work or study has ended).</li>
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
                <li>Items purchased in physical retail stores only (i.e. not online);</li>
                <li>Goods must be for personal use and taken out of the EU in your personal luggage within 3 months of purchase;</li>
                <li>Your tax free shopping must be unused, still in its original packaging, and available for Customs inspection when leaving the EU.</li>
              </ul>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                What purchases DON’T qualify for tax refund with Airvat?
              </h3>
            </div>
            <div className="answer">
              <ul>
                <li>Online shopping;</li>
                <li>Purchases for which you already received a tax free form in-store;</li>
                <li>Services (e.g. transport, hotel stays, entertainment tickets, or restaurant food);</li>
                <li>Children's clothing;</li>
                <li>Books;</li>
                <li>Basic food items such as coffee, tea, honey, etc (i.e. most items bought in a supermarket);</li>
                <li>Goods couriered or posted directly to your home country;</li>
                <li>Anything that you can’t physically put in your luggage to take home and show to Customs for inspection at the airport.</li>
              </ul>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
              What receipts are eligible for tax refund with Airvat?
              </h3>
            </div>
            <div className="answer">
              <p>
                Each receipt must be below £250 and contain the following information:
              </p>
              <ol>
                <li>VAT rate or amount;</li>
                <li>Retailer’s name and address;</li>
                <li>Retailer’s VAT registration number;</li>
                <li>Receipt date and number;</li>
                <li>Goods description, quantity, and price.</li>
              </ol>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                Purchasing goods over £250?
              </h3>
            </div>
            <div className="answer">
              <ul>
                <li>The £250 limit applies per receipt (i.e. not per item). To avoid exceeding £250 you can pay for items separately.</li>
                <li>
                  If you are purchasing individual items above £250, ask the shop assistant to issue a VAT business invoice addressed to Airvat: <br />
                  <strong>AIRVAT ltd <br />
                  20-22 Wenlock Road, <br />
                  London, N1 7GU, UK <br />
                  VAT number 312 0922 50 <br /></strong>
                </li>
              </ul>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                I already received a tax free form in-store
              </h3>
            </div>
            <div className="answer">
              <p>
                Unfortunately, you will not be able to use Airvat for any purchases where a tax refund form has already been issued in-store at the time of purchase. However, you can return the original in-store VAT refund form back and ask the shop assistant to issue a normal till receipt to you instead. After this you will be able to process your receipt using the Airvat app. 
              </p>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                What do I need to do at the Airport?
              </h3>
            </div>
            <div className="answer">
              <ul>
                <li>Select your departure airport inside the Airvat app and follow the instructions of where to find the Customs desk;</li>
                <li>Present your unused goods in their original packaging for inspection;</li>
                <li>Have your printed Airvat tax free form stamped by Customs before departure.</li>
              </ul>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                What do I need to present to get a Customs stamp at the airport?
              </h3>
            </div>
            <div className="answer">
              <ul>
                <li>Printed Airvat tax free form;</li>
                <li>Flight ticket or boarding pass;</li>
                <li>A valid passport;</li>
                <li>Your unused shopping items in their original packaging.</li>
              </ul>
            </div>
          </div>
          <div className="accordion js-accordion">
            <div className="question" onClick={handleClick}>
              <h3>
                Where do I need to go at the airport? 
              </h3>
            </div>
            <div className="answer">
              <ul>
                <li>There are usually Customs desks before and after Airport Security;</li>
                <li>Go to the Customs desk before Security if you have items that you’d like to have checked-in and get your form authorised before checking in your luggage;</li>
                <li>Go to the Customs desk after Security if you have high-value items (worth more than £1,000), or various valuables such as jewellery, watches, sunglasses, portable electronics. You will need to have your items with you in your hand luggage;</li>
                <li>Tip: the wait at the Customs desk after Security is usually less than 15 min long. So if you have not checked-in your tax free shopping items, it can be faster to have the tax form validated after Security.</li>
              </ul>
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
                Yes, provided you get your Airvat tax free form stamped by Customs at the departure airport before leaving the EU. Select your departure airport within the app to get instructions on where to go at the airport.
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
                Forward us your e-receipts to <a href="emailto:info@airvat.com">info@airvat.com</a>
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
              <p>On purchases made in the UK only, but you can arrive in and depart from any other EU countries during your visit to the EU.</p>
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
                Yes, our fee is 20% of the refund amount. Your tax free form will state the exact amount of admin fees charged. You can also calculate the fee inside the app using our calculator. Our fee will generally be much less than when getting your refund from the shop where you bought the goods.
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
                Usually 2-8 weeks after your departure depending on your airport.
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
              <p>
                Ask at your hotel reception, find an internet cafe, go to the nearest Ryman stationery shop, or Snappy Snaps printing specialist.
              </p>
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
                VAT is a sales tax already included in the price of your purchase. This tax is charged by the UK Government at 20% of the net and 16.67% of the gross goods value. Non-EU residents are entitled to claim their tax on goods they take home from the EU at the end of their visit. 
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
                Email us on <a href="emailto:info@airvat.com">info@airvat.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FaqPage