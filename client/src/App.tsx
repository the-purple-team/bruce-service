import * as React from 'react';
import ReactDOM from 'react-dom';
import {Wrapper, NavButton} from './elements.jsx';
import Product from './Product.jsx';
import AllProductsLinkGenerator from './AllProductsLinkGenerator.jsx';
const $ = require('jquery');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
      allProducts: [{title: 'Blank', id: 45}],
    };
  }

  componentDidMount() {
    if (window.location.pathname !== '/') {
      $.ajax({
        type: 'GET',
        url: `/product${window.location.pathname.slice(9)}`,
        success: ({id, title, description, product_price, seller, colors}) => {
          this.setState(state => ({
            currentProduct: {
              id: id,
              title: title,
              description: description,
              product_price: product_price,
              seller: seller,
              colors: colors,
            },
          }));
        },
      });
    } else {
      $.ajax({
        type: 'GET',
        url: '/getallproducts',
        success: results => {
          this.setState(state => ({
            allProducts: results,
          }));
        },
        error: err => console.log('TCL: App -> componentDidMount -> err', err),
      });
    }
  }

  render() {
    return (
      <Wrapper>
        <h1>Welcome to Amazon!</h1>
        <NavButton href="/">Home</NavButton>
        {window.location.pathname !== '/' ? (
          <Product currentProduct={this.state.currentProduct} />
        ) : (
          <AllProductsLinkGenerator allProducts={this.state.allProducts} />
        )}
      </Wrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
