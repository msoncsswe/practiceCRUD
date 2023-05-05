const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const groceryControllers = require('./controllers.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve static files!!!!
app.use(express.static('client'));

//gets all the items from grocery list and sends it back
app.get('/items', groceryControllers.getItems, (req, res) => {
  return res.status(200).json(res.locals.groceries);
});

//adds item to grocery list and sends the new item back
app.post('/', groceryControllers.addItem, (req, res) => {
  return res.status(200).json(res.locals.newItem);
});

//handle wildcard error handling
app.use('*', (req, res) => res.sendStatus(404));

//global error handling here
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'caught unknown error in middleware',
    status: 400,
    message: 'error occured',
  };
  const errObj = Object.assign(defaultErr, err);
  res.status(errObj.status).json(errObj.message);
});

//listen to port
app.listen(port, () => console.log('listening to port3000'));
