import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './elements.jsx';
import Product from './Product.jsx';
const $ = require('jquery');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {},
    };
  }

  componentDidMount() {
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
        <div>{window.location.pathname}</div>
        <Product currentProduct={this.state.currentProduct} />
      </Wrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
