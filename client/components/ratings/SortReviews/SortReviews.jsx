import React, { useState, useEffect } from 'react';
import styles from './SortReviews.module.css';

function SortReviews(props) {
  return (
    <div>
      <label htmlFor="options">{props.numberOfReviews} reviews, sorted by </label>
      <select id="sort-options">
        <option value="relevance">relevance</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
    </div>
  );
}


export default SortReviews;