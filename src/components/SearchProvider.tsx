import React, { useState, useEffect, useCallback } from "react";
import { SearchContext } from "./SearchContext";
import { useQuery } from "@tanstack/react-query";

interface FilterProductsProps {
  products: Product[];
  searchTerm: string;
}

const filterProducts = ({
  products,
  searchTerm,
}: FilterProductsProps): Product[] => {
  const loweredSearchTerm = searchTerm.toLowerCase();

  return products.filter((product) =>
    product.name.toLowerCase().includes(loweredSearchTerm),
  );
};

interface SearchProviderProps {
  children: React.ReactNode;
}

const DATA_URL = "/products.json";

const productsFetcher = () =>
  fetch(DATA_URL).then((response) => response.json());

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { data: products, error } = useQuery({
    queryKey: [DATA_URL],
    queryFn: productsFetcher,
  });

  useEffect(() => {
    console.error("Shit happens");
  }, [error]);

  const handleSearchSuggestions = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const term = (event.target as HTMLInputElement).value;
      setSearchTerm(term);
    },
    [],
  );

  useEffect(() => {
    if (searchTerm) {
      const filteredItems = filterProducts({ products, searchTerm });
      setSuggestions(filteredItems);
    }
  }, [products, searchTerm]);

  const [noResults, setNoResults] = useState<boolean>(false);

  const handleSearchConfirm = useCallback(() => {
    if (searchTerm.trim() === "") return;

    const filteredProducts = filterProducts({ products, searchTerm });
    setSearchResults(filteredProducts);
    setNoResults(filteredProducts.length === 0);
    setSuggestions([]);
    setSelectedProduct(null);
    setSearchTerm("");
  }, [searchTerm, products]);

  const handleSuggestionClick = useCallback((suggestion: Product) => {
    console.log('Setting selected product:', suggestion.name);
    setSelectedProduct(suggestion);
    setSearchResults([suggestion]);
    setSuggestions([]);
    setSearchTerm("");
  }, []);

  const contextValue = {
    products,
    searchTerm,
    suggestions,
    selectedProduct,
    searchResults,
    handleSearchSuggestions,
    handleSuggestionClick,
    handleSearchConfirm,
    noResults,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
