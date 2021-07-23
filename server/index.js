const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors())

app.listen(port, () => {
  console.log(`listening on ${port}`);
})

