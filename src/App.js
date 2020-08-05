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
  width: 100%;
  height: 100%;
  background: #f0faff;
  overflow: "hidden";
`;
