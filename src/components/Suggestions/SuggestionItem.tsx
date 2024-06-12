import React, { useCallback } from "react"
import styled from 'styled-components';

import { useSearchContext } from '../SearchContext';


const ItemWrapper = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  color: #333;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

interface SuggestionItemProps {
  suggestion: Product;
}

const SuggestionItem = ({ suggestion }: SuggestionItemProps) => {

    const {
        handleSuggestionClick,
      } = useSearchContext();
    

    const onItemClick = useCallback(() => handleSuggestionClick(suggestion), [suggestion])

    return (
        <ItemWrapper
          onClick={onItemClick}
        >
          {suggestion.name}
        </ItemWrapper>
    )
}

export default SuggestionItem;