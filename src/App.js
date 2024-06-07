import React from 'react';
import SearchBar from './components/SearchBar';
import { SearchProvider } from './components/SearchContext';
import products from './components/data';

function App() {
  return (
    <SearchProvider>
      <div>
        <h1>Vyhledávání produktů</h1>
        <SearchBar products={products} />
      </div>
    </SearchProvider>
  );
}

export default App;