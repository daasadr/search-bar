import React from 'react';
import styled from 'styled-components';

const SuggestionsContainer = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
  left: 45%;
  transform: translateX(-45%);
  border-radius: 4px;
  margin-top: 4px;
  width:280px;
`;

const SuggestionItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  color: #333;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SuggestionList = ({ suggestions, handleSuggestionClick }) => {
  return (
    <SuggestionsContainer>
      {suggestions.map((suggestion) => (
        <SuggestionItem
          key={suggestion.id}
          onClick={() => handleSuggestionClick(suggestion)}
        >
          {suggestion.name}
        </SuggestionItem>
      ))}
    </SuggestionsContainer>
  );
};

export default SuggestionList;