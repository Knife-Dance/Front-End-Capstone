import React, { useState, useEffect} from 'react';
import MainContext from './MainContext';
import axios from 'axios';
import css from './provider.module.css'



const Provider = ({children}) => {

  const [products, setProducts] = useState([]);

  const [styles, setStyles] = useState(null);

  const [selectedProduct, setSelectedProduct] = useState();

  const [related, setRelated] = useState([]);

  const [productFeature, setProductFeature] = useState([])

  const [outfits, setOutfits] = useState([]);

  const[ selectedStyle, setSelectedStyle] = useState();

  const [allReviews, setAllReviews] = useState(null);

  const [metaReviews, setMetaReviews] = useState(null);

  const [interaction, setInteraction] = useState(null);

  const [darkMode, setDarkMode] = useState(false);






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

      document.getElementsByTagName('div')

  }, []);


  const arrayWithElements = new Array();
  const clickListener = (e, comp) => {
    let clickedEl = (window.e) ? window.e.tagName : e.target;
    let tags = document.getElementsByTagName(clickedEl.tagName)

    for (let i = 0;i < tags.length; i++) {
      if (tags[i] === clickedEl) {
        arrayWithElements.push({tag:clickedEl.tagName,index:i, time: new Date(), component: comp})
        console.log(arrayWithElements);
      }
    }
    setInteraction(arrayWithElements)
  }

  // document.onclick = clickListener;

  // console.log(document.getElementsByTagName('div')[30]);
  // console.log(document.getElementsByTagName('p')[7]);


  const handleGetStyleById = async (id) => {
    try {
      const {data} = await axios.get(`/products/${id}/styles`);
      return data
    }
    catch(err) {
    console.log(err.message);
    }

  };

  const handleGetProductById = async (id) => {
    try {
        const {data} = await axios.get(`/products/${id}`);
      return data;
    }
    catch(err) {
      console.log(err.message);
    }
  };

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
      let temp = [rating, count, data]
      return temp;
    }
    catch(err) {
      console.log(err.message);
    }
  };

  useEffect (async () => {
    if (selectedProduct) {
      try {
        let productStyle = await handleGetStyleById(selectedProduct);
        setStyles(productStyle);
        const response = await handleGetProductById(selectedProduct);
        setProductFeature(response);
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
  }, [selectedProduct]);


  const addOutfit = async () => {
    let copyOutfit = [...outfits];
        copyOutfit.push({
          product: productFeature,
          style: selectedStyle,
          rate: (await handleGetRateById(productFeature.id))[0]
        })

        setOutfits(copyOutfit)
  };

  const removeOutfit = (id) => {
    setOutfits(outfits.filter(each => each.style.style_id !== id))
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }


  return (

    <MainContext.Provider value={{products, handleGetStyleById, selectedProduct, setSelectedProduct, styles, related, productFeature, handleGetProductById, handleGetRateById, allReviews, metaReviews, setAllReviews, setMetaReviews, setProductFeature, outfits, selectedStyle, setSelectedStyle, addOutfit, removeOutfit, interaction, setInteraction,  clickListener, darkMode, setDarkMode}}>

      <>

      <button className={css.darkBtn} onClick={handleDarkMode}>Dark Mode</button>
      {darkMode ? <div className={css.darkMode}>{children}</div> : <div>{children}</div>}


      </>


    </MainContext.Provider>
  );
}

export default Provider;