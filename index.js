require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
//cors
const cors = require("cors");
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
//explore cors
app.use(cors());
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
}); 
//headers
app.use(function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});
// Require employee routes
const Routes = require('./src/routes/routes')
// using as middleware
app.use('/api/v1/', Routes)
// listen for requests

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

