import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || 'palevioletred'};
  background: yellow;
  border: 4px dotted #f0fff0;
  border-radius: 10px;
  width: 300px;
`;

const SearchInput = ({ searchTerm, handleSearch, handleSearchConfirm }) => {
  return (
    <StyledInput
      type="text"
      placeholder="Vyhledat produkt..."
      value={searchTerm}
      onChange={(e) => handleSearch(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSearchConfirm()}
    />
  );
};

export default SearchInput;