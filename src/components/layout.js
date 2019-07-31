import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'

import loaderGif from '../../static/Preloader_2.gif'

import '../styles/main.scss'

const Layout = (props) => {

  useEffect(() => {
    const pageLoader = document.querySelector('.se-pre-con');
    // Animate loader off screen
    setTimeout(() => {
      pageLoader.classList.add('loaded');
    }, 1000);
  });

  return (
    <React.Fragment>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <title>Shop tax free | AIRVAT</title>
        <meta name="description" content="Download the app to get more tax back! Shop at any UK store and we will do the boring paperwork for you!" />
        <link rel="canonical" href="https://www.airvat.co.uk" />
        <meta name="robots" content="noindex, nofollow" />

        <style type="text/css">{`
          .se-pre-con {
            position: fixed;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            z-index: 9999;
            background-position: center;
            background-repeat: no-repeat;
            background-color: #fff;
            background-image: url(${loaderGif});
          }
        `}
        </style>
      </Helmet>
      <Header></Header>
      <div className="se-pre-con"></div>
      {props.children}
      <Footer></Footer>
    </React.Fragment>
  )
}

export default Layout