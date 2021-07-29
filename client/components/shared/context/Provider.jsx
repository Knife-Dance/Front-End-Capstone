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

  const [outfits, setOutfits] = useState([]);

  const[ selectedStyle, setSelectedStyle] = useState()




  useEffect( async() => {
    try {
      const {data} = await axios.get('/products')
      setProducts(data);
      // console.log(products)
      setSelectedProduct(data[0].id)

    }
    catch(err) {
    console.log(err.message)
    }
  }, [])

  const handleGetStyleById = async (id) => {
    try {
      const {data} = await axios.get(`/products/${id}/styles`);
      return data
    }
    catch(err) {
    console.log(err.message);
    }

  }

  const handleGetProductById = async (id) => {
    try {
        const {data} = await axios.get(`/products/${id}`);
      return data;
    }
    catch(err) {
      console.log(err.message);
    }
  }

  const handleGetRateById = async(id) => {
    try {
      const {data} = await axios.get(`/products/${id}/review`);


      return getRateById(data)
    }
    catch(err) {
      console.log(err.message);
    }
  }



  const getRateById = (data) => {
    try {
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
      console.log(err.message);
    }
  }

  useEffect (async () => {
    if (selectedProduct) {
      try {
        let productStyle = await handleGetStyleById(selectedProduct);
        setStyles(productStyle);

        // console.log('--------------', productStyle)
        const response = await handleGetProductById(selectedProduct);
        setProductFeature(response);
        // console.log('==============', response);

        const {data} = await axios.get(`/products/${selectedProduct}/related`);
        let arr = [];

        //send one here and from the server send 3 request to the API
        // for (let i in data) {
        //   let product = await handleGetProductById(data[i]);
        //   let style = await handleGetStyleById(data[i])
        //   let rate= await handleGetRateById(data[i])
        //   arr.push({product, style, rate})
        // }



        let promises = []
        for (let i in data) {

          promises.push(axios.get(`/products/${data[i]}`),axios.get(`/products/${data[i]}/styles`),  axios.get(`/products/${data[i]}/review`))
        }
       const a = await Promise.all(promises)
       for (let i = 0 ; i < a.length; i += 3) {
        arr.push({
          product: a[i].data,
          style: a[i + 1].data,
          rate: getRateById(a[i + 2].data)
        })

       }

        setSelectedStyle(productStyle.results[0])
        setRelated(arr)


      } catch(err) {
        console.error(err.message)
      }
    }
  }, [selectedProduct])

  const addOutfit = async () => {
    let copyOutfit = [...outfits];
        copyOutfit.push({
          product: productFeature,
          style: selectedStyle,
          rate: (await handleGetRateById(productFeature.id))[0]
        })

        setOutfits(copyOutfit)
  }

  const removeOutfit = (id) => {
    setOutfits(outfits.filter(each => each.style.id !== id))
  }


  return (
    <MainContext.Provider value={{products, handleGetStyleById, selectedProduct, setSelectedProduct, styles, related, productFeature, handleGetProductById, handleGetRateById, setProductFeature, outfits, selectedStyle, setSelectedStyle, addOutfit, removeOutfit}}>


      {children}

    </MainContext.Provider>
  )
}

export default Provider