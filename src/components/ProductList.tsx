import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useSearchContext } from "./SearchContext";

const ProductListContainer = styled.div`
  display: grid;
  margin-top: 25px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  grid-gap: 20px;
  justify-items: center;
  border: 1px solid;
  padding: 20px;
  margin: 50px;
  justify-content: space-around;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 1200px) {
    border: none;
    margin: 30px;
  }
`;

const ProductList = () => {
  const { searchResults } = useSearchContext();

  if (!searchResults.length) return null;

  return (
    <ProductListContainer>
      {searchResults.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
