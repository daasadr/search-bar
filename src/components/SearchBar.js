import React, { useContext } from 'react';
import styled from 'styled-components';
import SearchContext from './SearchContext';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import SuggestionList from './SuggestionList';
import ProductList from './ProductList';
import SelectedProduct from './SelectedProduct';

const ProductsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;


  @media (min-width: 1200px) {
  
     
  }
`;
const SearchLabel = styled.label`
  font-size: 22px;
  margin-bottom: 10px;
  padding-right: 3cm;
  font-family: 'Helvetica Neue', sans-serif;
`;

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* Na mobilech bude pouze jeden sloupec */
  }
`;
const SearchBar = () => {
  const {
    searchTerm,
    suggestions,
    selectedProduct,
    searchResults,
    handleSearch,
    handleSuggestionClick,
    handleSearchConfirm,
  } = useContext(SearchContext);

  return (
    <SearchBarContainer>
    <SearchLabel>Vyhledávání produktů</SearchLabel>
      <div>
        <SearchInput
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          handleSearchConfirm={handleSearchConfirm}
        />
        <SearchButton handleSearchConfirm={handleSearchConfirm} />
        {suggestions.length > 0 && (
          <SuggestionList
            suggestions={suggestions}
            handleSuggestionClick={handleSuggestionClick}
          />
        )}
      </div>
    <ProductsContainer>
      {searchResults.length > 0 ? (
       <ProductsGrid>
        <ProductList products={searchResults} />
        </ProductsGrid>  
      ) : selectedProduct ? (
        <SelectedProduct product={selectedProduct} />
      ) : null}
      </ProductsContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;