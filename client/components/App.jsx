import React from 'react';
import Overview from './OverviewComponent/Overview.jsx';
import ReviewList from './ratings/ReviewList.jsx';
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
        <h1>THIS IS KNIFE DANCE!</h1>
        <Overview />

        <ReviewList reviews={this.state.reviews} meta={this.state.meta} />
      </div>
    );
  }
}
export default App;
