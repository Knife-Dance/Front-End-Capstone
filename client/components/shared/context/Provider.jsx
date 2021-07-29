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

  const [productFeature, setProductFeature] = useState([])


  useEffect( async() => {
    try {
      const {data} = await axios.get('/products')
      setProducts(data);
      setSelectedProduct(data[0].id)
    }
    catch(err) {
    console.log(err)
    }
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
      let temp = [rating, count]
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

        for (let i in data) {
          let product = await handleGetProductById(data[i]);
          let style = await handleGetStyleById(data[i])
          let rate= await handleGetRateById(data[i])
          arr.push({product, style, rate})
        }

        setRelated(arr)


      } catch(err) {
        console.error(err)
      }
    }
  }, [selectedProduct])


  return (
    <MainContext.Provider value={{products, handleGetStyleById, selectedProduct, setSelectedProduct, styles, related, handleGetRateById, productFeature}}>

      {children}

    </MainContext.Provider>
  )
}

export default Provider