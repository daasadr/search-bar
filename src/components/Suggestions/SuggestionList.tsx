import React from "react";
import styled from "styled-components";
import SuggestionItem from "./SuggestionItem";

import { useSearchContext } from "../SearchContext";

const SuggestionsContainer = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
  left: 45%;
  transform: translateX(-50%);
  border-radius: 4px;
  margin-top: 0;
  width: 280px;
`;

const SuggestionList = () => {
  const { suggestions } = useSearchContext();

  return (
    <SuggestionsContainer>
      {suggestions.map((suggestion) => (
        <SuggestionItem key={suggestion.id} suggestion={suggestion} />
      ))}
    </SuggestionsContainer>
  );
};

export default SuggestionList;
