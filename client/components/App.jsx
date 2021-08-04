import React, { useState, useEffect, useContext } from 'react';
import Overview from './OverviewComponent/Overview.jsx';
import Ratings from './Ratings.jsx';
import ReviewList from './ratings/ReviewList/ReviewList.jsx';
import Relate from './related/product-card/Related-product.jsx'
import Provider from './shared/context/Provider.jsx';
import MainContext from './shared/context/MainContext.js';
import Outfit from './related/outfit/Outfit.jsx';



const App = (props) => {
  return (
    <Provider>
      <Overview />
      <Relate />
      <Outfit />
      <Ratings />

    </Provider>
  );
}

export default App;
