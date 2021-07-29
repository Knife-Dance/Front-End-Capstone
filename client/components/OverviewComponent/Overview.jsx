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
  const [reviews, setReviews] = useState(null);
  const [main, setMain] = useState(null);
  const [num, setNum] = useState(null);
  const [product, setProduct] = useState(null);
  const {productFeature, selectedProduct, styles, selectedStyle, setSelectedStyle, handleGetRateById} = useContext(MainContext);
  // console.log(selectedProduct, handleGetStyleById);
  const handlePrice = () => {
    if (selectedStyle.sale_price) {
      return (
        <div>
          <div className={css.original}>{selectedStyle.original_price}</div>
          <div className={css.sale}>{selectedStyle.sale_price}</div>
        </div>)
    } else {
      return (<div>{selectedStyle.original_price}</div>)
    }
  }
  const handleStyleSelect = (event, data) => {
    setSelectedStyle(data);
    console.log('111111111111111111', data)
    setMain(data.photos[0])
    // console.log(style);
  }
  const handlePhotoClick = (event, data) => {
    // console.log(data);
    setMain(data);
  }
  useEffect(() => {
    if (selectedProduct) {
      console.log(selectedProduct);
      handleGetRateById(selectedProduct)
        .then(data => {
          setNum(data[1]);
          setReviews(data[0]);
        })


      // console.log(style);
    }
  }, [selectedProduct])

  useEffect(() => {
    if (selectedStyle) {
      console.log(selectedStyle)
      console.log(selectedStyle.photos[0].url)
      setMain(selectedStyle.photos[0])
    }
  }, [selectedStyle])

  if (productFeature && selectedProduct && selectedStyle && styles && main) {
    // console.log('=============', productFeature)
    // console.log(styles)
    return (
      <div>
        <div className={css.overContainer}>
          <Gallery style={selectedStyle} main={main}
            handlePhotoClick={handlePhotoClick} />
          <div className={css.subContainer}>
            <ReviewAverage average={reviews} />
            {num ? <span>see all {num} Reviews</span> : null}
            <h3>{productFeature.category}</h3>
            <h2 className={css.name} >{productFeature.name}</h2>
            {handlePrice()}
            <SocialMedia />
            <StyleSelector style={selectedStyle}
              handleStyleSelect={handleStyleSelect}
              styles={styles.results} />
            <AddToCart style={selectedStyle} />

          </div>

        </div>
        <div className={css.banner}>
          <Slogan product={productFeature} />
          <div className={css.phrases}>
            <p>{productFeature.features[0].value + '~~' + productFeature.features[0].feature}</p>
            <p>{productFeature.features[1].value + '~~' + productFeature.features[1].feature}</p>

          </div>
        </div>
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default Overview