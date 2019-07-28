import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/main.scss'

const Layout = (props) => {

  return (
    <React.Fragment>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <title>Shop tax free | AIRVAT</title>
        <meta name="description" content="Download the app to get more tax back! Shop at any UK store and we will do the boring paperwork for you!" />
        <link rel="canonical" href="http://www.airvat.co.uk" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </React.Fragment>
  )
}

export default Layout