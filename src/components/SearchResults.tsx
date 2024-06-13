import React, { useContext } from "react";

import { useSearchContext } from "./SearchContext";
import styled from "styled-components";

import ProductList from "./ProductList";
import SelectedProduct from "./SelectedProduct";

const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 1200px) {
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      1,
      1fr
    ); /* Na mobilech bude pouze jeden sloupec */
  }
`;

const SearchResults = () => {
  const { selectedProduct, searchResults } = useSearchContext();

  return (
    <ProductsContainer>
      {searchResults.length > 0 ? (
        <ProductsGrid>
          <ProductList />
        </ProductsGrid>
      ) : selectedProduct ? (
        <SelectedProduct />
      ) : null}
    </ProductsContainer>
  );
};

export default SearchResults;
