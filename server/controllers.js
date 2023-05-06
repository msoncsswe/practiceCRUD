const Groceries = require('./schema');

const groceryControllers = {};

//functionality to get items
groceryControllers.getItems = async (req, res, next) => {
  try {
    const groceryList = await Groceries.find({});
    res.locals.groceries = groceryList;
    return next();
  } catch (error) {
    return next({
      log: 'getItems middleware returned error',
      message: 'unable to get the grocery list',
    });
  }
};

//functionality to add items
groceryControllers.addItem = async (req, res, next) => {
  //add error handling
  const { item, price, quantity } = req.body;
  try {
    const newGrocery = await Groceries.create({ item, price, quantity });
    res.locals.newItem = newGrocery;
    return next();
  } catch (error) {
    return next({
      log: 'unknown error caught in middleware function',
      message: 'unable to create document',
    });
  }
};

//functionality to delete items
groceryControllers.deleteItem = async (req, res, next) => {};

module.exports = groceryControllers;
