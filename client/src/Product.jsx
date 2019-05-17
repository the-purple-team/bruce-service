import React from 'react';
import { Title, Description, Price, Seller, Colors } from './elements.jsx';

const Product = ({ currentProduct }) => {
  let {
    id,
    title,
    description,
    product_price,
    seller,
    colors,
  } = currentProduct;

  return (
    <div key={id}>
      <Title>{title}</Title>
      <Seller>{seller}</Seller>
      <Price>{product_price}</Price>
      <Colors>{colors}</Colors>
      <Description>{description}</Description>
    </div>
  );
};

export default Product;
