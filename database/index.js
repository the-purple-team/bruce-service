const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

let productInfoSchema = mongoose.Schema({
  // id: { type: Number, required: true, unique: true },
  title: String,
  description: String,
  product_price: Number,
  seller: String,
  colors: String,
});

let ProductInfo = mongoose.model('ProductInfo', productInfoSchema);

const updateDatabase = ({}) => {
  // let productInfo = new ProductInfo(pass data in here)
  // productInfo.save((err, productInfo) => {
  //   err ? console.log(err) : console.log(productInfo);
  // });
};

module.exports.updateDatabase = updateDatabase;
