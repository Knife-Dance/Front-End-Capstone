import React from 'react';
import ProductBreakdown from '../ProductBreakdown/ProductBreakdown.jsx';
import styles from './FilterRatings.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReviewAverage from '../../overview/ReviewAverage/ReviewAverage.jsx';

function FilterRatings(props) {
  const averageRating = () => {
    const ratings = props.meta.ratings;
    let total = 0;
    let weightedTotal = 0;
    for (let key in ratings) {
      total += Number(ratings[key]);
      weightedTotal += Number(key) * Number(ratings[key]);
    }
    let result = weightedTotal / total;
    return result.toFixed(1);
  };
  const recommendPercent = () => {
    let total = Number(props.meta.recommended.false) + Number(props.meta.recommended.true);
    let ratio = Number(props.meta.recommended.true) / total * 100;
    return Math.floor(ratio);
  }

  return (
    <div>
      <div>
        <div className={ styles.averageRating }>
          <div className={ styles.flexNum }><b>{averageRating()}</b></div>
          <div className={ styles.flexStar }><ReviewAverage average={averageRating()} /></div>
        </div>
      </div>
      <div className={ styles.recommendPercent }>
        {recommendPercent()}% of reviews recommend this product
      </div>
      <div className={ styles.starBreakdown }>
        <div className={ styles.fiveStar } onClick={() => props.handleClick(5)}>5 stars: {props.meta.ratings[5]}</div>
        <div className={ styles.fourStar } onClick={() => props.handleClick(4)}>4 stars: {props.meta.ratings[4]}</div>
        <div className={ styles.threeStar } onClick={() => props.handleClick(3)}>3 stars: {props.meta.ratings[3]}</div>
        <div className={ styles.twoStar } onClick={() => props.handleClick(2)}>2 stars: {props.meta.ratings[2]}</div>
        <div className={ styles.oneStar } onClick={() => props.handleClick(1)}>1 stars: {props.meta.ratings[1]}</div>
      </div>
      <div>
        <button onClick={() => props.clearFilter()}>Clear filter</button>
      </div>
      <div>
        {Object.keys(props.meta.characteristics).map((item) =>
          <ProductBreakdown
          key={props.meta.characteristics[item].value}
          characteristic={item}
          score={props.meta.characteristics[item].value}
          />
        )}
      </div>
    </div>
  );
}


export default FilterRatings;