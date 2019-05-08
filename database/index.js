const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

let productInfoSchema = mongoose.Schema({
  // id: { type: Number, required: true, unique: true },
  title: String,
  description: String,
  product_price: Number,
  seller: String,
  colors: Array,
});

let ProductInfo = mongoose.model('ProductInfo', productInfoSchema);

const updateDatabase = (dataArray) => {
  dataArray.forEach(
    ({ id, title, description, product_price, seller, colors }) => {
      let productInfo = new ProductInfo({
        id,
        title,
        description,
        product_price,
        seller,
        colors,
      });
      productInfo.save((err, productInfo) => {
        err ? console.log(err) : console.log(productInfo);
      });
    }
  );
};

module.exports.updateDatabase = updateDatabase;
