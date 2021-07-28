const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors())

app.get('/products', (req, res) => {
  // console.log(req);
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/', {
    headers: {
      'Authorization': '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'
    }
  })
  .then(data => res.send(data.data))
  .catch(err => res.status(400).send(err.message))
})

app.get('/styles', (req, res) => {
  console.log(req.query.id);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.query.id}/styles`, {
    headers: {
      'Authorization': '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'
    }
  })
  .then(data => res.send(data.data))
  .catch(err => res.status(400).send(err.message))
})

app.listen(port, () => {
  console.log(`listening on ${port}`);
})

