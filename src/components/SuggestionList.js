import React from 'react';
import styled from 'styled-components';

const SuggestionsContainer = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
  left: 0;
  right: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: -10px;
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