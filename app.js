const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const dbConnection = require('./database/config');

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connection to mongoDB
dbConnection();
// Rutas

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use('/api', require('./routes/products'));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log(`App running at port: http://localhost:${app.get('port')}`);
});


