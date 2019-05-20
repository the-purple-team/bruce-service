import React from 'react';
import { StyledLink } from './elements.jsx';

const Link = (props) => (
  <StyledLink href={`/products/${props.id}`}>
    {props.id}. {props.name} >
  </StyledLink>
);

const AllProductsLinkGenerator = (props) => {
  return props.allProducts.map((item) => (
    <Link key={item.id} id={item.id} name={item.title} />
  ));
};

export default AllProductsLinkGenerator;
