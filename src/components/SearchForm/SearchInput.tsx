import React, { useCallback } from "react";
import styled from "styled-components";
import { useSearchContext } from "../SearchContext";

const StyledInput = styled.input`
  padding: 0.8em 1em;
  margin: 0;
  color: black;
  background: white;
  border: 3px solid #7fdbff;
  border-radius: 4px;
  box-shadow: 0 4px 7px rg;
  width: 300px;
  font-size: 16px;
  margin-bottom: 0px;

  &:focus {
    outline: none; /* Odstraní výchozí modrou obrubu při fokusu */
    border-color: #333; /* Změna barvy ohraničení při fokusu */
  }
`;

const SearchInput = () => {
  const { searchTerm, handleSearchSuggestions, handleSearchConfirm } =
    useSearchContext();

  const onEnter = useCallback(
      (event: React.KeyboardEvent) =>
        event.key === "Enter" && handleSearchConfirm(),
      [handleSearchConfirm],
    );

  return (
    <StyledInput
      type="text"
      placeholder="Vyhledat produkt..."
      value={searchTerm}
      onChange={handleSearchSuggestions}
      onKeyDown={onEnter}
    />
  );
};

export default SearchInput;
