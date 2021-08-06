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
  const barFillStyle = (star) => {
    let total = 0;
    const count = Number(props.meta.ratings[star]);
    Object.keys(props.meta.ratings).map((keyName) => {
      total += Number(props.meta.ratings[keyName]);
    })
    const percent = count / total;
    const width = 200 * percent;
    const style = {
      position: 'relative',
      height: '7px',
      width: width,
      backgroundColor: '#a4d0ca',
      zIndex: '25',
      paddingTop: '3px',
      paddingBottom: '3px',
      marginLeft: '5px',
      top: '2px'
    };
    return style;
  };
  // const barFillStyle = {
  //   position: 'relative',
  //   height: '7px',
  //   width: barWidth(star),
  //   backgroundColor: 'gray',
  //   zIndex: '25',
  //   paddingTop: '3px',
  //   paddingBottom: '3px',
  //   marginLeft: '5px',
  //   top: '2px'
  // };

  return (
    <div>
      <div className={ styles.container }>
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
          <div className={ styles.starFilter } onClick={() => props.handleClick(5)}>5 stars:&nbsp;<div><div className={ styles.bar }></div><div style={barFillStyle(5)}></div></div></div>
          <div className={ styles.starFilter } onClick={() => props.handleClick(4)}>4 stars:&nbsp;<div><div className={ styles.bar }></div><div style={barFillStyle(4)}></div></div></div>
          <div className={ styles.starFilter } onClick={() => props.handleClick(3)}>3 stars:&nbsp;<div><div className={ styles.bar }></div><div style={barFillStyle(3)}></div></div></div>
          <div className={ styles.starFilter } onClick={() => props.handleClick(2)}>2 stars:&nbsp;<div><div className={ styles.bar }></div><div style={barFillStyle(2)}></div></div></div>
          <div className={ styles.starFilter } onClick={() => props.handleClick(1)}>1 stars:&nbsp;<div><div className={ styles.bar }></div><div style={barFillStyle(1)}></div></div></div>
        </div>
        <div>
          <button aria-label="button" onClick={() => props.clearFilter()}>Clear filter</button>
        </div>
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