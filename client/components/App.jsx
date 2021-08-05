import React, { useState, useEffect, useContext, Suspense } from 'react';
import Overview from './OverviewComponent/Overview.jsx';
const Ratings = React.lazy(() => import('./Ratings.jsx'));
const Relate = React.lazy(() => import('./related/product-card/Related-product.jsx'));
import Provider from './shared/context/Provider.jsx';
import MainContext from './shared/context/MainContext.js';
const Outfit = React.lazy(() => import('./related/outfit/Outfit.jsx'));



const App = (props) => {
  return (
    <Provider>
      <Overview />
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <Relate />
          <Outfit />
          <Ratings />
        </section>
      </Suspense>

    </Provider>
  );
}

export default App;
