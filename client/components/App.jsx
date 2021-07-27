import React from 'react';
import Overview from './OverviewComponent/Overview.jsx';
import Ratings from './Ratings.jsx';
<<<<<<< HEAD
//import ReviewList from './ratings/ReviewList.jsx';

=======
import ReviewList from './ratings/ReviewList.jsx';
import Relate from './related/product-card/Related-product.jsx'
import dataUrl from './related/sample-data.js'
>>>>>>> 635ff15185b1ece6719f81976962f3b97fa3d896
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
        {/* <Overview /> */}
        <Relate cards={dataUrl}/>

        {/* <ReviewList reviews={this.state.reviews} meta={this.state.meta} /> */}
      </div>
    );
  }
}
export default App;
