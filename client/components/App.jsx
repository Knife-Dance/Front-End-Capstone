import React from 'react';
import Overview from './OverviewComponent/Overview.jsx';
import Ratings from './Ratings.jsx';
<<<<<<< HEAD
import ReviewList from './ratings/ReviewList.jsx';
import Relate from './related/product-card/Related-product.jsx';
import dataUrl from './related/sample-data.js';
=======
import ReviewList from './ratings/ReviewList/ReviewList.jsx';
import Relate from './related/product-card/Related-product.jsx'
import dataUrl from './related/sample-data.js'
>>>>>>> 375177e313bad4b250fc0520b1976c3c5e94a8fc
import { sampleData } from '../sampleData.js';
import { metaData } from '../metaData.js';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state =  {
      reviews: sampleData.results,
      meta: metaData
    }
  }
  // hello is it me youre looking for


  render() {
    return (
      <div>
        {/* <h1>THIS IS KNIFE DANCE!</h1> */}
        <Overview />
        <Relate cards={dataUrl}/>

        <Ratings reviews={this.state.reviews} meta={this.state.meta} />
      </div>
    );
  }
}
export default App;
