import React from 'react';
import ReviewItem from './ReviewItem/ReviewItem.jsx';
const moment = require('moment');


function ReviewList(props) {
  return (
    <div>
      <div>
        {props.reviews.map((review) =>
          <ReviewItem
            key={review.review_id}
            rating={review.rating}
            date={moment(review.data).format('MMMM Do YYYY')}
            summary={review.summary}
            body={review.body}
            recommend={review.recommend}
            author={review.reviewer_name}
            response={review.response}
            helpful={review.helpfulness}
            photos={review.photos}
            />
        )}
      </div>
      <div>
        {props.filtered.length === 0 && <button onClick={() => props.moreReviews()}>MORE REVIEWS</button>}
        {props.filtered.length === 0 && <button onClick={() => props.lessReviews()}>LESS REVIEWS</button>}
        <button>ADD A REVIEW +</button>
      </div>
    </div>
  );
}


export default ReviewList;