const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

var path = require('path');

const app = express();
app.use(bodyParser.json())
app.use(cors())
require('./routes')(app)


app.listen(process.env.PORT || 8081)
// app.listen(8081)
