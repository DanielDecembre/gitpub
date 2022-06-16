const express = require('express');
const req = require('express/lib/request');
const app = express();
const drinks = require('./models/drinks');
const port = 3000;



app.get('/', (request, respond) =>{
    respond.send('Welcome to the Github App!');
});

// index view to show drinks data
app.get('/drinks', (request, respond) =>{
    respond.render('drinks_index.ejs', {
        allDrinks: drinks
    });
});

// object destructuring
app.get('/drinks/:id', (request, respond) => {
    const {name,price,image} = drinks[request.params.id]
    respond.render('drinks_show.ejs', {name,price,image
});
});



app.listen(port, () => {
    console.log('listening on port' , port);
});