import React from 'react';
import ReactDOM from 'react-dom';
import FilterRatings from './ratings/FilterRatings.jsx';
import ReviewList from './ratings/ReviewList.jsx';
import CreateReview from './ratings/CreateReview.jsx';
import ProductBreakdown from './ratings/ProductBreakdown.jsx';
import SortReviews from './ratings/SortReviews.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>Ratings & Reviews</h1>
        <FilterRatings meta={this.props.meta} />
        <ProductBreakdown />
        <SortReviews />
        <ReviewList reviews={this.props.reviews} meta={this.props.meta} />
        <CreateReview />
      </div>
    );
  }
}

export default Ratings;