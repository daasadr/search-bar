import React, { createContext, useState, useEffect } from 'react';
import products from './data';

const SearchContext = createContext();


export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    useEffect(() => {
      if (searchTerm.trim() === '') {
        setSuggestions([]);
      } else {
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSuggestions(filtered);
      }
    }, [searchTerm]);
  
    const handleSearch = (term) => {
      setSearchTerm(term);
    };
  
    const handleSearchConfirm = () => {
      if (searchTerm.trim() !== '') {
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filtered);
        setSuggestions([]);
        setSelectedProduct(null);
        setSearchTerm('');
      }
    };
  
    const handleSuggestionClick = (suggestion) => {
      setSelectedProduct(suggestion);
      setSearchResults([suggestion]);
      setSuggestions([]);
      setSearchTerm('');
    };
  
    const contextValue = {
      searchTerm,
      suggestions,
      selectedProduct,
      searchResults,
      handleSearch,
      handleSuggestionClick,
      handleSearchConfirm,
    };
  
    return (
      <SearchContext.Provider value={contextValue}>
        {children}
      </SearchContext.Provider>
    );
  };

  export default SearchContext