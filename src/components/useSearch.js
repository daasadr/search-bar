import { useState, useEffect } from 'react';

const useSearch = (products, initialTerm = '', setSelectedProduct = () => {}) => {
  const [searchTerm, setSearchTerm] = useState(initialTerm);
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    }
  }, [searchTerm, products]);

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
    }
  };

  return {
    searchTerm,
    suggestions,
    searchResults,
    handleSearch,
    handleSearchConfirm,
    setSearchResults,
    setSuggestions,
    setSearchTerm,
  };
};

export default useSearch;