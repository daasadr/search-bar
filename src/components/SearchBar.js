import React, { useContext } from 'react';
import styled from 'styled-components';
import SearchContext from './SearchContext';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import SuggestionList from './SuggestionList';
import ProductList from './ProductList';
import SelectedProduct from './SelectedProduct';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  width: 100%;
  max-width: none; /* Odstraníme max-width */
  justify-content: center;

  @media (min-width: 1200px) {
    /* Pro obrazovky větší než 1200px bude řazení pěti karet vedle sebe */
    grid-template-columns: repeat(5, 1fr);
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

      {searchResults.length > 0 ? (
       <ProductsGrid>
        <ProductList products={searchResults} />
        </ProductsGrid>  
      ) : selectedProduct ? (
        <SelectedProduct product={selectedProduct} />
      ) : null}
    </SearchBarContainer>
  );
};

export default SearchBar;