import React, { useState, useEffect } from 'react';
import MainContext from './MainContext';
import axios from 'axios';
import css from './provider.module.css'
const token = require('../../../../server/config.js');



const Provider = ({ children }) => {

  const [products, setProducts] = useState([]);

  const [styles, setStyles] = useState({
    "product_id": "17067",
    "results": [
      {
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
    ]
  });

  const [selectedProduct, setSelectedProduct] = useState(17067);

  const [related, setRelated] = useState([]);

  const [productFeature, setProductFeature] = useState({
    "id": 17067,
    "campus": "hr-rfp",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-02-23T04:22:44.728Z",
    "updated_at": "2021-02-23T04:22:44.728Z",
    "features": [
      {
        "feature": "Fabric",
        "value": "Canvas"
      },
      {
        "feature": "Buttons",
        "value": "Brass"
      }
    ]
  })

  const [outfits, setOutfits] = useState([]);

  const [selectedStyle, setSelectedStyle] = useState({
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
  });

  const [allReviews, setAllReviews] = useState(null);

  const [metaReviews, setMetaReviews] = useState(null);

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


  const header = { headers: { 'Authorization': token } };
  let data = {};
  const clickListener = (e, comp) => {
    let clickedEl = (window.e) ? window.e.tagName : e.target;
    let tags = document.getElementsByTagName(clickedEl.tagName)
    for (let i = 0; i < tags.length; i++) {
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

  const handleGetStyleById = async (id) => {
    try {
      const { data } = await axios.get(`/products/${id}/styles`);
      return data
    }
    catch (err) {
      console.log(err.message);
    }

  };

  const handleGetProductById = async (id) => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      return data;
    }
    catch (err) {
      console.log(err.message);
    }
  };

  const handleGetRateById = async (id) => {
    try {
      const { data } = await axios.get(`/products/${id}/review`);


      return getRateById(data)
    }
    catch (err) {
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
    catch (err) {
      console.log(err.message);
    }
  };

  useEffect(async () => {
    if (selectedProduct) {
      try {
        let productStyle = await handleGetStyleById(selectedProduct);
        setStyles(productStyle);
        const response = await handleGetProductById(selectedProduct);
        setProductFeature(response);
        const { data } = await axios.get(`/products/${selectedProduct}/related`);
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

          promises.push(axios.get(`/products/${data[i]}`), axios.get(`/products/${data[i]}/styles`), axios.get(`/products/${data[i]}/review`))
        }
        const a = await Promise.all(promises)
        for (let i = 0; i < a.length; i += 3) {
          arr.push({
            product: a[i].data,
            style: a[i + 1].data,
            rate: getRateById(a[i + 2].data)
          })

        }

        setSelectedStyle(productStyle.results[0])
        setRelated(arr)



      } catch (err) {
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

    <MainContext.Provider value={{ products, handleGetStyleById, selectedProduct, setSelectedProduct, styles, related, productFeature, handleGetProductById, handleGetRateById, allReviews, metaReviews, setAllReviews, setMetaReviews, setProductFeature, outfits, selectedStyle, setSelectedStyle, addOutfit, removeOutfit, clickListener, darkMode, setDarkMode }}>

      {darkMode ?
        <>
          <button aria-label="button" className={css.darkBtn} onClick={handleDarkMode}>Light Mode</button>
          <div className={css.darkMode}>{children}</div>
        </> :
        <>
          <button aria-label="button" className={css.darkBtn} onClick={handleDarkMode}>Dark Mode</button>
          <div>{children}</div>
        </>}



    </MainContext.Provider>
  );
}

export default Provider;