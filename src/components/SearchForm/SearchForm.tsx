import React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import SuggestionList from "../Suggestions/SuggestionList";
import { useSearchContext } from "../SearchContext";

const SearchLabel = styled.label`
  font-size: 22px;
  margin-bottom: 10px;
  padding-right: 3cm;
  font-family: "Helvetica Neue", sans-serif;
`;

const SearchForm = () => {
  const { suggestions, handleSearchConfirm } = useSearchContext();

  return (
    <>
      <SearchLabel>Vyhledávání produktů</SearchLabel>
      <div>
        <SearchInput />
        <SearchButton />
        {suggestions.length > 0 && <SuggestionList />}
      </div>
    </>
  );
};

export default SearchForm;
