import React, { useState, useEffect } from 'react';
import styles from './SortReviews.module.css';

function SortReviews(props) {
  return (
    <div>
      <label htmlFor="options"><u>{props.numberOfReviews} reviews, sorted by&nbsp;</u></label>
      <select id="sort-options" onChange={(e) => props.sort(e.target.value)}>
        <option value="relevance">relevance</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
    </div>
  );
}


export default SortReviews;