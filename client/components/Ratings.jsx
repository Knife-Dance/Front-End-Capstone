import React from 'react';
import ReactDOM from 'react-dom';
import FilterRatings from './ratings/FilterRatings/FilterRatings.jsx';
import ReviewList from './ratings/ReviewList/ReviewList.jsx';
import CreateReview from './ratings/CreateReview.jsx';
import SortReviews from './ratings/SortReviews.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      filtered: [],
      stars: [],
      photo: 'photoUrl',
      count: props.reviews.length
    }
    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
    this.lessReviews = this.lessReviews.bind(this);
    this.handleReviewFilter = this.handleReviewFilter.bind(this);
    this.setPhoto = this.setPhoto.bind(this);
  }

  //FILTER METHODS
  addFilter(star) {
    let selected = this.props.reviews.filter((review) => review.rating === star);
    let joinSelected = selected.concat(this.state.filtered);
    let addStar = this.state.stars.concat([star]);
    this.setState({filtered: joinSelected, stars: addStar});
  }
  removeFilter(star) {
    let unselected = this.state.filtered.filter((review) => review.rating !== star);
    let index = this.state.stars.indexOf(star)
    let newStars = this.state.stars;
    newStars.splice(index, 1);
    this.setState({filtered: unselected, stars: newStars});
  }
  handleReviewFilter(star) {
    if (this.state.stars.indexOf(star) === -1) {
      this.addFilter(star);
    } else {
      this.removeFilter(star);
    }
  }
  clearFilter() {
    this.setState({filtered: []});
  }

  //REVIEW LIST METHODS
  moreReviews() {
    let more = this.props.reviews.slice(0, this.state.reviews.length + 2);
    this.setState({reviews: more});
  }
  lessReviews() {
    let less = this.state.reviews.slice(0, this.state.reviews.length - 2);
    this.setState({reviews: less});
  }
  setPhoto(url) {
    this.setState({photo: url});
  }

  //PAGE RENDERS
  componentDidMount() {
    this.setState({reviews: this.props.reviews.slice(0, 2)});
  }

  render() {
    return (
      <div>
        <h1>Ratings & Reviews</h1>
        <SortReviews />
        <FilterRatings
          meta={this.props.meta}
          handleClick={this.handleReviewFilter}
          clearFilter={this.clearFilter}
          />
        <ReviewList
          reviews={this.state.filtered.length === 0 ? this.state.reviews : this.state.filtered}
          meta={this.props.meta}
          moreReviews={this.moreReviews}
          lessReviews={this.lessReviews}
          filtered={this.state.filtered}
          count={this.state.count}
          photo={this.state.photo}
          setPhoto={this.setPhoto}
          />
        <CreateReview />
      </div>
    );
  }
}

export default Ratings;