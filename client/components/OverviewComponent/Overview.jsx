import React, { useState, useEffect, useContext } from 'react';

import Slogan from '../overview/Slogan/Slogan.jsx';

import Gallery from '../overview/Gallery/Gallery.jsx';

import css from './Overview.module.css';

import ReviewAverage from '../overview/ReviewAverage/ReviewAverage.jsx';

import StyleSelector from '../overview/StyleSelector/StyleSelector.jsx';

import SocialMedia from '../overview/SocialMedia/SocialMedia.jsx';

import AddToCart from '../overview/AddToCart/AddToCart.jsx';

import MainContext from '../shared/context/MainContext.js';

const exampleReviews = require('../overview/exampleReviewsData.js');
const exampleStyles = require('../overview/exampleStylesData.js');



const Overview = (props) => {
  const [style, setStyle] = useState(null);
  const [styles, setStyles] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [main, setMain] = useState(null);
  const [num, setNum] = useState(null);
  const [product, setProduct] = useState(null);
  const {productFeature, selectedProduct, handleGetStyleById, handleGetProductById, handleGetRateById} = useContext(MainContext);
  // console.log(selectedProduct, handleGetStyleById);
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
    // console.log(data);
    setMain(data);
  }
  useEffect(() => {
    if (selectedProduct) {
      console.log(selectedProduct)
      handleGetProductById(selectedProduct)
        .then(data => {
          setProduct(data);
          // console.log(data)
        })
      handleGetStyleById(selectedProduct)
        .then(data => {
          // console.log(data);
          // console.log(selectedProduct)
          setStyles(data.results)
          setStyle(data.results[0])
          setMain(data.results[0].photos[0])
        })
      handleGetRateById(selectedProduct)
        .then(data => {
          setNum(data[1]);
          setReviews(data[0]);
        })
      // console.log(style);
    }
  }, [selectedProduct])
  if (product && selectedProduct && style && styles && main) {
    return (
      <div>
        <div className={css.overContainer}>
          <Gallery style={style} main={main}
            handlePhotoClick={handlePhotoClick} />
          <div className={css.subContainer}>
            <ReviewAverage average={reviews} />
            {num ? <span>see all {num} Reviews</span> : null}
            <h3>{product.category}</h3>
            <h2 className={css.name} >{product.name}</h2>
            {handlePrice()}
            <SocialMedia />
            <StyleSelector style={style}
              handleStyleSelect={handleStyleSelect}
              styles={styles} />
            <AddToCart style={style} />

          </div>

        </div>
        <div className={css.banner}>
          <Slogan product={product} />
          <div className={css.phrases}>
            <p>{product.features[0].value + product.features[0].feature}</p>
            <p>{product.features[1].value + product.features[1].feature}</p>

          </div>
        </div>
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default Overview