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
    setCheck(index);
    if (data.photos[highlight] === undefined) {
      setHighlight(0);
    }
  }
  const handlePhotoClick = (event, data, index) => {
    setHighlight(index);
  }
  const handleClicked = (e) => {
    console.log(e.target.id)
    if (event.target.id === 'image') {
      if (clicked === 0) {
        setClicked(clicked + 1);
      }
      if (clicked === 1) {
        setClicked(0)
      }
    }
  }
  useEffect(() => {
    if (selectedProduct) {
      handleGetRateById(selectedProduct)
        .then(data => {
          setNum(data[1]);
          setReviews(data[0]);
        })
      setHighlight(0);
    }
  }, [selectedProduct])
  useEffect(() => {
    if (selectedStyle) {
      setMax(selectedStyle.photos.length - 1)
    }
  }, [selectedStyle])
  if (productFeature && selectedStyle && styles) {
    console.log(styles)
    return (
      <div onClick={(e) => clickListener(e, component)}>
        <div className={css.header}>
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
              {num ? <a className={css.seeAll} href="#ratings">see all {num} Reviews</a> : null}
              <p className={css.category}>{productFeature.category}</p>
              <p className={css.name} >{productFeature.name}</p>
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
            <div>
              <i style={{ float: "right" }} alt="check" className="fas fa-check"></i>
              <span><p>{productFeature.features[0].value + ' ~ ' + productFeature.features[0].feature}</p></span>
            </div>
            <div>
              <i style={{ float: "right" }} alt="check" className="fas fa-check"></i>
              <span><p>{productFeature.features[1].value + ' ~ ' + productFeature.features[1].feature}</p></span>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (<div></div>)
  }
}
export default Overview