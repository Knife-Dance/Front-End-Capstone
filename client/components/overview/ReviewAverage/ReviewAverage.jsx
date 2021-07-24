import React from 'react';
import parser from 'html-react-parser';
const ReviewAverage = (props) => {
  let total = 0;
  console.log(props.reviews)
  for (var review of props.reviews) {
    total += review.rating
  }
  let average = total/props.reviews.length;
  average = Math.round(average/0.25) * 0.25;
  const handleSeeAll = () => {
    if (props.reviews.length) {
      return (<div>see all {props.reviews.length.toString()} reviews </div>);
    }
  };

  const handleStar = (num) => {
    let htmlString = '';
    for ( var i = 0; i < 5; i++) {
      if (num >= 1) {
        num--;
        htmlString += '<i class="fas fa-star"></i>'
      } else if (num === .5) {
        num -= .5;
        htmlString += '<i class="fas fa-star-half-alt"></i>'
      } else if (num === 0) {
        htmlString += '<i class="far fa-star"></i>'
      }
    }

    return htmlString;
  }
  return (
    <div>
      <div>{average.toString()}</div>
      <div>{parser(handleStar(average))}</div>
    </div>

  )
}
export default ReviewAverage;