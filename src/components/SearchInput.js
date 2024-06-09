import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 0.8em 1em;
  margin: 0;
  color: ${(props) => props.inputColor || 'palevioletred'};
  background: white;
  border: 3px solid #7FDBFF;
  border-radius: 4px;
  box-shadow: 0 4px 7px rg;
  width: 300px;
  font-size: 16px;
  margin-bottom: 35px;

  &:focus {
    outline: none; /* Odstraní výchozí modrou obrubu při fokusu */
    border-color: #333; /* Změna barvy ohraničení při fokusu */
  }
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