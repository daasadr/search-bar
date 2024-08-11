import { createContext, useContext } from "react";

interface CreateContextType {
  products: Product[];
  searchTerm: string;
  suggestions: Product[];
  selectedProduct: Product | null;
  searchResults: Product[];
  handleSearchSuggestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchConfirm: () => void;
  handleSuggestionClick: (suggestion: Product) => void;
  noResults: boolean;
}

const defaultValue: CreateContextType = {
  products: [],
  searchTerm: "",
  suggestions: [],
  selectedProduct: null,
  searchResults: [],
  handleSearchSuggestions: () => { },
  handleSearchConfirm: () => { },
  handleSuggestionClick: () => { },
  noResults: false,
};

export const SearchContext = createContext(defaultValue);

export const useSearchContext = () => useContext(SearchContext);
