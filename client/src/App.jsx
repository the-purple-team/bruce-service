import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './elements.jsx';
import Product from './Product.jsx';
import AllProductsLinkGenerator from './AllProductsLinkGenerator.jsx';
const $ = require('jquery');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
      allProducts: [],
    };
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/getallproducts/',
      success: (results) => {
        console.log(results);
        this.setState((state) => ({
          allProducts: results,
        }));
      },
    });
    if (window.location.pathname !== '/') {
      $.ajax({
        type: 'GET',
        url: `${window.location.pathname.slice(9)}`,
        success: ({
          id,
          title,
          description,
          product_price,
          seller,
          colors,
        }) => {
          this.setState((state) => ({
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
    }
  }

  render() {
    return (
      <Wrapper>
        <h1>Welcome to Amazon!</h1>
        <a style={{ marginBottom: '10px', fontSize: '18px' }} href="/">
          Home
        </a>
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
