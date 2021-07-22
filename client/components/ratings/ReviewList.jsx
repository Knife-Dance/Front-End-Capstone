import React from 'react';
import App from '../App.jsx';
import ReviewItem from './ReviewItem.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      view: 2
    }
    this.filterByRating = this.filterByRating.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.removeAll = this.removeAll.bind(this);
  }
  //METHODS
  filterByRating(star) {
    let filter = this.props.reviews.filter((item) => item.rating === star);
    this.setState({reviews: filter.concat(this.state.reviews), view: this.state.reviews.length});
  }

  removeFilter(star) {
    let remove = this.state.reviews.filter((item) => item.rating !== star);
    this.setState({reviews: remove, view: remove.length}, () => {
      if (this.state.reviews.length === 0) {
        this.setState({view: 2});
      }
    });
  }

  removeAll() {
    this.setState({reviews: [], view: 2});
  }

  render() {
    const list = this.props.reviews.slice(0, this.state.view).map((item) =>
      <div key={item.review_id}>
          <ReviewItem
            key={item.review_id}
            rating={item.rating}
            summary={item.summary}
            recommend={item.recommend}
            response={item.response}
            body={item.body}
            date={item.date}
            author={item.reviewer_name}
            helpfulness={item.helpfulness}
            photos={item.photos}
            />
          <p></p>
      </div>
    );
    const filterList = this.state.reviews.map((item) =>
    <div key={item.review_id}>
        <ReviewItem
          key={item.review_id}
          rating={item.rating}
          summary={item.summary}
          recommend={item.recommend}
          response={item.response}
          body={item.body}
          date={item.date}
          author={item.reviewer_name}
          helpfulness={item.helpfulness}
          photos={item.photos}
          />
        <p></p>
    </div>
  );
    return (
      <div>
        <ReviewBreakdown meta={this.props.meta} handleFilter={this.filterByRating} handleRemove={this.removeFilter} handleRemoveAll={this.removeAll}/>
        {this.state.reviews.length === 0 ? list : filterList}
        <div>
          {this.state.reviews.length === 0 && <button onClick={() => this.setState({view: this.state.view += 2})}>More Reviews</button>}
          <button>Add a Review +</button>
        </div>
      </div>
    );
  }
}

export default ReviewList;