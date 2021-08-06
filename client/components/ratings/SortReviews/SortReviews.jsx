import React, { useState, useEffect } from 'react';
import styles from './SortReviews.module.css';

function SortReviews(props) {
  return (
    <div style={{fontSize: '20px'}}>
      <label htmlFor="options">{props.numberOfReviews} reviews, sorted by&nbsp;</label>
      <select id="sort-options" onChange={(e) => props.sort(e.target.value)} className={ styles.dropDown }>
        <option value="relevance">relevance</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
    </div>
  );
}


export default SortReviews;