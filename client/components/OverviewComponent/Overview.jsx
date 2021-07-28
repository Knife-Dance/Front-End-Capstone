import React, { useState, useEffect } from 'react';

import Slogan from '../overview/Slogan/Slogan.jsx';

import Gallery from '../overview/Gallery/Gallery.jsx';

import css from './Overview.module.css';

import ReviewAverage from '../overview/ReviewAverage/ReviewAverage.jsx';

import StyleSelector from '../overview/StyleSelector/StyleSelector.jsx';

import SocialMedia from '../overview/SocialMedia/SocialMedia.jsx';

import AddToCart from '../overview/AddToCart/AddToCart.jsx';

const exampleReviews = require('../overview/exampleReviewsData.js');
const exampleStyles = require('../overview/exampleStylesData.js');

let exampleProduct = [{
  "id": 17067,
  "campus": "hr-rfp",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-02-23T04:22:44.728Z",
  "updated_at": "2021-02-23T04:22:44.728Z"
}];
let exampleMeta = {
  "product_id": "17067",
  "ratings": {
      "1": "3",
      "2": "10",
      "3": "34",
      "4": "72",
      "5": "64"
  },
  "recommended": {
      "false": "63",
      "true": "120"
  },
  "characteristics": {
      "Fit": {
          "id": 57222,
          "value": "2.5975609756097561"
      },
      "Length": {
          "id": 57223,
          "value": "2.8101265822784810"
      },
      "Comfort": {
          "id": 57224,
          "value": "3.1000000000000000"
      },
      "Quality": {
          "id": 57225,
          "value": "3.1463414634146341"
      }
  }
};
let total = 0
let num = 0
console.log(exampleMeta.ratings)
for (var key in exampleMeta.ratings) {
  total += (Number(key) * Number(exampleMeta.ratings[key]));
  num += (Number(exampleMeta.ratings[key]));
}
let average = total/num;


const Overview = (props) => {
  const [style, setStyle] = useState(exampleStyles[0]);
  const [reviews, setReviews] = useState(exampleReviews.results);
  const [main, setMain] = useState(style.photos[0]);
  const [product, setProduct] = useState(exampleProduct);
  const handlePrice = () => {
    if (style.sale_price) {
      return (
        <div>
          <div className={css.original}>{style.original_price}</div>
          <div className={css.sale}>{style.sale_price}</div>
        </div>)
    } else {
      return (<div>{style.original_price}</div>)
    }
  }
  const handleStyleSelect = (event, data) => {
    setStyle(data);
    setMain(data.photos[0])
    // console.log(style);
  }
  const handlePhotoClick = (event, data) => {
    setMain(data);
  }
  return (
    <div>
      <div className={css.overContainer}>
        <Gallery style={style} main={main}
          handlePhotoClick={handlePhotoClick} />
        <div className={css.subContainer}>
          <ReviewAverage average={average} />
          {num ? <span>see all {num} Reviews</span> : null}
          <h3>{product[0].category}</h3>
          <h2 className={css.name} >{product[0].name}</h2>
          {handlePrice()}
          <SocialMedia />
          <StyleSelector style={style}
            handleStyleSelect={handleStyleSelect}
            styles={exampleStyles} />
          <AddToCart style={style} />

        </div>

      </div>
      <div className={css.banner}>
        <Slogan product={product[0]} />
        <div className={css.phrases}>
          <p>Pasture Raised</p>
          <p>Knife Dance~!</p>
        </div>
      </div>
    </div>
  )
}

export default Overview