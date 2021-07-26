import React from 'react';
import styles from './ProductBreakdown.module.css';

function ProductBreakdown(props) {
  const position = () => {
    let percentage = props.score / 5;
    return 200 * percentage;
  }
  const caretStyle = {
    position: 'relative',
    left: position()
  };
  const chevronStyle = {
    position: 'relative',
    left: 100
  }
  const descriptors = () => {
    if (props.characteristic === 'Fit') {
      return {low: 'too small', high: 'too large'};
    } else if (props.characteristic === 'Length') {
      return {low: 'too short', high: 'too long'};
    } else if (props.characteristic === 'Comfort') {
      return {low: 'uncomfortable', high: 'perfect'};
    } else if (props.characteristic === 'Quality') {
      return {low: 'poor', high: 'perfect'};
    } else if (props.characteristic === 'Width') {
      return {low: 'too narrow', high: 'too wide'};
    } else {
      return {low: 'too small', high: 'too big'};
    }
  };
  return (
    <div className={ styles.productBreakdown }>
      <p><u>{props.characteristic}</u></p>
      <div>
        <span>
          <i className="fas fa-caret-down" style={caretStyle}></i>
          <div className={ styles.bar }>{descriptors().low} <span style={{float: 'right'}}>{descriptors().high}</span></div>
        </span>
      </div>
    </div>
  );
}


export default ProductBreakdown;