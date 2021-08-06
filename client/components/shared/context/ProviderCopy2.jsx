// import React, { useState, useEffect} from 'react';
// import MainContext from './MainContext';
// import axios from 'axios';
// import css from './provider.module.css'
// const token = require('../../../../server/config.js');



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

  const [darkMode, setDarkMode] = useState(false);


  const getRateById = (data) => {
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
  };

  const header = {headers: {'Authorization': token}};

  useEffect(() => {
    let currentId;
    let arr = [];
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/', header)
      .then((data) => {
        currentId = data.data[0].id;
        setProducts(data.data);
        setSelectedProduct(currentId);
      })
    .then(() => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${currentId}&count=250&sort=relevant`, header).then(reviews => setAllReviews(reviews.data.results));
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${currentId}`, header).then(meta => setMetaReviews(meta.data));
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentId}/styles`, header).then((styles) => {setStyles(styles.data); setSelectedStyle(styles.data.results[0]);});
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentId}`, header).then(feature => setProductFeature(feature.data));
      return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentId}/related`, header);
    })
    .then((related) => {
      for (let id of related.data) {
        axios.all([axios.get(`/products/${id}`),axios.get(`/products/${id}/styles`),  axios.get(`/products/${id}/review`)])
          .then((data) => {
            arr.push({
              'product': data[0].data,
              'style': data[1].data,
              'rate': getRateById(data[2].data)
            });
          });
        }
        setRelated(arr);
      })
    .catch((err) => console.log('Error on initial API calls: ', err));
  }, []);


  let data = {};
  const clickListener = (e, comp) => {
    let clickedEl = (window.e) ? window.e.tagName : e.target;
    let tags = document.getElementsByTagName(clickedEl.tagName)

    for (let i = 0;i < tags.length; i++) {
      if (tags[i] === clickedEl) {
        data = {
          'element': clickedEl.tagName,
          'widget': comp,
          'time': new Date().toString()
        };
      }
    }
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/interactions', data, header)
    .then(success => console.log('Success: ', data))
    .catch(err => console.log('Error: ', err));
  }

  const handleGetStyleById = (id) => {
    return axios.get(`/products/${id}/styles`);
  };

  const handleGetProductById = (id) => {
    return axios.get(`/products/${id}`);
  };

  const handleGetRateById = (id) => {
    return axios.get(`/products/${id}/review`)
      .then((data) => getRateById(data.data))
      .catch((err) => console.log('Handle get rate by id error: ', err));
  }


  // useEffect (() => {
  //   if (selectedProduct) {
  //     axios.all([
  //       // axios.get(`/reviews/${selectedProduct}`).then(reviews => setAllReviews(reviews.data.results)),
  //       // axios.get(`/products/${selectedProduct}/review`).then(meta => setMetaReviews(meta.data)),
  //       axios.get(`/products/${selectedProduct}/styles`).then((styles) => {setStyles(styles.data); setSelectedStyle(styles.data.results[0]);}),
  //       axios.get(`/products/${selectedProduct}`).then(feature => setProductFeature(feature.data)),
  //       axios.get(`/products/${selectedProduct}/related`)
  //     ])
  //     .then((promisesArray) => {
  //       let relatedId = promisesArray[2].data;
  //       let arr = [];
  //       for (let id = 0; id <= 3; id++) {
  //         axios.all([axios.get(`/products/${relatedId[id]}`),axios.get(`/products/${relatedId[id]}/styles`),  axios.get(`/products/${relatedId[id]}/review`)]).then((dataArray) => {
  //           arr.push({
  //             'product': dataArray[0].data,
  //             'style': dataArray[1].data,
  //             'rate': getRateById(dataArray[2].data)
  //           });
  //         })
  //         .catch(err => console.log('Error retrieving related products: ', err));
  //       }
  //       setRelated((related) => {
  //         return [...related, arr];
  //       });
  //     })
  //   }
  // }, [selectedProduct]);


  const addOutfit = async () => {
    let copyOutfit = [...outfits];
        copyOutfit.push({
          product: productFeature,
          style: selectedStyle,
          rate: handleGetRateById(productFeature.id)[0]
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

    <MainContext.Provider value={{products, handleGetStyleById, selectedProduct, setSelectedProduct, styles, related, productFeature, handleGetProductById, handleGetRateById, allReviews, metaReviews, setAllReviews, setMetaReviews, setProductFeature, outfits, selectedStyle, setSelectedStyle, addOutfit, removeOutfit, clickListener, darkMode, setDarkMode}}>

      <>

      <button className={css.darkBtn} onClick={handleDarkMode}>Dark Mode</button>
      {darkMode ? <div className={css.darkMode}>{children}</div> : <div>{children}</div>}


      </>


    </MainContext.Provider>
  );
}

// export default Provider;