import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  grid-gap: 20px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProductList = ({ products }) => {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;