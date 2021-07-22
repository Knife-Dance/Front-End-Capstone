import React, {useState, useEffect} from 'react';

import Slogan from '../overview/Slogan/Slogan.jsx';

import Gallery from '../overview/Gallery/Gallery.jsx';

import ReviewAverage from '../overview/ReviewAverage/ReviewAverage.jsx';

const exampleReviews = require('../overview/exampleReviewsData.js');

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
let exampleStyle = {
  "style_id": 90250,
  "name": "Forest Green & Black",
  "original_price": "140.00",
  "sale_price": null,
  "default?": true,
  "photos": [
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      },
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
      },
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
      },
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
      },
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      },
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      }
  ],
  "skus": {
      "522040": {
          "quantity": 8,
          "size": "XS"
      },
      "522041": {
          "quantity": 16,
          "size": "S"
      },
      "522042": {
          "quantity": 17,
          "size": "M"
      },
      "522043": {
          "quantity": 10,
          "size": "L"
      },
      "522044": {
          "quantity": 15,
          "size": "XL"
      },
      "522045": {
          "quantity": 4,
          "size": "XL"
      }
  }
}
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
  const [style, setStyle] = useState(exampleStyle);
  const [product, setProduct] = useState(exampleProduct);
  const [reviews, setReviews] = useState(exampleReviews.results);
  const handlePrice = () => {
      if (style.sale_price) {
        return (
        <div>
          <div>{style.original_price}</div>
          <div>{style.sale_price}</div>
        </div>)
      } else {
        return (<div>{style.original_price}</div>)
      }
  }
  return (
    <div>
      <Gallery style={style} />
      <ReviewAverage reviews={reviews}/>
      <h3>{product.category}</h3>
      <h2>{product.name}</h2>
      <Slogan product={product}/>
    </div>
  )
}

export default Overview