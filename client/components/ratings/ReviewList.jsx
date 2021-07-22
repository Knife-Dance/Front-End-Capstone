import React from 'react';
import App from '../App.jsx';
import ReviewItem from './ReviewItem.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 2
    }
  }
  //METHODS

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
    return (
      <div>
        {list}
        <button onClick={() => this.setState({view: this.state.view += 2})}>More Reviews</button>
      </div>
    );
  }
}

export default ReviewList;