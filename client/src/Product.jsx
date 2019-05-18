import React from 'react';
import {
  Title,
  Description,
  Price,
  Seller,
  Color,
  CurrentColor,
} from './elements.jsx';

const Colors = ({ children, updateCurrentColor, currentColor }) =>
  children
    ? React.Children.map(children, (item) =>
        item ? (
          <Color
            itemColor={item}
            currentColor={currentColor}
            onClick={() => updateCurrentColor(item)}
          >
            {item}
          </Color>
        ) : null
      )
    : null;

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: null,
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
  }

  updateCurrentColor(item) {
    this.setState((state) => ({
      currentColor: item,
    }));
  }

  componentDidMount() {
    console.log(this.props.currentProduct);
    // TODO: Fix this.props.currentProduct.id is undefined
    this.setState((state) => ({
      currentColor: `${this.props.currentProduct.id}`,
    }));
  }

  render() {
    let {
      id,
      title,
      description,
      product_price,
      seller,
      colors,
    } = this.props.currentProduct;

    return (
      <div key={id}>
        <Title>{title}</Title>
        <Seller>{seller}</Seller>
        <Price>{product_price}</Price>
        <CurrentColor>
          Color:{' '}
          <div
            style={{
              fontWeight: '700',
              display: 'inline-block',
              color: '#111',
            }}
          >
            {this.state.currentColor}
          </div>
        </CurrentColor>
        <Colors
          currentColor={this.state.currentColor}
          updateCurrentColor={this.updateCurrentColor}
        >
          {colors}
        </Colors>
        <Description>{description}</Description>
      </div>
    );
  }
}

export default Product;
