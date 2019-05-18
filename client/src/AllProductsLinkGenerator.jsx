import React from 'react';

const Link = (props) => <a href={`/products/${props.id}`}>{props.name}</a>;

const AllProductsLinkGenerator = (props) => {
  console.log(props.allProducts);
  return props.allProducts.map((item) => (
    <Link id={item.id} name={item.title} />
  ));
};

export default AllProductsLinkGenerator;
