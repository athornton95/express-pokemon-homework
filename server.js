const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pokemon = require('./pokemon');
app.use(bodyParser({extended: true}));
app.use(express.static('css'));


app.get('/pokemon', (req, res)=>{
    res.render('index.ejs', {
        pokemon : pokemon
    });
  });

  app.get('/pokemon', (req,res)=>{
    res.send(pokemon);
  });

  app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon : pokemon[req.params.id]
    })
})



app.listen(3000, () => {
    console.log('SERVERS RUNNING GO CATCH IT!');
  });

  module.exports = app;