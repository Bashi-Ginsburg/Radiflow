const express = require('express')
const bp = require('body-parser')
const cors = require('cors')
const routes = require('./routes/index')

const app = express();
const port = 3001;

app.use(cors())

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});