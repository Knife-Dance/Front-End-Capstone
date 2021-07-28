import React from 'react';
import styles from './ReviewItem.module.css';
const moment = require('moment');

function ReviewItem(props) {
  return (
    <div>
      <div className={ styles.box }>
        <div className={ styles.rating }>Star rating: {props.rating}</div>
        <div className={ styles.author }>-verified- {props.author}, {props.date}</div>
      </div>
      <div className={ styles.boxCol }>
        <div className={ styles.summary }><b>{props.summary}</b></div>
        <div className={ styles.body }>{props.body}</div>
        <div>
          {props.photos.map((photo) => <img key={photo.id} src={photo.url} className={ styles.photos } onClick={() => props.setPhoto(photo.url)}/>)}
        </div>
        {props.recommend === true && <div className={ styles.recommend }><i className="fas fa-check"></i> I recommend this product</div>}
        {props.response !== null && <div className={ styles.response }><b>Response from seller:</b> <div>{props.response}</div></div>}
        <div className={ styles.helpful }>Was this review helpful? <span><a href="">Yes</a> ({props.helpful})</span> <span><a href="">No</a> -count-</span></div>
      </div>
    </div>
  );
}


export default ReviewItem;