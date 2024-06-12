import React from 'react';
import ProductCard from './ProductCard';
import { useSearchContext } from './SearchContext';

const SelectedProduct = () => {

  const {
    selectedProduct,
  } = useSearchContext();

  if(!selectedProduct) return null;

  return (
    <div>
      <h3>Vybraný produkt:</h3>
      <ProductCard product={selectedProduct} />
    </div>
  );
};

export default SelectedProduct;