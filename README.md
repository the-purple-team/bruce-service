# Item Name, Description, and Options with Price

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### MongoDB Schema

```
let productInfoSchema = mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: String,
  description: String,
  product_price: Number,
  seller: String,
  colors: Array,
});
```
