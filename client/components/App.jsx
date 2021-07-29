import React, { useState, useEffect, useContext } from 'react';
import Overview from './OverviewComponent/Overview.jsx';
import Ratings from './Ratings.jsx';
import ReviewList from './ratings/ReviewList/ReviewList.jsx';
import Relate from './related/product-card/Related-product.jsx'
import dataUrl from './related/sample-data.js'
import { sampleData } from '../sampleData.js';
import { metaData } from '../metaData.js';
import Provider from './shared/context/Provider.jsx';
import MainContext from './shared/context/MainContext.js';
const token = require('../../server/config.js');
const axios = require('axios');


const App = (props) => {
  const [data, setData] = useState(sampleData);
  const [meta, setMeta] = useState(metaData);
  const [currentProduct, setCurrentProduct] = useState(Number(data.product))

  //SORT METHOD
  const handleSort = (selection) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?count=100&sort=${selection}&product_id=${currentProduct}`, {
      headers: {'Authorization': token}
    })
      .then((results) => setData(results.data))
      .catch((err) => console.log(err));
  };

  return (
    <Provider>

      <Overview />
      <Relate cards={dataUrl} />

      <Ratings reviews={data.results} meta={meta} product={currentProduct} sort={handleSort}/>
    </Provider>
  );
}



// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state =  {
//       reviews: sampleData.results,
//       meta: metaData
//     }
//   }
//   // hello is it me youre looking for

//   render() {
//     return (
//       <div>
//         {/* <h1>THIS IS KNIFE DANCE!</h1> */}
//         {/* <Overview /> */}
//         <Relate cards={dataUrl}/>

//         {/* <ReviewList reviews={this.state.reviews} meta={this.state.meta} /> */}
//       </div>
//     );
//   }
// }
export default App;
