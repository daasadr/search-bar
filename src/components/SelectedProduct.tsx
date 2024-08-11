import React from "react";
import ProductCard from "./ProductCard";
import { useSearchContext } from "./SearchContext";

const SelectedProduct = () => {
  const { selectedProduct } = useSearchContext();
  console.log('SelectedProduct rendering, selectedProduct:', selectedProduct);

  if (!selectedProduct) return null;

  return (
    <div data-testid="selected-product">
      <h3>Vybraný produkt:</h3>
      <ProductCard product={selectedProduct} />
    </div>
  );
};

export default SelectedProduct;
