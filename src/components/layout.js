import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/main.scss'

const override = css`
    display: block;
    margin: 0 auto;
`;

const Layout = (props) => {

  const [load, setLoad] = useState(true);

  useEffect(() => {
    document.querySelector('.pre-loader').classList.add('active');
    document.querySelector('.pre-loader').classList.remove('hidden');

    setTimeout(() => {
      document.querySelector('.pre-loader').classList.remove('active');
      setLoad(false);
    }, 1500);

    setTimeout(() => {
      document.querySelector('.pre-loader').classList.add('hidden');
    }, 2000);
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
        <link rel="canonical" href="http://www.airvat.co.uk" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="pre-loader active">
        <BeatLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={load}
          />
      </div>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </React.Fragment>
  )
}

export default Layout