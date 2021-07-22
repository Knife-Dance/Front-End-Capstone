import React from 'react';
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

  render() {
    return (
      <div>
        <h1>THIS IS KNIFE DANCE!</h1>
        <ReviewList reviews={this.state.reviews} meta={this.state.meta} />
      </div>
    );
  }
}
export default App;
