import React from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import { SearchProvider } from "./components/SearchProvider";
import SearchResults from "./components/SearchResults";
import styled from "styled-components";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <SearchBarContainer>
          <SearchForm />
          <SearchResults />
        </SearchBarContainer>
      </SearchProvider>
    </QueryClientProvider>
  );
}

export default App;
