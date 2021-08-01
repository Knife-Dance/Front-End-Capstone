import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CreateReview.module.css';
import axios from 'axios';
import token from '../../../../server/config.js';
import moment from 'moment';

function CreateReview(props) {
  const [hoverStarOne, setHoverStarOne] = useState(['far', 'star']);
  const [hoverStarTwo, setHoverStarTwo] = useState(['far', 'star']);
  const [hoverStarThree, setHoverStarThree] = useState(['far', 'star']);
  const [hoverStarFour, setHoverStarFour] = useState(['far', 'star']);
  const [hoverStarFive, setHoverStarFive] = useState(['far', 'star']);
  const [selectedStar, setSelectedStar] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [recommend, setRecommend] = useState(false);
  const [characteristics, setCharacteristics] = useState({});
  const [summary, setSummary] = useState(null);
  const [body, setBody] = useState('');
  const [photo, setPhoto] = useState([]);
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);


  const handleHover = (star) => {
    if (!clicked) {
      if (star === 1) {
        setHoverStarOne(['fas', 'star']);
      }
      if (star === 2) {
        setHoverStarOne(['fas', 'star']);
        setHoverStarTwo(['fas', 'star']);
      }
      if (star === 3) {
        setHoverStarOne(['fas', 'star']);
        setHoverStarTwo(['fas', 'star']);
        setHoverStarThree(['fas', 'star']);
      }
      if (star === 4) {
        setHoverStarOne(['fas', 'star']);
        setHoverStarTwo(['fas', 'star']);
        setHoverStarThree(['fas', 'star']);
        setHoverStarFour(['fas', 'star']);
      }
      if (star === 5) {
        setHoverStarOne(['fas', 'star']);
        setHoverStarTwo(['fas', 'star']);
        setHoverStarThree(['fas', 'star']);
        setHoverStarFour(['fas', 'star']);
        setHoverStarFive(['fas', 'star']);
      }
    }
  };

  const handleExit = () => {
    if(!clicked) {
      setHoverStarOne(['far', 'star']);
      setHoverStarTwo(['far', 'star']);
      setHoverStarThree(['far', 'star']);
      setHoverStarFour(['far', 'star']);
      setHoverStarFive(['far', 'star']);
    }
  };

  const handleStarClick = (star) => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
    setHoverStarOne(['far', 'star']);
    setHoverStarTwo(['far', 'star']);
    setHoverStarThree(['far', 'star']);
    setHoverStarFour(['far', 'star']);
    setHoverStarFive(['far', 'star']);
    if (star === 1) {
      setHoverStarOne(['fas', 'star']);
    }
    if (star === 2) {
      setHoverStarOne(['fas', 'star']);
      setHoverStarTwo(['fas', 'star']);
    }
    if (star === 3) {
      setHoverStarOne(['fas', 'star']);
      setHoverStarTwo(['fas', 'star']);
      setHoverStarThree(['fas', 'star']);
    }
    if (star === 4) {
      setHoverStarOne(['fas', 'star']);
      setHoverStarTwo(['fas', 'star']);
      setHoverStarThree(['fas', 'star']);
      setHoverStarFour(['fas', 'star']);
    }
    if (star === 5) {
      setHoverStarOne(['fas', 'star']);
      setHoverStarTwo(['fas', 'star']);
      setHoverStarThree(['fas', 'star']);
      setHoverStarFour(['fas', 'star']);
      setHoverStarFive(['fas', 'star']);
    }
    setSelectedStar(star);
  };

  const handleRecommend = (e) => {
    if (e.target.value === 'yes') {
      setRecommend(true);
    } else {
      setRecommend(false);
    }
  };

  const handleCharacter = (id, rating) => {
    const ratingNum = Number(rating);
    setCharacteristics(characteristics => {
      return {...characteristics, [id]: ratingNum};
    });
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    if (!clicked) {
      return alert('Please select a star rating before submitting your review');
    }
    if (Object.keys(characteristics).length === 0) {
      return alert('Please select ratings for all product characteristics (i.e. fit, quality, comfort)');
    }
    if (body.length < 50) {
      return alert('Please enter at least 50 characters in your review body');
    }
    if (nickname === null || nickname.length === 0) {
      return alert('Please enter a nickname');
    }
    if (validateEmail(email) === false) {
      return alert('Please enter a valid email');
    };
    const data = {
      'product_id': props.currentProductId,
      'rating': selectedStar,
      'summary': summary,
      'body': body,
      'recommend': recommend,
      'name': nickname,
      'email': email,
      'photos': photo,
      'characteristics': characteristics
    };
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', data, {
      headers: {'Authorization': token}
    })
      .then((success) => {
        const newItem = [
          {
            'review_id': Math.floor(Math.random() * (100000 - 10000) + 10000),
            'rating': selectedStar,
            'summary': summary,
            'recommend': recommend,
            'response': null,
            'body': body,
            'date': moment().format(),
            'reviewer_name': nickname,
            'helpfulness': 0,
            'photos': [
              {
              'id': Math.floor(Math.random() * (100000 - 10000) + 10000),
              'url': photo[0]
              }
            ]
          }
        ];
        const newReviews = newItem.concat(props.reviews);
        props.updateReviews(newReviews);
        props.modalBoolean(false);
        console.log(success);
        alert('Your review has been submitted');
      })
      .catch((err) => {
        alert('There was a problem submitting your review. Make sure you have filed out all required fields');
        console.log(err);
      });
  };

  const characterDescriptionLow = (name) => {
    switch(name) {
      case 'Size':
        return 'A size too small';
      case 'Width':
        return 'Too narrow';
      case 'Comfort':
        return 'Uncomfortable';
      case 'Quality':
        return 'Poor';
      case 'Length':
        return 'Runs short';
      case 'Fit':
        return 'Runs tight';
      default:
        return 'Poor';
    }
  };
  const characterDescriptionHigh = (name) => {
    switch(name) {
      case 'Size':
        return 'A size too wide';
      case 'Width':
        return 'Too wide';
      case 'Comfort':
        return 'Perfect';
      case 'Quality':
        return 'Perfect';
      case 'Length':
        return 'Runs long';
      case 'Fit':
        return 'Runs loose';
      default:
        return 'Perfect';
    }
  };
  const characterDescriptionMiddle = (name) => {
    switch(name) {
      case 'Size':
        return 'Perfect';
      case 'Width':
        return 'Perfect';
      case 'Comfort':
        return 'Ok';
      case 'Quality':
        return 'What I expected';
      case 'Length':
        return 'Perfect';
      case 'Fit':
        return 'Perfect';
      default:
        return 'Perfect';
    }
  };

  return (
    <div className={ styles.modalContainer }>
      <FontAwesomeIcon icon={'fas', 'window-close'} className={ styles.closeIcon } size="2x" onClick={() => props.modalBoolean(false)} />
      <h2>Write Your Review</h2>
      <h4>About the {props.currentProductName}</h4>
      <form>
        <label>
          <b>Rating:</b>&nbsp;
            <span>
              <FontAwesomeIcon icon={hoverStarOne} onMouseEnter={() => handleHover(1)} onMouseLeave={() => handleExit()} onClick={() => handleStarClick(1)}/>
              <FontAwesomeIcon icon={hoverStarTwo} onMouseEnter={() => handleHover(2)} onMouseLeave={() => handleExit()} onClick={() => handleStarClick(2)}/>
              <FontAwesomeIcon icon={hoverStarThree} onMouseEnter={() => handleHover(3)} onMouseLeave={() => handleExit()} onClick={() => handleStarClick(3)}/>
              <FontAwesomeIcon icon={hoverStarFour} onMouseEnter={() => handleHover(4)} onMouseLeave={() => handleExit()} onClick={() => handleStarClick(4)}/>
              <FontAwesomeIcon icon={hoverStarFive} onMouseEnter={() => handleHover(5)} onMouseLeave={() => handleExit()} onClick={() => handleStarClick(5)}/>
              {clicked && selectedStar === 1 && <span>&nbsp;Poor</span>}
              {clicked && selectedStar === 2 && <span>&nbsp;Fair</span>}
              {clicked && selectedStar === 3 && <span>&nbsp;Average</span>}
              {clicked && selectedStar === 4 && <span>&nbsp;Good</span>}
              {clicked && selectedStar === 5 && <span>&nbsp;Great</span>}
            </span>
        </label>
        <br/>
        <label>
          <b>Do you recommend this product?</b>
          <input type="radio" value="yes" checked={recommend} onChange={(e) => handleRecommend(e)}/>Yes
          <input type="radio" value="no" checked={!recommend} onChange={(e) => handleRecommend(e)}/>No
        </label>
        <br/>
        {Object.keys(props.meta.characteristics).map((keyName) => {
          return (
            <React.Fragment key={props.meta.characteristics[keyName].id}>
            <label>
              <b>{keyName}:</b>&nbsp;
              <div className={ styles.characterButtons }>
                <div><input type="radio" value="1" checked={characteristics[props.meta.characteristics[keyName].id] === 1} onChange={(e) => handleCharacter(props.meta.characteristics[keyName].id, e.target.value)} />1 -&nbsp;{characterDescriptionLow(keyName)}</div>
                <div><input type="radio" value="2" checked={characteristics[props.meta.characteristics[keyName].id] === 2} onChange={(e) => handleCharacter(props.meta.characteristics[keyName].id, e.target.value)} />2</div>
                <div><input type="radio" value="3" checked={characteristics[props.meta.characteristics[keyName].id] === 3} onChange={(e) => handleCharacter(props.meta.characteristics[keyName].id, e.target.value)} />3 -&nbsp;{characterDescriptionMiddle(keyName)}</div>
                <div><input type="radio" value="4" checked={characteristics[props.meta.characteristics[keyName].id] === 4} onChange={(e) => handleCharacter(props.meta.characteristics[keyName].id, e.target.value)} />4</div>
                <div><input type="radio" value="5" checked={characteristics[props.meta.characteristics[keyName].id] === 5} onChange={(e) => handleCharacter(props.meta.characteristics[keyName].id, e.target.value)} />5 -&nbsp;{characterDescriptionHigh(keyName)}</div>
              </div>
            </label>
            <br/>
            </React.Fragment>
          );
        })}
        <label>
          <b>Review Summary:&nbsp;</b>
          <input type="text" maxLength="60" size="70" placeholder="Example: Best purchase ever!" onChange={(e) => setSummary(e.target.value)}/>
        </label>
        <br/>
        <label>
          <b>Review Body:&nbsp;</b>
          <div>
            <textarea rows="10" cols="100" maxLength="1000" minLength="50" placeholder="Why did you like the product or not?" onChange={(e) => setBody(e.target.value)} required/>
          </div>
          <div>
            {body.length < 50 ? <span style={{color: "gray"}}><i>Minimum required characters left: {50 - body.length}</i></span> : <span><i>Minimum reached</i></span>}
          </div>
        </label>
        <br/>
        <label>
          <b>Upload your photo:&nbsp;</b>
          <input type="url" size="90" placeholder="Paste photo URL here" onChange={(e) => setPhoto([e.target.value])}/>
        </label>
        <br/>
        <label>
          <b>What is your nickname:&nbsp;</b>
          <input type="text" maxLength="60" size="70" required placeholder="Example: jackson11!" onChange={(e) => setNickname(e.target.value)}/>
          <div style={{color: "gray"}}><i>For privacy reasons, do not use your full name or email address</i></div>
        </label>
        <br/>
        <label>
          <b>Your e-mail:&nbsp;</b>
          <input type="email" size="70" required placeholder="Example: jackson11@email.com" onChange={(e) => setEmail(e.target.value)}/>
          <div style={{color: "gray"}}><i>For authentication reasons, you will not be emailed</i></div>
        </label>
        <br/>
        <input type="button" value="Submit review" onClick={(e) => handleSubmit(e)}/>
      </form>
    </div>
  );
}


export default CreateReview;