import React, { useState, useEffect, useContext } from 'react';

import Slogan from '../overview/Slogan/Slogan.jsx';

import Gallery from '../overview/Gallery/Gallery.jsx';

import css from './Overview.module.css';

import ReviewAverage from '../overview/ReviewAverage/ReviewAverage.jsx';

import StyleSelector from '../overview/StyleSelector/StyleSelector.jsx';

import SocialMedia from '../overview/SocialMedia/SocialMedia.jsx';

import AddToCart from '../overview/AddToCart/AddToCart.jsx';

import MainContext from '../shared/context/MainContext.js';





const Overview = (props) => {
  const [style, setStyle] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [max, setMax] = useState(null);
  const [num, setNum] = useState(null);
  const [product, setProduct] = useState(null);
  const [check, setCheck] = useState(0);
  const [highlight, setHighlight] = useState(0);
  const [clicked, setClicked] = useState(0);
  const { productFeature, selectedProduct, styles, selectedStyle, setSelectedStyle, handleGetRateById, clickListener } = useContext(MainContext);
  const component = "Overview Component"
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
  const handleStyleSelect = (event, data, index, highlight) => {
    setSelectedStyle(data);
    // console.log(index)
    setCheck(index);
    // console.log('111111111111111111', data)
    if (data.photos[highlight] === undefined) {
      // console.log(data)
      setHighlight(0);
    }
    // console.log(style);
  }
  const handlePhotoClick = (event, data, index) => {
    // console.log(data);
    setHighlight(index);
    // setMain(data);
  }
  const handleClicked = (e) => {
    console.log(e.target.id)
    if (event.target.id === 'image'){
      if (clicked === 0 ) {
        setClicked(clicked + 1);
      }
      if (clicked === 1) {
        setClicked(0)
      }
    }
    // console.log(clicked)
  }

  useEffect(() => {
    if (selectedProduct) {
      // console.log(selectedProduct);
      handleGetRateById(selectedProduct)
        .then(data => {
          setNum(data[1]);
          setReviews(data[0]);
        })
      setHighlight(0);

      // console.log(style);
    }
  }, [selectedProduct])

  useEffect(() => {
    if (selectedStyle) {
      // console.log(selectedStyle)
      // console.log(selectedStyle.photos[0].url)
      // setHighlight(0)
      setMax(selectedStyle.photos.length - 1)
    }
  }, [selectedStyle])

  if (productFeature && selectedProduct && selectedStyle && styles) {
    // console.log('=============', productFeature)
    // console.log(styles)
    return (
      <div onClick={(e) => clickListener(e, component)}>
        <div className={css.header}>
          {/* <span className={css.logo}>
          <i alt="logo" className="fas fa-shoe-prints fa-3x"></i>
          </span> */}
          <span className={css.team}>
            Team Zeus
          </span>

        </div>

        <div className={css.overContainer}>
          <Gallery style={selectedStyle}
            main={selectedStyle.photos[highlight]}
            max={max} clicked={clicked} handleClicked={handleClicked}
            highlight={highlight} setHighlight={setHighlight}
            handlePhotoClick={handlePhotoClick} />
          {clicked === 1 || clicked === 2 ? null :
            <div className={css.subContainer}>
              <ReviewAverage average={reviews} />
              {num ? <a href="#ratings">see all {num} Reviews</a> : null}
              <h2>{productFeature.category}</h2>
              <h3 className={css.name} >{productFeature.name}</h3>
              {handlePrice()}
              <SocialMedia />
              <StyleSelector style={selectedStyle}
                highlight={highlight}
                handleStyleSelect={handleStyleSelect}
                styles={styles.results}
                check={check} />
              <AddToCart style={selectedStyle} />
            </div>
            }


        </div>
        <div className={css.banner}>
          <Slogan product={productFeature} />
          <div className={css.phrases}>
            <p>{productFeature.features[0].value + ' ~ ' + productFeature.features[0].feature}</p>
            <p>{productFeature.features[1].value + ' ~ ' + productFeature.features[1].feature}</p>

          </div>
        </div>
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default Overview