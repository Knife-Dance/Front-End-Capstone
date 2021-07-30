const token = require('./config.js');
const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios')

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors());

//HEADER WITH TOKEN
const header = {headers: {'Authorization': token}};

//CURRENT PRODUCT
let currentProduct;

//FIRST GET REQUEST ON PAGE RENDER
app.get('/product', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/?count=1', header)
    .then((data) => {
      currentProduct = data.data;
      let currentProductId = data.data[0].id;
      const productLevelInformation = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/?product_id=${currentProductId}`, header);
      const productStyles = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/?product_id=${currentProductId}/styles`, header);
      const relatedProducts = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/?product_id=${currentProductId}/related`, header);
      const productReviews = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${currentProductId}&count=250&sort=relevant`, header);
      const metaReviews = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${currentProductId}`, header);
      return axios.all([productLevelInformation, productStyles, relatedProducts, productReviews, metaReviews]);
    })
    .then((dataArray) => {
      const dataObject = {
        'currentProduct': currentProduct,
        'productLevelInformation': dataArray[0].data,
        'productStyles': dataArray[1].data,
        'relatedProducts': dataArray[2].data,
        'productReviews': dataArray[3].data,
        'metaReviews': dataArray[4].data
      }
      res.send(dataObject);
    })
    .catch((err) => {
      res.status(404).send(err)
      console.log(err);
    });
});

//WHEN A PRODUCT IS CLICKED ON
app.get('/product/:id', (req, res) => {
  let currentProductId = Number(req.params.id);
  const productLevelInformation = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/?product_id=${currentProductId}`, header);
  const productStyles = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/?product_id=${currentProductId}/styles`, header);
  const relatedProducts = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/?product_id=${currentProductId}/related`, header);
  const productReviews = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${currentProductId}&count=250&sort=relevant`, header);
  const metaReviews = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${currentProductId}`, header);
  axios.all([productLevelInformation, productStyles, relatedProducts, productReviews, metaReviews])
    .then((dataArray) => {
      const dataObject = {
        'productLevelInformation': dataArray[0].data,
        'productStyles': dataArray[1].data,
        'relatedProducts': dataArray[2].data,
        'productReviews': dataArray[3].data,
        'metaReviews': dataArray[4].data
      }
      res.send(dataObject);
    })
    .catch((err) => {
      res.status(404).send(err)
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
})