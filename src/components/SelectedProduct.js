import React from 'react';
import ProductCard from './ProductCard';

const SelectedProduct = ({ product }) => {
  return (
    <div>
      <h3>Vybraný produkt:</h3>
      <ProductCard product={product} />
    </div>
  );
};

export default SelectedProduct;