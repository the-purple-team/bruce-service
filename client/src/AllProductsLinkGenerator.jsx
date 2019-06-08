import React from 'react';
import { StyledLink } from './elements.jsx';

export const Link = ({ id, name }) => (
  <StyledLink href={`/products/${id}`}>
    {id}. {name} >
  </StyledLink>
);

const AllProductsLinkGenerator = ({ allProducts }) =>
  allProducts.map(({ id, title }) => <Link key={id} id={id} name={title} />);

export default AllProductsLinkGenerator;
