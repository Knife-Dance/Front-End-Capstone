import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CreateReview.module.css';

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
  }

  const handleCharacter = (id, rating) => {
    const ratingNum = Number(rating);
    setCharacteristics(characteristics => {
      return {...characteristics, [id]: ratingNum};
    });
  }

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
    <div>
      <h2>Write Your Review</h2>
      <h4>About the {props.currentProductName}, {props.currentProductId}</h4>
      <form>
        <label>
          Rating (1-5):&nbsp;
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
          Do you recommend this product?
          <input type="radio" value="yes" checked={recommend} onChange={(e) => handleRecommend(e)}/>Yes
          <input type="radio" value="no" checked={!recommend} onChange={(e) => handleRecommend(e)}/>No
        </label>
        <br/>
        {Object.keys(props.meta.characteristics).map((keyName) => {
          return (
            <React.Fragment key={props.meta.characteristics[keyName].id}>
            <label>
              {keyName}:&nbsp;
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
      </form>
    </div>
  );
}


export default CreateReview;