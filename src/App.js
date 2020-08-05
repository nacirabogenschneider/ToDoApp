import React from "react";
import styled from "styled-components/macro";
import List from "./components/List";

function App() {
  return (
    <MainSection>
      <List />
    </MainSection>
  );
}

export default App;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #f0faff;
`;
