const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

let productSchema = mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: String,
  description: String,
  product_price: Number,
  seller: String,
  colors: Array,
});

let ProductInfo = mongoose.model('ProductInfo', productSchema);

const updateDatabase = (dataArray) => {
  let failure = false;
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
        err
          ? (() => {
              console.log(err);
              failure = true;
            })()
          : null;
      });
    }
  );
  !failure ? console.log('Success!') : null;
};

module.exports.updateDatabase = updateDatabase;
