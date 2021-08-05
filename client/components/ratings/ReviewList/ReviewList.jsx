import React from 'react';
import ReviewItem from '../ReviewItem/ReviewItem.jsx';
import styles from './ReviewList.module.css';
const moment = require('moment');


function ReviewList(props) {
  return (
    <div>
      <div className={ styles.reviewList }>
        {props.reviews.map((review) =>
          <ReviewItem
            key={review.review_id}
            reviewId={review.review_id}
            rating={review.rating}
            date={moment(review.data).format('MMMM Do YYYY')}
            summary={review.summary}
            body={review.body}
            recommend={review.recommend}
            author={review.reviewer_name}
            response={review.response}
            helpful={review.helpfulness}
            photos={review.photos}
            photoClick={props.photoClick}
            />
        )}
        <div id="bottom"></div>
      </div>
      <div>
        {props.filtered.length === 0 && props.reviews.length > 0 && props.count > props.reviews.length && <a href="#bottom"><button aria-label="button" onClick={() => props.moreReviews()}>MORE REVIEWS</button></a>}
        {props.filtered.length === 0 && props.reviews.length > 2 && <button aria-label="button" onClick={() => props.lessReviews()}>LESS REVIEWS</button>}
        <button aria-label="button" onClick={() => props.modalBoolean(true)}>ADD A REVIEW +</button>
      </div>
    </div>
  );
}


export default ReviewList;