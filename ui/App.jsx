import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import usePageNumber from "./hooks/usePageNumber";

const App = () => {
  const pageNumber = usePageNumber();

  return (
    <MainContainer>
      Hello World! page: {pageNumber}{" "}
      <Link to={`/${pageNumber + 1}`}>test</Link>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: white;
`;

export default App;
