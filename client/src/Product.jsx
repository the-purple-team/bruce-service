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
            style={{ color: item }}
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
    console.log(item);
    this.setState((state) => ({
      currentColor: item,
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
        <CurrentColor>Color: {this.state.currentColor}</CurrentColor>
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
