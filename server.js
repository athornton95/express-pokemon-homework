const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pokemon = require('./pokemon');
app.use(bodyParser({extended: true}));

app.get('/pokemon', (req,res)=>{
    res.send(pokemon);
  });







app.listen(3000, () => {
    console.log('SERVERS RUNNING GO CATCH IT!');
  });