import React from "react";
import styled from "styled-components";
import { useSearchContext } from "../SearchContext";

const ConfirmButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const SearchButton = () => {
  const { handleSearchConfirm } = useSearchContext();
  return <ConfirmButton data-testid="search-button" onClick={handleSearchConfirm}>Potvrdit</ConfirmButton>;
};

export default SearchButton;
