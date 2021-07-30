import React, { useState } from 'react';
import styles from './ReviewItem.module.css';
import axios from 'axios';
import token from '../../../../server/config.js';

function ReviewItem(props) {
  const [helpful, setHelpful] = useState(props.helpful);
  const [reviewId, setReviewId] = useState([]);

  const handleHelpfulClick = (id) => {
    if (reviewId.indexOf(id) === -1) {
      setHelpful(helpful + 1);
      setReviewId(reviewId.concat([id]));
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${id}/helpful`, {}, {
        headers: {'Authorization': token}
      })
        .then(success => console.log(success))
        .catch(err => console.log(err));
    }
  };
  const handleReportClick = (id) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${id}/report`, {}, {
        headers: {'Authorization': token}
      })
        .then((success) => {
          alert('Review Successfully Reported');
          console.log(success);
        })
        .catch(err => console.log(err));
  };

  return (
    <div>
      <div className={ styles.box }>
        <div className={ styles.rating }>Star rating: {props.rating}</div>
        <div className={ styles.author }>{props.author}, {props.date}</div>
      </div>
      <div className={ styles.boxCol }>
        <div className={ styles.summary }><b>{props.summary}</b></div>
        <div className={ styles.body }>{props.body}</div>
        <div>
          {props.photos.map((photo) => <img key={photo.id} src={photo.url} className={ styles.photos } onClick={() => props.photoClick(photo.url)}/>)}
        </div>
        {props.recommend === true && <div className={ styles.recommend }><i className="fas fa-check"></i> I recommend this product</div>}
        {props.response !== null && <div className={ styles.response }><b>Response from seller:</b> <div>{props.response}</div></div>}
        <div className={ styles.helpful }>Helpful? <span><span className={ styles.helpfulLink } onClick={() => handleHelpfulClick(props.reviewId)}><u> Yes</u></span> ({helpful})</span><span> | </span><span className={ styles.helpfulLink } onClick={() => handleReportClick(props.reviewId)}><u>Report</u></span></div>
      </div>
    </div>
  );
}


export default ReviewItem;