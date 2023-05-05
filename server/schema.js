const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://yuulspd:Bd9rvG1mkZFBdlsb@cluster0.bqavqhr.mongodb.net/?retryWrites=true&w=majority'
);

const grocerySchema = new mongoose.Schema({
  item: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Groceries = mongoose.model('Groceries', grocerySchema);

module.exports = Groceries;
