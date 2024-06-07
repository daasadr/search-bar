import React from 'react';
import styled from 'styled-components';

const ProductCardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  max-width: 250px; /* Změna maximální šířky */
  width: 100%; /* Přidáno pro zajištění stejné šířky */
  height: 350px; /* Přidáno pro zajištění stejné výšky */
  margin: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 150px;
  object-fit: contain;
  margin-top: 10px;
`;

const ProductCard = ({ product }) => {
  return (
    <ProductCardContainer>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <ProductImage src={product.imageURL} alt={product.name} />
    </ProductCardContainer>
  );
};

export default ProductCard;