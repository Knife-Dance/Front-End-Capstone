import React, {useState, useEffect} from 'react';

import Slogan from '../overview/Slogan/Slogan.jsx';

import Gallery from '../overview/Gallery/Gallery.jsx';

import css from './Overview.module.css';

import ReviewAverage from '../overview/ReviewAverage/ReviewAverage.jsx';

import StyleSelector from '../overview/StyleSelector/StyleSelector.jsx';

import SocialMedia from '../overview/SocialMedia/SocialMedia.jsx'

const exampleReviews = require('../overview/exampleReviewsData.js');
const exampleStyles = require('../overview/exampleStylesData.js');

let exampleProduct = {
  "id": 17067,
  "campus": "hr-rfp",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-02-23T04:22:44.728Z",
  "updated_at": "2021-02-23T04:22:44.728Z"
};

// class Overview extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       product: exampleProduct,
//       style: exampleStyle,
//       reviews: exampleReviews.results
//     }
//   }
//   render() {
//     return (
//       <div>
//         <Gallery style={this.state.style} />
//         <ReviewAverage reviews={this.state.reviews}/>
//         <h3>{this.state.product.category}</h3>
//         <h2>{this.state.product.name}</h2>
//         <Slogan product={this.state.product}/>
//       </div>
//     )
//   }
// }
const Overview = (props) => {
  const [style, setStyle] = useState(exampleStyles[0]);
  const [product, setProduct] = useState(exampleProduct);
  const [reviews, setReviews] = useState(exampleReviews.results);
  const [main, setMain] = useState(style.photos[0])
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
    console.log(style);
  }
  const handlePhotoClick = (event, data) => {
    setMain(data);
  }
  return (
    <div>
      <Gallery style={style} main={main}
      handlePhotoClick={handlePhotoClick}/>
      <ReviewAverage reviews={reviews}/>
      <h3>{product.category}</h3>
      <h2 className={css.name} >{product.name}</h2>
      {handlePrice()}
      <SocialMedia />
      <StyleSelector style={style}
      handleStyleSelect={handleStyleSelect}
      styles={exampleStyles}/>
      <Slogan product={product}/>
    </div>
  )
}

export default Overview