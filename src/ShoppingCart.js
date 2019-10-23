import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0em 2em;
`;

const ShoppingCart = ({items}) => (
  <CartContainer>
    <p>
      <b>{items.length}</b> items
    </p>
  </CartContainer>
);

export default ShoppingCart;
