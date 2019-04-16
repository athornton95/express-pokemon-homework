const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pokemon = require('./pokemon');
const methodOverride = require('method-override');
const morgan = require('morgan');

app.use(bodyParser({extended: true}));
app.use(express.static('css'));
app.use(methodOverride('_method'));
app.use(morgan('short'));

//INDEX
app.get('/pokemon', (req, res)=>{
    res.render('index.ejs', {
        pokemon : pokemon
    });
  });

  app.get('/pokemon', (req,res)=>{
    res.send(pokemon);
  });

//CREATE NEW
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs');
})

app.post('/pokemon', (req, res) => {
  pokemon.push(req.body);
  res.redirect('/pokemon');
})

//SHOW
  app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon : pokemon[req.params.id]
    })
})

//UPDATE
app.put('/pokemon/:id', (req, res) => {
  pokemon[req.params.id] = req.body;
  res.redirect('/pokemon');
})

//EDIT
  app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
      pokemon : pokemon[req.params.id],
      id : req.params.id
    });
  })

//DELETE

app.delete('/pokemon/:id', (req, res) => {
  pokemon.splice(req.params.id, 1);
  res.redirect('/pokemon');
})


app.listen(3000, () => {
    console.log('SERVERS RUNNING GO CATCH IT!');
  });

module.exports = app;