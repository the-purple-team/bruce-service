const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports.ProductInfo = new Schema({
  id: { type: Number, required: true, unique: true },
  title: String,
  description: String,
  product_price: Number,
  seller: String,
  colors: String,
});
