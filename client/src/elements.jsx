import * as React from 'react';
import styled from 'styled-components';

export const Wrapper = ({ children }) => (
  <div style={{ textAlign: 'center' }}>{children}</div>
);

export const Title = styled.div`
  font-size: 50px;
  font-weight: 400;
  color: #111;
  font-size: 21px !important;
`;

export const Description = styled.div`
  font-size: 25px;
  margin-bottom: 18px !important;
  margin-top: 10px !important;
`;

const PriceNumber = styled.div`
  font-size: 23px;
  color: #b12704;
  line-height: 1.255;
  box-sizing: border-box;
  display: inline;
`;

export const Price = ({ children }) => (
  <div
    style={{
      fontSize: '17px',
      lineHeight: '19px',
      color: '#555',
      verticalAlign: 'top',
    }}
  >
    Price: <PriceNumber>${children}</PriceNumber>
  </div>
);

const SellerName = styled.div`
  font-size: 17px;
  line-height: 19px;
  text-decoration: none;
  color: #0066c0;
  cursor: pointer;
  display: inline;
`;

export const Seller = ({ children }) => (
  <div>
    by <SellerName>{children}</SellerName>
  </div>
);

export const Color = styled.div`
  font-size: 22px;
  border: solid;
  border-color: ${(props) =>
    props.CurrentColor === props.itemColor ? 'yellow' : 'black'};
  width: 6%;
  padding: 8px;
  display: inline-block;
  margin: auto;
  margin-top: 10px;
  margin-right: 3px;
  cursor: pointer;
`;

export const CurrentColor = styled.div`
  font-size: 17px;
  line-height: 19px;
  color: #555;
  vertical-align: top;
`;
