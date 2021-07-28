import React, { useState, useEffect } from 'react';
import Overview from './OverviewComponent/Overview.jsx';
import Ratings from './Ratings.jsx';
import ReviewList from './ratings/ReviewList/ReviewList.jsx';
import Relate from './related/product-card/Related-product.jsx'
import dataUrl from './related/sample-data.js'
import { sampleData } from '../sampleData.js';
import { metaData } from '../metaData.js';
import axios from 'axios';

const App = (props) => {
  const [data, setData] = useState(sampleData.results);
  const [meta, setMeta] = useState(metaData);
  const [products, setProducts] = useState([{
    "id": 17067,
    "campus": "hr-rfp",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-02-23T04:22:44.728Z",
    "updated_at": "2021-02-23T04:22:44.728Z"
  }]);
  const [styles, setStyles] = useState({results: []});

  useEffect(() => {
    axios.get('/products')
      .then((response) => {
        console.log(response.data)
        setProducts(response.data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (products) {
      axios.get('/styles', { params: { id: products[0].id }})
        .then((response) => {
          console.log(response.data)
          setStyles(response.data)
        })
    }

  }, [products])

  /////////Test
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const myData = axios.get('/products');
  //     const style = await myData[0].id;
  //     setProducts(myData.data);
  //     setStyles(products[0]);

  //   }
  // }, [])



  return (
    <div>
      {/* <h1>THIS IS KNIFE DANCE!</h1> */}
      <Overview products={products} styles={styles.results}/>
      <Relate cards={dataUrl} />

      <Ratings reviews={data} meta={meta} />
    </div>
  )
}
// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state =  {
//       reviews: sampleData.results,
//       meta: metaData
//     }
//   }
//   // hello is it me youre looking for


//   render() {
//     return (
//       <div>
//         {/* <h1>THIS IS KNIFE DANCE!</h1> */}
//         <Overview />
//         <Relate cards={dataUrl}/>

//         <Ratings reviews={this.state.reviews} meta={this.state.meta} />
//       </div>
//     );
//   }
// }
export default App;
