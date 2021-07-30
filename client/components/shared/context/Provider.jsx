import React, { useState, useEffect} from 'react';
import MainContext from './MainContext';
import axios from 'axios';

const Provider = ({children}) => {
  //the whole product
  const [products, setProducts] = useState([]);

  //the whole style obj with url
  const [styles, setStyles] = useState(null);

  //it is set to the overview component at first and then it changes when user clicks on a card
  const [selectedProduct, setSelectedProduct] = useState();

  //it gets the related array data
  const [related, setRelated] = useState([]);

  const [productFeature, setProductFeature] = useState([]);

  const [allReviews, setAllReviews] = useState(null);

  const [metaReviews, setMetaReviews] = useState(null);

  useEffect(() => {
    axios.get('/products')
      .then((data) => {
        setProducts(data.data);
        setSelectedProduct(data.data[0].id);
        return axios.get(`/reviews/${data.data[0].id}`)
      })
      .then((data) => {
        setAllReviews(data.data.results);
        return axios.get(`/products/${data.data.product}/review`)
      })
      .then((data) => {
        setMetaReviews(data.data);
      })
      .catch(err => console.log(err.message));
  }, [])

  const handleGetStyleById = async (id) => {
    try {
      const {data} = await axios.get(`/products/${id}/styles`);
      return data
    }
    catch(err) {
    console.log(err);
    }

  }

  const handleGetProductById = async (id) => {
    try {
        const {data} = await axios.get(`/products/${id}`);
      return data;
    }
    catch(err) {
      console.log(err);
    }
  }

  const handleGetRateById = async(id) => {
    try {
      const {data} = await axios.get(`/products/${id}/review`);

      let sum = 0;
      let count = 0;
      for (let i = 1; i <= 5; i++) {
        let num = data.ratings[i]
        if (num) {
          count += parseInt(num);
          sum += parseInt(num) * i;
        }
      }
      let rating = sum / count;
      let temp = [rating, count, data]
      return temp;
    }
    catch(err) {
      console.log(err);
    }
  }

  useEffect (async () => {
    if (selectedProduct) {
      try {
        let productStyle = await handleGetStyleById(selectedProduct);
        setStyles(productStyle);
        const response = await handleGetProductById(selectedProduct);
        setProductFeature(response);
        console.log(response)
        const {data} = await axios.get(`/products/${selectedProduct}/related`);
        let arr = [];

        //send one here and from the server send 3 request to the API
        for (let i in data) {
          let product = await handleGetProductById(data[i]);
          let style = await handleGetStyleById(data[i])
          let rate= await handleGetRateById(data[i])
          arr.push({product, style, rate})
        }

        setRelated(arr);


      } catch(err) {
        console.error(err)
      }
    }
  }, [selectedProduct])


  return (
    <MainContext.Provider value={{products, handleGetStyleById, selectedProduct, setSelectedProduct, styles, related, productFeature, handleGetStyleById, handleGetProductById, handleGetRateById, allReviews, metaReviews, setAllReviews}}>


      {children}

    </MainContext.Provider>
  )
}

export default Provider