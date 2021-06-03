import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useHomeParams from "./hooks/useHomeParams";

const App = () => {
  const { page } = useHomeParams();
  const pageNumber = page ? parseInt(page) : 0;

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
