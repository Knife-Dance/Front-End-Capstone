import React from 'react';

const ReviewAverage = (props) => {
  let total = 0;
  for (var review of props.reviews) {
    total += review.rating
  }
  const average = total/props.reviews.length;
  const handleSeeAll = () => {
    if (props.reviews.length) {
      return (<div>see all {props.reviews.length.toString()} reviews </div>);
    }
  };
  return (
    <div>
      <div>{average.toString()}</div>
      {handleSeeAll()}
    </div>

  )
}
export default ReviewAverage;