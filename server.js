const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser({extended: true}));







app.listen(3000, () => {
    console.log('SERVERS RUNNING GO CATCH IT!');
  });